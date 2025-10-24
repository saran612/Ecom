import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { products } from "@/lib/placeholder-data";

export default function CartPage() {
  const cartItems = products.slice(0, 3);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = 10;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="container py-12">
      <h1 className="mb-8 font-headline text-4xl font-bold">Your Cart</h1>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4">
                    <Image
                      src={item.images[0].url}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="rounded-md object-cover"
                      data-ai-hint={item.images[0].hint}
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.category}
                      </p>
                      <p className="font-bold">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center rounded-md border">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium">1</span>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="space-y-2 pt-4">
                 <Input placeholder="Coupon code" />
                 <Button variant="outline" className="w-full">Apply Coupon</Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" size="lg">
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
