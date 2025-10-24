import Image from "next/image";
import { notFound } from "next/navigation";
import { Star, ShoppingCart, Minus, Plus } from "lucide-react";

import { products, reviews, Product as ProductType } from "@/lib/placeholder-data";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { StarRating } from "@/components/shared/star-rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProductCard } from "@/components/shared/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type ProductPageProps = {
  params: {
    productId: string;
  };
};

function ReviewsSection({ product }: { product: ProductType }) {
  const productReviews = reviews.filter(r => r.productId === product.id);
  return (
    <section className="mt-12">
      <h3 className="font-headline text-2xl font-bold">Customer Reviews</h3>
      <div className="mt-4 flex items-center gap-2">
        <StarRating rating={product.rating} />
        <span className="text-muted-foreground">
          Based on {product.reviewCount} reviews
        </span>
      </div>
      <Separator className="my-6" />
      <div className="space-y-6">
        {productReviews.map((review) => (
          <div key={review.id} className="flex gap-4">
            <Avatar>
              <AvatarImage src={review.avatarUrl} alt={review.author} />
              <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-semibold">{review.author}</h4>
                <span className="text-xs text-muted-foreground">
                  {review.createdAt}
                </span>
              </div>
              <StarRating rating={review.rating} size={14} className="mt-1" />
              <p className="mt-2 font-medium">{review.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {review.comment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function RelatedProductsSection() {
    const relatedProducts = products.slice(4, 8);
    return (
        <section className="mt-16">
            <h2 className="font-headline text-3xl font-bold text-center">Related Products</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <Carousel>
            <CarouselContent>
              {product.images.map((image, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={image.url}
                    alt={`${product.name} - image ${index + 1}`}
                    width={600}
                    height={600}
                    className="aspect-square w-full rounded-lg object-cover shadow-lg"
                    data-ai-hint={image.hint}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
        <div>
          <p className="font-semibold text-primary">{product.category}</p>
          <h1 className="mt-1 font-headline text-4xl font-bold">
            {product.name}
          </h1>
          <div className="mt-4 flex items-center gap-2">
            <StarRating rating={product.rating} />
            <span className="text-sm text-muted-foreground">
              ({product.reviewCount} reviews)
            </span>
          </div>
          <p className="mt-4 text-3xl font-bold">
            ${product.price.toFixed(2)}
            {product.compareAtPrice && (
              <span className="ml-2 text-xl text-muted-foreground line-through">
                ${product.compareAtPrice.toFixed(2)}
              </span>
            )}
          </p>
          <p className="mt-4 text-muted-foreground">{product.description}</p>
          
          <Separator className="my-6" />

          <div className="flex items-center gap-4">
            <p className="font-medium">Quantity:</p>
            <div className="flex items-center rounded-md border">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-10 text-center font-medium">1</span>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <Button size="lg" className="mt-6 w-full">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>

          <p className="mt-4 text-sm text-muted-foreground">
            {product.stock > 0
              ? `${product.stock} items in stock`
              : "Out of stock"}
          </p>
        </div>
      </div>

      <ReviewsSection product={product} />
      <RelatedProductsSection />
    </div>
  );
}
