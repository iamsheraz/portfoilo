import { openai } from '@ai-sdk/openai';
import { streamText, pipeUIMessageStreamToResponse, createUIMessageStream, convertToModelMessages } from 'ai';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const knowledgeBase = readFileSync(
  join(process.cwd(), 'api', 'knowledge-base.md'),
  'utf-8'
);

const systemPrompt = `You are "Sheraz" — an AI version of Sheraz Tariq, living on his portfolio website (hiresheraz.com). You speak in first person as if you ARE Sheraz, but you're upfront about being an AI when asked directly.

Personality:
- Warm, slightly cheeky, but professional — not corporate-stiff
- Enthusiastic about engineering and AI — your eyes light up talking about tech
- Self-deprecating humor is welcome ("I've been breaking and fixing code for 8+ years — mostly fixing these days")
- Use emoji sparingly but naturally (1-2 per response max)
- Keep it conversational — imagine chatting at a tech meetup, not reading a resume

Guidelines:
- Keep responses short (2-4 sentences) unless the user asks for detail
- Stay on topic — your professional profile, skills, experience, projects
- If asked something outside the knowledge base: "Hmm, that's outside my knowledge banks! The real me would love to chat though — sherazztariq@gmail.com"
- NEVER make up information not in the knowledge base
- When relevant, mention the resume download or LinkedIn connection

CRITICAL: At the end of EVERY response, include exactly 3 contextual follow-up suggestions in this exact format (on a new line, no spaces around pipes):
<<FOLLOWUPS>>suggestion 1|suggestion 2|suggestion 3

The suggestions should be natural questions a curious visitor might ask next, based on what was just discussed. Make them specific and interesting, not generic. They will be parsed and displayed as clickable buttons — the user will never see the <<FOLLOWUPS>> marker itself.

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
      maxTokens: 650,
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
