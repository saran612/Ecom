import { Store } from "lucide-react";
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`group flex items-center gap-2 ${className}`}>
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary transition-colors group-hover:bg-primary/90">
        <Store className="h-5 w-5 text-primary-foreground" />
      </div>
      <span className="font-headline text-xl font-bold tracking-tight text-foreground">
        bharathraj
      </span>
    </Link>
  );
}
