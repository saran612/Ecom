import Link from "next/link";
import {
  CreditCard,
  Truck,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { products } from "@/lib/placeholder-data";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

function OrderSummary() {
    const cartItems = products.slice(0, 2);
    const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
    const shipping = 10;
    const total = subtotal + shipping;

    return (
        <Card className="bg-muted/50">
            <CardHeader>
                <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {cartItems.map(item => (
                    <div key={item.id} className="flex items-center gap-4">
                        <Image src={item.images[0].url} alt={item.name} width={64} height={64} className="rounded-md" data-ai-hint={item.images[0].hint}/>
                        <div className="flex-1">
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted-foreground">Qty: 1</p>
                        </div>
                        <p className="font-medium">${item.price.toFixed(2)}</p>
                    </div>
                ))}
                <Separator />
                 <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                 <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </CardContent>
        </Card>
    );
}

export default function CheckoutPage() {
  return (
    <div className="container py-12">
        <div className="mb-8 text-center">
            <h1 className="font-headline text-4xl font-bold">Checkout</h1>
            <p className="text-muted-foreground">Complete your purchase</p>
        </div>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="space-y-8">
            <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                    <User className="h-6 w-6"/>
                    <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                     <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="you@example.com" />
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                    <Truck className="h-6 w-6"/>
                    <CardTitle>Shipping Address</CardTitle>
                </CardHeader>
                 <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="first-name">First Name</Label>
                            <Input id="first-name" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="last-name">Last Name</Label>
                            <Input id="last-name" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                         <div className="space-y-2">
                            <Label htmlFor="city">City</Label>
                            <Input id="city" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="state">State</Label>
                            <Input id="state" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="zip">ZIP Code</Label>
                            <Input id="zip" />
                        </div>
                    </div>
                 </CardContent>
            </Card>

            <Card>
                 <CardHeader className="flex flex-row items-center gap-4">
                    <CreditCard className="h-6 w-6"/>
                    <CardTitle>Payment Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="space-y-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input id="card-number" placeholder="xxxx xxxx xxxx xxxx"/>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2 col-span-2">
                            <Label htmlFor="expiry-date">Expiry Date</Label>
                            <Input id="expiry-date" placeholder="MM / YY" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
        <div className="space-y-8">
            <OrderSummary />
            <Button size="lg" className="w-full">Place Order</Button>
        </div>
      </div>
    </div>
  );
}
