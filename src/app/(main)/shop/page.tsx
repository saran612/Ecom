import { ProductCard } from "@/components/shared/product-card";
import { products, categories } from "@/lib/placeholder-data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

function Filters() {
  return (
    <aside className="w-full lg:w-64">
      <h2 className="font-headline text-2xl font-bold">Filters</h2>
      <Accordion type="multiple" defaultValue={["category", "price"]} className="w-full">
        <AccordionItem value="category">
          <AccordionTrigger className="font-semibold">Category</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox id={category.id} />
                  <Label htmlFor={category.id}>{category.name}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price">
          <AccordionTrigger className="font-semibold">Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="p-1">
              <Slider
                defaultValue={[500]}
                max={1000}
                step={10}
              />
              <div className="mt-2 flex justify-between text-sm text-muted-foreground">
                <span>$0</span>
                <span>$1000</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button className="mt-4 w-full">Apply Filters</Button>
    </aside>
  );
}

export default function ShopPage() {
  return (
    <div className="container py-12">
      <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
        <h1 className="font-headline text-4xl font-bold">Shop All Products</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">Sort by</span>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Most Popular" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        <Filters />
        <div className="flex-1">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button variant="outline">Load More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
