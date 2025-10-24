import Link from "next/link";
import { PlusCircle, MoreHorizontal } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge";
import { products } from "@/lib/placeholder-data";
import Image from "next/image";

export default function DashboardProductsPage() {
  const vendorProducts = products.slice(0, 5); // Mock: show first 5 products for this vendor

  return (
    <>
      <div className="flex items-center">
        <h1 className="font-headline text-2xl font-bold">My Products</h1>
        <div className="ml-auto">
          <Button asChild>
            <Link href="/dashboard/products/new">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Product
            </Link>
          </Button>
        </div>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Product Listings</CardTitle>
          <CardDescription>Manage your products and view their sales performance.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">Image</span>
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden md:table-cell">Price</TableHead>
                <TableHead className="hidden md:table-cell">Stock</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vendorProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="hidden sm:table-cell">
                    <Image
                      alt={product.name}
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src={product.images[0].url}
                      width="64"
                      data-ai-hint={product.images[0].hint}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>
                    <Badge variant={product.status === 'active' ? 'default' : 'secondary'}>
                        {product.status.replace('_', ' ')}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">${product.price.toFixed(2)}</TableCell>
                  <TableCell className="hidden md:table-cell">{product.stock}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>View on site</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
