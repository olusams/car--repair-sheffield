export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  price?: string;
  rating?: number;
  features?: string[];
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Car Engine Plug",
    category: "engine",
    image: "/assets/img/product/product_1_1.jpg",
    description: "High-quality engine plug for optimal performance",
    price: "£180.85",
    rating: 5
  },
  {
    id: 2,
    title: "Car Air Filter",
    category: "filter",
    image: "/assets/img/product/product_1_2.jpg",
    description: "Premium air filtration system",
    price: "£190.85",
    rating: 5
  },
  {
    id: 3,
    title: "CSK Red Wheel",
    category: "wheel",
    image: "/assets/img/product/product_1_3.jpg",
    description: "Custom sport wheel with red finish",
    price: "£160.85",
    rating: 5
  },
  {
    id: 4,
    title: "Cools Led Light",
    category: "light",
    image: "/assets/img/product/product_1_4.jpg",
    description: "Advanced LED lighting system",
    price: "£170.85",
    rating: 5
  },
  {
    id: 5,
    title: "Allion Brake Pad",
    category: "brake",
    image: "/assets/img/product/product_1_5.jpg",
    description: "High-performance brake pads",
    price: "£120.85",
    rating: 5
  },
  {
    id: 6,
    title: "Car USB Ports",
    category: "electronics",
    image: "/assets/img/product/product_1_6.jpg",
    description: "Modern USB charging solution",
    price: "£100.85",
    rating: 5
  },
  {
    id: 7,
    title: "Car Engine Solt",
    category: "engine",
    image: "/assets/img/product/product_1_7.jpg",
    description: "Essential engine component",
    price: "£120.85",
    rating: 5
  },
  {
    id: 8,
    title: "Car Oil Filter",
    category: "filter",
    image: "/assets/img/product/product_1_8.jpg",
    description: "Premium oil filtration system",
    price: "£100.85",
    rating: 5
  },
  {
    id: 9,
    title: "BMW Brake Liver",
    category: "brake",
    image: "/assets/img/product/product_1_9.jpg",
    description: "OEM BMW brake component",
    price: "£120.85",
    rating: 5
  },
  {
    id: 10,
    title: "Electrical Systems",
    category: "electrical",
    image: "/assets/img/product/product_1_5.jpg",
    description: "Professional electrical repair services",
    price: "£80.00",
    rating: 5
  },
  {
    id: 11,
    title: "Audi Wheel Combo",
    category: "wheel",
    image: "/assets/img/product/product_1_1.jpg",
    description: "Complete Audi wheel set",
    price: "£120.85",
    rating: 5
  },
  {
    id: 12,
    title: "Fast Aloy Wheel",
    category: "wheel",
    image: "/assets/img/product/product_1_2.jpg",
    description: "Performance alloy wheels",
    price: "£100.85",
    rating: 5
  }
]; 