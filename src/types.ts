export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  description: string;
  isEditorPick?: boolean;
  isStaffChoice?: boolean;
  rating: number;
  reviewsCount: number;
  sku: string;
  stock: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

export interface Review {
  id: string;
  author: string;
  initials: string;
  date: string;
  rating: number;
  title: string;
  content: string;
  isVerified: boolean;
}
