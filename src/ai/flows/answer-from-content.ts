'use server';
/**
 * @fileOverview An AI agent that answers questions based on provided article content.
 *
 * - answerFromContent - A function that answers questions based on content.
 * - AnswerFromContentInput - The input type for the answerFromContent function.
 * - AnswerFromContentOutput - The return type for the answerFromContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerFromContentInputSchema = z.object({
  topicContent: z
    .string()
    .describe('The content of the article to use as context.'),
  question: z.string().describe("The user's question."),
});
export type AnswerFromContentInput = z.infer<
  typeof AnswerFromContentInputSchema
>;

const AnswerFromContentOutputSchema = z.object({
  answer: z.string().describe('The answer to the question, in Spanish.'),
});
export type AnswerFromContentOutput = z.infer<
  typeof AnswerFromContentOutputSchema
>;

export async function answerFromContent(
  input: AnswerFromContentInput
): Promise<AnswerFromContentOutput> {
  return answerFromContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerFromContentPrompt',
  input: {schema: AnswerFromContentInputSchema},
  output: {schema: AnswerFromContentOutputSchema},
  system: `Eres un ayudante de IA amigable y servicial para niños. Tu propósito es responder preguntas basadas ÚNICAMENTE en el contenido del artículo proporcionado. Si la respuesta a la pregunta no se encuentra en el artículo, debes decir amablemente que no tienes esa información en el material.

  Debes responder SIEMPRE y ÚNICAMENTE en español.

  Aquí está el contenido del artículo que debes usar como base para tus respuestas:
  ---
  {{{topicContent}}}
  ---
  `,
  prompt: `Por favor, responde la siguiente pregunta: {{{question}}}`,
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const answerFromContentFlow = ai.defineFlow(
  {
    name: 'answerFromContentFlow',
    inputSchema: AnswerFromContentInputSchema,
    outputSchema: AnswerFromContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
