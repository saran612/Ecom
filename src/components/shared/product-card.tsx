import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";

import type { Product } from "@/lib/placeholder-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StarRating } from "./star-rating";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-lg">
      <CardContent className="p-0">
        <div className="relative">
          <Link href={`/shop/${product.id}`}>
            <Image
              src={product.images[0].url}
              alt={product.name}
              width={600}
              height={600}
              className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={product.images[0].hint}
            />
          </Link>
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-2 right-2 h-8 w-8 rounded-full bg-background/50 hover:bg-background"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-4">
          <p className="text-xs text-muted-foreground">{product.category}</p>
          <h3 className="mt-1 font-semibold truncate">
            <Link href={`/shop/${product.id}`}>{product.name}</Link>
          </h3>
          <div className="mt-2 flex items-center justify-between">
            <div>
              <p className="text-lg font-bold text-foreground">
                ${product.price.toFixed(2)}
              </p>
              {product.compareAtPrice && (
                <p className="text-sm text-muted-foreground line-through">
                  ${product.compareAtPrice.toFixed(2)}
                </p>
              )}
            </div>
            <Button size="icon" variant="outline">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <StarRating rating={product.rating} size={14} />
            <span className="text-xs text-muted-foreground">
              ({product.reviewCount})
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
