import { openai } from '@ai-sdk/openai';
import { streamText, pipeUIMessageStreamToResponse, createUIMessageStream, convertToModelMessages } from 'ai';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const knowledgeBase = readFileSync(
  join(process.cwd(), 'api', 'knowledge-base.md'),
  'utf-8'
);

const systemPrompt = `You are "Ask Sheraz" — a friendly, professional AI assistant on Sheraz Tariq's portfolio website (hiresheraz.com). You answer questions about Sheraz's skills, experience, projects, and background using the knowledge base below.

Guidelines:
- Be concise and helpful. Keep responses short (2-4 sentences) unless the user asks for detail.
- Stay on topic — only answer questions related to Sheraz's professional profile, skills, experience, and projects.
- If asked something outside your knowledge, say: "I don't have that information, but you can reach Sheraz directly at sherazztariq@gmail.com"
- Be warm and conversational, reflecting Sheraz's approachable personality.
- When relevant, suggest the user check out the resume or connect on LinkedIn.
- Never make up information that isn't in the knowledge base.

Knowledge Base:
${knowledgeBase}`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: { message: 'Method not allowed', code: 'METHOD_NOT_ALLOWED' } });
  }

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: { message: 'Messages array is required', code: 'INVALID_REQUEST' } });
    }

    const modelMessages = await convertToModelMessages(messages);

    const result = streamText({
      model: openai('gpt-4o-mini'),
      system: systemPrompt,
      messages: modelMessages,
      maxTokens: 500,
    });

    pipeUIMessageStreamToResponse({
      response: res,
      stream: createUIMessageStream({
        execute: async ({ writer }) => {
          writer.merge(result.toUIMessageStream());
        },
      }),
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return res.status(500).json({
      error: { message: "I can't answer that right now — email Sheraz directly at sherazztariq@gmail.com", code: 'SERVER_ERROR' }
    });
  }
}
