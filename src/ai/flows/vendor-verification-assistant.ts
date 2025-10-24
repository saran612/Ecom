'use server';

/**
 * @fileOverview A vendor verification assistant AI agent.
 *
 * - vendorVerificationAssistant - A function that handles the vendor verification process.
 * - VendorVerificationAssistantInput - The input type for the vendorVerificationAssistant function.
 * - VendorVerificationAssistantOutput - The return type for the vendorVerificationAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VendorVerificationAssistantInputSchema = z.object({
  vendorApplicationData: z
    .string()
    .describe(
      'The vendor application data, including store name, description, contact information, and any other relevant details provided by the vendor.'
    ),
});
export type VendorVerificationAssistantInput = z.infer<typeof VendorVerificationAssistantInputSchema>;

const VendorVerificationAssistantOutputSchema = z.object({
  summary: z.string().describe('A summary of the vendor application data.'),
  potentialIssues: z
    .array(z.string())
    .describe(
      'A list of potential issues or red flags identified in the vendor application data that require further investigation.'
    ),
  recommendation: z
    .string()
    .describe(
      'A recommendation on whether to approve or reject the vendor application based on the analysis of the provided information.'
    ),
});
export type VendorVerificationAssistantOutput = z.infer<typeof VendorVerificationAssistantOutputSchema>;

export async function vendorVerificationAssistant(
  input: VendorVerificationAssistantInput
): Promise<VendorVerificationAssistantOutput> {
  return vendorVerificationAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'vendorVerificationAssistantPrompt',
  input: {schema: VendorVerificationAssistantInputSchema},
  output: {schema: VendorVerificationAssistantOutputSchema},
  prompt: `You are an AI-powered assistant designed to help administrators verify vendor applications for an e-commerce platform.

You will analyze the vendor's application data and identify any potential issues or red flags that require further investigation.
Based on your analysis, you will provide a recommendation on whether to approve or reject the vendor application.

Vendor Application Data:
{{vendorApplicationData}}

Output:
- summary: A brief summary of the vendor application data.
- potentialIssues: A list of potential issues or red flags identified in the vendor application data.
- recommendation: A recommendation on whether to approve or reject the vendor application.

Make sure to populate all the fields of the output schema. Be concise.`,
});

const vendorVerificationAssistantFlow = ai.defineFlow(
  {
    name: 'vendorVerificationAssistantFlow',
    inputSchema: VendorVerificationAssistantInputSchema,
    outputSchema: VendorVerificationAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
