export interface ProductVariant {
  id: string;
  name: string;
  colorCode: string;
  imageColor: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  img: string;
  description?: string;
  sizes?: string[];
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  size: string;
  img: string;
  quantity: number;
}
