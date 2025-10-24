import { PlaceHolderImages } from '@/lib/placeholder-images';

const findImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export type Product = {
  id: string;
  name: string;
  description: string;
  vendorId: string;
  vendorName: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  images: { id: string; url: string; hint: string }[];
  rating: number;
  reviewCount: number;
  stock: number;
  status: 'active' | 'draft' | 'out_of_stock';
};

export type Category = {
  id: string;
  name: string;
  image: { id: string; url: string; hint: string };
};

export type Review = {
  id: string;
  productId: string;
  author: string;
  avatarUrl: string;
  rating: number;
  title: string;
  comment: string;
  createdAt: string;
};

export type Order = {
  id: string;
  date: string;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  total: number;
  itemCount: number;
}

export const products: Product[] = [
  {
    id: 'prod-1',
    name: 'Artisanal Leather Handbag',
    description: 'A beautifully crafted leather handbag, perfect for any occasion. Made with full-grain leather and solid brass hardware.',
    vendorId: 'vendor-1',
    vendorName: 'Leather Lux',
    category: 'Fashion',
    price: 249.99,
    compareAtPrice: 299.99,
    images: [{ id: 'product-1-a', url: findImage('product-1-a')?.imageUrl || '', hint: findImage('product-1-a')?.imageHint || '' }, { id: 'product-1-b', url: findImage('product-1-b')?.imageUrl || '', hint: findImage('product-1-b')?.imageHint || '' }],
    rating: 4.8,
    reviewCount: 124,
    stock: 15,
    status: 'active',
  },
  {
    id: 'prod-2',
    name: 'Handcrafted Ceramic Vase',
    description: 'A unique, one-of-a-kind ceramic vase. Its minimalist design complements any home decor. Fired at high temperatures for durability.',
    vendorId: 'vendor-2',
    vendorName: 'Modern Potter',
    category: 'Home Goods',
    price: 75.00,
    images: [{ id: 'product-2-a', url: findImage('product-2-a')?.imageUrl || '', hint: findImage('product-2-a')?.imageHint || '' }],
    rating: 4.9,
    reviewCount: 88,
    stock: 25,
    status: 'active',
  },
  {
    id: 'prod-3',
    name: 'Minimalist Silver Watch',
    description: 'Elegant and timeless. This watch features a stainless steel case, sapphire crystal glass, and a genuine leather strap.',
    vendorId: 'vendor-1',
    vendorName: 'Leather Lux',
    category: 'Fashion',
    price: 450.00,
    images: [{ id: 'product-3-a', url: findImage('product-3-a')?.imageUrl || '', hint: findImage('product-3-a')?.imageHint || '' }],
    rating: 4.7,
    reviewCount: 210,
    stock: 10,
    status: 'active',
  },
  {
    id: 'prod-4',
    name: 'Organic Cotton Scarf',
    description: 'Soft, breathable, and eco-friendly. This scarf is made from 100% GOTS-certified organic cotton.',
    vendorId: 'vendor-3',
    vendorName: 'Eco Threads',
    category: 'Fashion',
    price: 45.50,
    images: [{ id: 'product-4-a', url: findImage('product-4-a')?.imageUrl || '', hint: findImage('product-4-a')?.imageHint || '' }],
    rating: 4.6,
    reviewCount: 56,
    stock: 50,
    status: 'active',
  },
  {
    id: 'prod-5',
    name: 'Designer Sunglasses',
    description: 'Protect your eyes in style with these chic sunglasses, featuring 100% UV protection and a lightweight frame.',
    vendorId: 'vendor-1',
    vendorName: 'Leather Lux',
    category: 'Fashion',
    price: 120.00,
    images: [{ id: 'product-5-a', url: findImage('product-5-a')?.imageUrl || '', hint: findImage('product-5-a')?.imageHint || '' }],
    rating: 4.8,
    reviewCount: 95,
    stock: 30,
    status: 'active',
  },
  {
    id: 'prod-6',
    name: 'Modern Desk Lamp',
    description: 'Illuminate your workspace with this sleek and adjustable LED desk lamp. Three brightness levels and a USB charging port.',
    vendorId: 'vendor-4',
    vendorName: 'Gadget Grove',
    category: 'Electronics',
    price: 89.99,
    images: [{ id: 'product-6-a', url: findImage('product-6-a')?.imageUrl || '', hint: findImage('product-6-a')?.imageHint || '' }],
    rating: 4.7,
    reviewCount: 150,
    stock: 22,
    status: 'active',
  },
   {
    id: 'prod-7',
    name: 'Scented Soy Candle',
    description: 'Create a relaxing ambiance with our hand-poured soy candle. Available in lavender, vanilla, and sandalwood scents.',
    vendorId: 'vendor-2',
    vendorName: 'Modern Potter',
    category: 'Home Goods',
    price: 25.00,
    images: [{ id: 'product-7-a', url: findImage('product-7-a')?.imageUrl || '', hint: findImage('product-7-a')?.imageHint || '' }],
    rating: 4.9,
    reviewCount: 300,
    stock: 100,
    status: 'active',
  },
  {
    id: 'prod-8',
    name: 'Wireless Bluetooth Headphones',
    description: 'Immerse yourself in high-fidelity sound with these noise-cancelling headphones. 30-hour battery life and comfortable ear cups.',
    vendorId: 'vendor-4',
    vendorName: 'Gadget Grove',
    category: 'Electronics',
    price: 199.99,
    compareAtPrice: 249.99,
    images: [{ id: 'product-8-a', url: findImage('product-8-a')?.imageUrl || '', hint: findImage('product-8-a')?.imageHint || '' }],
    rating: 4.8,
    reviewCount: 540,
    stock: 18,
    status: 'active',
  },
];

