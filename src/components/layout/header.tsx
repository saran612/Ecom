import Link from "next/link";
import { Search, ShoppingCart, User, Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/shared/logo";
import { Product, products } from "@/lib/placeholder-data";
import Image from "next/image";

function CartSheet() {
  const cartItems = products.slice(0, 2);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <ShoppingCart className="h-5 w-5" />
          <span className="sr-only">Open cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader className="pr-6">
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto">
          {cartItems.length > 0 ? (
            <div className="space-y-4">
              {cartItems.map((item: Product) => (
                <div key={item.id} className="flex items-start gap-4">
                  <Image
                    src={item.images[0].url}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-md object-cover"
                    data-ai-hint={item.images[0].hint}
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center">
              <ShoppingCart className="mb-4 h-16 w-16 text-muted-foreground" />
              <p className="text-muted-foreground">Your cart is empty</p>
            </div>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="border-t pt-4">
            <div className="flex justify-between font-semibold">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Shipping and taxes calculated at checkout.
            </p>
            <Button asChild className="mt-4 w-full">
              <Link href="/checkout">Checkout</Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Logo />
        <nav className="ml-10 hidden items-center space-x-6 text-sm font-medium md:flex">
          <Link
            href="/shop"
            className="transition-colors hover:text-primary"
          >
            Shop
          </Link>
          <Link
            href="#"
            className="transition-colors hover:text-primary text-muted-foreground"
          >
            Categories
          </Link>
          <Link
            href="#"
            className="transition-colors hover:text-primary text-muted-foreground"
          >
            Deals
          </Link>
          <Link
            href="/dashboard"
            className="transition-colors hover:text-primary"
          >
            My Dashboard
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="hidden w-full max-w-sm items-center lg:flex">
            <Input
              type="search"
              placeholder="Search products..."
              className="h-9"
            />
            <Button variant="ghost" size="icon" className="-ml-9">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="hidden lg:inline-flex">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Wishlist</span>
          </Button>
          <CartSheet />
          <Button variant="ghost" size="icon" asChild>
            <Link href="/login">
                <User className="h-5 w-5" />
                <span className="sr-only">Login</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
