import { Logo } from "@/components/shared/logo";
import Link from "next/link";
import { Github, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  shop: [
    { title: "All Products", href: "/shop" },
    { title: "Fashion", href: "#" },
    { title: "Electronics", href: "#" },
    { title: "Home Goods", href: "#" },
  ],
  company: [
    { title: "About Us", href: "#" },
    { title: "Careers", href: "#" },
    { title: "Sell on bharathraj", href: "/signup" },
    { title: "Press", href: "#" },
  ],
  support: [
    { title: "Contact Us", href: "#" },
    { title: "FAQ", href: "#" },
    { title: "Shipping & Returns", href: "#" },
    { title: "Privacy Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Your one-stop marketplace for unique products from independent vendors.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-3">
            <div>
              <h3 className="font-headline font-semibold">Shop</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.shop.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold">Support</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between border-t pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 bharathraj. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-4 sm:mt-0">
            <Button variant="ghost" size="icon" asChild>
              <Link href="#">
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#">
                <Facebook className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
