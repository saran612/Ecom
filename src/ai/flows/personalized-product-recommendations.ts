'use server';

/**
 * @fileOverview A personalized product recommendation AI agent.
 *
 * - personalizedProductRecommendations - A function that handles the personalized product recommendation process.
 * - PersonalizedProductRecommendationsInput - The input type for the personalizedProductRecommendations function.
 * - PersonalizedProductRecommendationsOutput - The return type for the personalizedProductRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedProductRecommendationsInputSchema = z.object({
  browsingHistory: z
    .array(z.string())
    .describe('The customer browsing history, an array of product IDs.'),
  purchaseHistory: z
    .array(z.string())
    .describe('The customer purchase history, an array of product IDs.'),
  preferences: z
    .string()
    .describe('The customer preferences, as a comma separated string.'),
  numberOfRecommendations: z
    .number()
    .default(5)
    .describe('The number of product recommendations to return.'),
});
export type PersonalizedProductRecommendationsInput = z.infer<
  typeof PersonalizedProductRecommendationsInputSchema
>;

const PersonalizedProductRecommendationsOutputSchema = z.object({
  productRecommendations: z
    .array(z.string())
    .describe('The list of recommended product IDs.'),
});
export type PersonalizedProductRecommendationsOutput = z.infer<
  typeof PersonalizedProductRecommendationsOutputSchema
>;

export async function personalizedProductRecommendations(
  input: PersonalizedProductRecommendationsInput
): Promise<PersonalizedProductRecommendationsOutput> {
  return personalizedProductRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedProductRecommendationsPrompt',
  input: {schema: PersonalizedProductRecommendationsInputSchema},
  output: {schema: PersonalizedProductRecommendationsOutputSchema},
  prompt: `You are a product recommendation expert for an e-commerce website.

Based on the customer's browsing history, purchase history, and preferences, you will recommend products that the customer might like.

Return ONLY a JSON array of product ids. Do not include any text or explanation.

Browsing History: {{{browsingHistory}}}
Purchase History: {{{purchaseHistory}}}
Preferences: {{{preferences}}}
Number of Recommendations: {{{numberOfRecommendations}}}

`,
});

const personalizedProductRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedProductRecommendationsFlow',
    inputSchema: PersonalizedProductRecommendationsInputSchema,
    outputSchema: PersonalizedProductRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
