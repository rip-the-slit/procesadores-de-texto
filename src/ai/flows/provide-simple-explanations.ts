'use server';

/**
 * @fileOverview An AI agent that provides simple explanations of topics for young users.
 *
 * - provideSimpleExplanation - A function that provides simple explanations.
 * - SimpleExplanationInput - The input type for the provideSimpleExplanation function.
 * - SimpleExplanationOutput - The return type for the provideSimpleExplanation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SimpleExplanationInputSchema = z.object({
  topic: z.string().describe('The topic to explain.'),
});
export type SimpleExplanationInput = z.infer<typeof SimpleExplanationInputSchema>;

const SimpleExplanationOutputSchema = z.object({
  explanation: z.string().describe('A simple, easy-to-understand explanation of the topic.'),
});
export type SimpleExplanationOutput = z.infer<typeof SimpleExplanationOutputSchema>;

export async function provideSimpleExplanation(
  input: SimpleExplanationInput
): Promise<SimpleExplanationOutput> {
  return provideSimpleExplanationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'simpleExplanationPrompt',
  input: {schema: SimpleExplanationInputSchema},
  output: {schema: SimpleExplanationOutputSchema},
  prompt: `You are a friendly AI companion designed to provide simple, easy-to-understand explanations of topics for young users.

  Please provide a clear and concise explanation of the following topic:
  {{{topic}}}
  `,
});

const provideSimpleExplanationFlow = ai.defineFlow(
  {
    name: 'provideSimpleExplanationFlow',
    inputSchema: SimpleExplanationInputSchema,
    outputSchema: SimpleExplanationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
