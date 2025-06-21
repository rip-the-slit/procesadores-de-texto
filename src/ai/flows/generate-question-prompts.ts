// src/ai/flows/generate-question-prompts.ts
'use server';

/**
 * @fileOverview Generates question prompts to encourage deeper thinking about a topic.
 *
 * - generateQuestionPrompts - A function that generates question prompts.
 * - GenerateQuestionPromptsInput - The input type for the generateQuestionPrompts function.
 * - GenerateQuestionPromptsOutput - The return type for the generateQuestionPrompts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateQuestionPromptsInputSchema = z.object({
  topic: z.string().describe('The topic to generate questions for.'),
  content: z.string().describe('The content of the topic.'),
});
export type GenerateQuestionPromptsInput = z.infer<typeof GenerateQuestionPromptsInputSchema>;

const GenerateQuestionPromptsOutputSchema = z.object({
  questions: z.array(z.string()).describe('An array of questions to prompt deeper thinking about the topic.'),
});
export type GenerateQuestionPromptsOutput = z.infer<typeof GenerateQuestionPromptsOutputSchema>;

export async function generateQuestionPrompts(input: GenerateQuestionPromptsInput): Promise<GenerateQuestionPromptsOutput> {
  return generateQuestionPromptsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateQuestionPromptsPrompt',
  input: {schema: GenerateQuestionPromptsInputSchema},
  output: {schema: GenerateQuestionPromptsOutputSchema},
  prompt: `You are an AI assistant that generates questions to help young users think more deeply about a topic.

  Topic: {{{topic}}}
  Content: {{{content}}}

  Generate 3 questions IN SPANISH about the topic and content that will encourage the user to explore the topic further.`,
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

const generateQuestionPromptsFlow = ai.defineFlow(
  {
    name: 'generateQuestionPromptsFlow',
    inputSchema: GenerateQuestionPromptsInputSchema,
    outputSchema: GenerateQuestionPromptsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
