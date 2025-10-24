import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  Store,
  ShieldCheck,
  Settings,
  UserCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const adminNavItems = [
  { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/admin/vendors", icon: Store, label: "Vendors" },
  { href: "/admin/vendors/verify", icon: ShieldCheck, label: "Verification" },
  { href: "/admin/users", icon: Users, label: "Users" },
  { href: "/admin/products", icon: Package, label: "All Products" },
];

const vendorNavItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/dashboard/products", icon: Package, label: "My Products" },
  { href: "/dashboard/orders", icon: ShoppingBag, label: "Orders" },
];

const sharedNavItems = [
  { href: "/dashboard/profile", icon: UserCircle, label: "Profile" },
  { href: "/dashboard/settings", icon: Settings, label: "Settings" },
];

type NavItemProps = {
  href: string;
  icon: React.ElementType;
  label: string;
  pathname: string;
};

function NavItem({ href, icon: Icon, label, pathname }: NavItemProps) {
  const isActive = pathname === href || (href !== '/dashboard' && pathname.startsWith(href));
  return (
    <Button
      asChild
      variant={isActive ? "secondary" : "ghost"}
      className="w-full justify-start"
    >
      <Link href={href}>
        <Icon className="mr-2 h-4 w-4" />
        {label}
      </Link>
    </Button>
  );
}

export function SidebarNav() {
  const pathname = usePathname();
  // In a real app, role would come from user session
  const role: "admin" | "vendor" = pathname.startsWith('/admin') ? 'admin' : 'vendor';

  const navItems = role === "admin" ? adminNavItems : vendorNavItems;

  return (
    <nav className="flex flex-col gap-1 px-2">
      {navItems.map((item) => (
        <NavItem key={item.href} {...item} pathname={pathname} />
      ))}
      <div className="my-2 h-[1px] bg-border" />
      {sharedNavItems.map((item) => (
        <NavItem key={item.href} {...item} pathname={pathname} />
      ))}
    </nav>
  );
}
