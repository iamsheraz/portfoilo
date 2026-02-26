import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { pathToFileURL } from 'url';

function apiDevServer(env) {
  return {
    name: 'api-dev-server',
    configureServer(server) {
      // Load server-side env vars (OPENAI_API_KEY etc.) into process.env
      Object.assign(process.env, env);

      server.middlewares.use('/api/chat', async (req, res) => {
        try {
          // Polyfill Express-like res methods for Vercel handler compatibility
          res.status = (code) => { res.statusCode = code; return res; };
          res.json = (data) => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
          };

          // Parse JSON body for POST requests
          if (req.method === 'POST') {
            const chunks = [];
            for await (const chunk of req) chunks.push(chunk);
            req.body = JSON.parse(Buffer.concat(chunks).toString());
          }

          // Dynamic import with cache busting so edits to chat.mjs are picked up
          const handlerUrl = pathToFileURL(resolve('api/chat.mjs')).href;
          const { default: handler } = await import(`${handlerUrl}?t=${Date.now()}`);
          await handler(req, res);
        } catch (error) {
          console.error('API dev server error:', error);
          if (!res.headersSent) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: { message: 'Dev server error', code: 'DEV_ERROR' } }));
          }
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  // Load ALL env vars (empty prefix = no filter), not just VITE_ prefixed
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), apiDevServer(env)],
    server: {
      open: true,
    },
    optimizeDeps: {
      include: ['@ai-sdk/react', 'ai'],
    },
  };
});