export const categories: Category[] = [
  { id: 'cat-1', name: 'Fashion', image: { id: 'category-fashion', url: findImage('category-fashion')?.imageUrl || '', hint: findImage('category-fashion')?.imageHint || '' } },
  { id: 'cat-2', name: 'Electronics', image: { id: 'category-electronics', url: findImage('category-electronics')?.imageUrl || '', hint: findImage('category-electronics')?.imageHint || '' } },
  { id: 'cat-3', name: 'Home Goods', image: { id: 'category-home', url: findImage('category-home')?.imageUrl || '', hint: findImage('category-home')?.imageHint || '' } },
  { id: 'cat-4', name: 'Beauty', image: { id: 'category-beauty', url: findImage('category-beauty')?.imageUrl || '', hint: findImage('category-beauty')?.imageHint || '' } },
];

export const reviews: Review[] = [
    {
        id: 'rev-1',
        productId: 'prod-1',
        author: 'Jane D.',
        avatarUrl: findImage('avatar-1')?.imageUrl || '',
        rating: 5,
        title: 'Absolutely stunning!',
        comment: 'The quality of the leather is exceptional. It feels and looks so luxurious. Worth every penny!',
        createdAt: '2 weeks ago',
    },
    {
        id: 'rev-2',
        productId: 'prod-1',
        author: 'John S.',
        avatarUrl: findImage('avatar-2')?.imageUrl || '',
        rating: 4,
        title: 'Great bag, minor scuff.',
        comment: 'I love this bag and use it daily. It arrived with a tiny scuff mark, but it\'s hardly noticeable. Overall very happy with it.',
        createdAt: '1 month ago',
    },
];

export const orders: Order[] = [
    { id: 'ORD-001', date: '2023-10-26', status: 'Delivered', total: 295.49, itemCount: 2 },
    { id: 'ORD-002', date: '2023-11-15', status: 'Processing', total: 89.99, itemCount: 1 },
    { id: 'ORD-003', date: '2023-12-01', status: 'Shipped', total: 495.50, itemCount: 3 },
    { id: 'ORD-004', date: '2024-01-05', status: 'Delivered', total: 120.00, itemCount: 1 },
    { id: 'ORD-005', date: '2024-01-20', status: 'Pending', total: 25.00, itemCount: 1 },
];

export const users = [
    {
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        role: "Vendor",
        status: "approved"
    },
    {
        name: "Jackson Lee",
        email: "jackson.lee@email.com",
        role: "Customer",
        status: "active"
    },
    {
        name: "Isabella Nguyen",
        email: "isabella.nguyen@email.com",
        role: "Vendor",
        status: "pending"
    },
    {
        name: "William Kim",
        email: "will@email.com",
        role: "Customer",
        status: "active"
    },
    {
        name: "Sofia Davis",
        email: "sofia.davis@email.com",
        role: "Admin",
        status: "active"
    },
];
