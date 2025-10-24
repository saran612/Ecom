import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard } from "@/components/shared/product-card";
import { ProductRecommender } from "@/components/ai/product-recommender";

import { categories, products } from "@/lib/placeholder-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const heroImage = PlaceHolderImages.find(img => img.id === 'hero-banner');

function HeroSection() {
  return (
    <section className="relative h-[50vh] min-h-[400px] w-full">
      {heroImage && 
        <Image
            src={heroImage.imageUrl}
            alt="Hero banner"
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
        />
      }
      <div className="absolute inset-0 bg-black/40" />
      <div className="container relative flex h-full flex-col items-start justify-center text-white">
        <h1 className="font-headline text-4xl font-bold md:text-6xl">
          Discover Unique Finds
        </h1>
        <p className="mt-4 max-w-lg text-lg text-gray-200">
          Explore a universe of products from talented vendors around the globe.
        </p>
        <Button asChild className="mt-6" size="lg">
          <Link href="/shop">
            Shop Now <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

function CategoriesSection() {
  return (
    <section className="container py-16">
      <h2 className="mb-8 text-center font-headline text-3xl font-bold">
        Shop by Category
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link href="#" key={category.id}>
            <Card className="group overflow-hidden rounded-lg">
              <CardContent className="relative h-48 p-0">
                <Image
                  src={category.image.url}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={category.image.hint}
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative flex h-full items-center justify-center">
                  <h3 className="font-headline text-2xl font-bold text-white">
                    {category.name}
                  </h3>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

function FeaturedProductsSection() {
  const featuredProducts = products.slice(0, 4);
  return (
    <section className="bg-secondary py-16">
      <div className="container">
        <h2 className="mb-8 text-center font-headline text-3xl font-bold">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RecommendationsSection() {
    return (
        <section className="container py-16">
            <h2 className="mb-8 text-center font-headline text-3xl font-bold">
                Just For You
            </h2>
            <ProductRecommender />
        </section>
    );
}

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <RecommendationsSection />
    </div>
  );
}
