'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';

import { generateProductDescription } from '@/ai/flows/product-description-generator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '../ui/textarea';

type DescriptionGeneratorProps = {
  onDescriptionGenerated: (description: string) => void;
};

export function DescriptionGenerator({ onDescriptionGenerated }: DescriptionGeneratorProps) {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!prompt) {
      toast({
        title: 'Prompt is empty',
        description: 'Please enter a few words about your product.',
        variant: 'destructive',
      });
      return;
    }
    setLoading(true);
    try {
      const result = await generateProductDescription({ prompt });
      onDescriptionGenerated(result.description);
      toast({
        title: 'Description generated!',
        description: 'The product description has been updated.',
      });
    } catch (error) {
      console.error('Failed to generate description:', error);
      toast({
        title: 'Generation failed',
        description: 'Could not generate a description. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-2 rounded-md border border-dashed p-4">
        <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <Label htmlFor="ai-prompt" className="font-semibold">AI Description Generator</Label>
        </div>
        <p className="text-sm text-muted-foreground">Describe your product in a few words, and let AI write a compelling description for you.</p>
        <div className="flex items-center gap-2 pt-2">
            <Input
                id="ai-prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., handmade ceramic coffee mug, blue glaze"
                disabled={loading}
            />
            <Button onClick={handleGenerate} disabled={loading}>
                {loading ? 'Generating...' : 'Generate'}
            </Button>
        </div>
    </div>
  );
}
