'use client';

import { useEffect, useState } from 'react';
import { personalizedProductRecommendations } from '@/ai/flows/personalized-product-recommendations';
import { ProductCard } from '@/components/shared/product-card';
import { Product, products } from '@/lib/placeholder-data';
import { Skeleton } from '@/components/ui/skeleton';

export function ProductRecommender() {
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecommendations() {
      try {
        // In a real app, you would pass actual user data.
        const result = await personalizedProductRecommendations({
          browsingHistory: ['prod-1', 'prod-3'],
          purchaseHistory: ['prod-6'],
          preferences: 'fashion, minimalist',
          numberOfRecommendations: 4,
        });
        
        // This is a mock implementation. In a real scenario, you'd fetch product details
        // based on the IDs returned by the AI. Here, we'll just show some random products.
        const recommendedProducts = products
          .sort(() => 0.5 - Math.random())
          .slice(0, 4);

        setRecommendations(recommendedProducts);
      } catch (error) {
        console.error('Failed to fetch recommendations:', error);
        // Fallback to random products on error
        const fallbackProducts = products.sort(() => 0.5 - Math.random()).slice(0, 4);
        setRecommendations(fallbackProducts);
      } finally {
        setLoading(false);
      }
    }

    fetchRecommendations();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-2">
                <Skeleton className="h-64 w-full" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-1/3" />
            </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {recommendations.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
