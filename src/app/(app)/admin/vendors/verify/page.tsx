import { VendorVerifier } from "@/components/ai/vendor-verifier";
import { CardDescription } from "@/components/ui/card";

export default function VendorVerifyPage() {
  return (
    <>
      <div className="mb-6">
        <h1 className="font-headline text-2xl font-bold">Vendor Verification Assistant</h1>
        <CardDescription>
            Use AI to analyze vendor applications for potential issues and get a recommendation.
        </CardDescription>
      </div>

      <VendorVerifier />
    </>
  );
}
