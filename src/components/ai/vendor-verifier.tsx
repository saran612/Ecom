'use client';

import { useState } from 'react';
import { Bot, CheckCircle, AlertTriangle } from 'lucide-react';
import {
  vendorVerificationAssistant,
  VendorVerificationAssistantOutput,
} from '@/ai/flows/vendor-verification-assistant';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

export function VendorVerifier() {
  const [applicationData, setApplicationData] = useState('');
  const [result, setResult] = useState<VendorVerificationAssistantOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleVerify = async () => {
    if (!applicationData) {
      toast({
        title: 'Application data is empty',
        description: 'Please paste the vendor application data to verify.',
        variant: 'destructive',
      });
      return;
    }
    setLoading(true);
    setResult(null);
    try {
      const verificationResult = await vendorVerificationAssistant({
        vendorApplicationData: applicationData,
      });
      setResult(verificationResult);
    } catch (error) {
      console.error('Failed to verify vendor:', error);
      toast({
        title: 'Verification failed',
        description: 'An error occurred during verification. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Vendor Application Data</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="application-data">Paste Application Details</Label>
            <Textarea
              id="application-data"
              value={applicationData}
              onChange={(e) => setApplicationData(e.target.value)}
              placeholder="Store Name: ...&#10;Description: ...&#10;Contact: ..."
              rows={10}
              disabled={loading}
            />
          </div>
          <Button onClick={handleVerify} disabled={loading}>
            <Bot className="mr-2 h-4 w-4" />
            {loading ? 'Analyzing...' : 'Verify with AI'}
          </Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>AI Verification Result</CardTitle>
        </CardHeader>
        <CardContent>
          {loading && (
            <div className="space-y-4">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-16 w-full" />
            </div>
          )}
          {result ? (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Summary</h3>
                <p className="text-sm text-muted-foreground">{result.summary}</p>
              </div>
              <div>
                <h3 className="font-semibold">Potential Issues</h3>
                {result.potentialIssues.length > 0 ? (
                  <ul className="list-disc pl-5 text-sm text-muted-foreground">
                    {result.potentialIssues.map((issue, i) => (
                      <li key={i}>{issue}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">No issues identified.</p>
                )}
              </div>
              <div>
                <h3 className="font-semibold">Recommendation</h3>
                <div className={`flex items-center gap-2 text-sm font-medium ${result.recommendation.toLowerCase().includes('approve') ? 'text-green-600' : 'text-amber-600'}`}>
                   {result.recommendation.toLowerCase().includes('approve') ? <CheckCircle className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
                  <p>{result.recommendation}</p>
                </div>
              </div>
            </div>
          ) : (
            !loading && (
              <div className="flex h-full min-h-[200px] flex-col items-center justify-center rounded-md border-2 border-dashed">
                <Bot className="h-12 w-12 text-muted-foreground" />
                <p className="mt-2 text-muted-foreground">Verification results will appear here.</p>
              </div>
            )
          )}
        </CardContent>
      </Card>
    </div>
  );
}
