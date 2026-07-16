export interface userInfo {
  id?: string,
  name?: string,
  email?: string,
  image?: string | undefined | null| boolean,
  phone?: string,
  address?: string,
  createdAt?: Date,
  updatedAt?: Date,
}

export interface ICar {
  _id?: string;
  title?: string;
  slug?: string;
  brand?: string;            // e.g., "porsche"
  model?: string;            // e.g., "570"
  year?: number;             // e.g., 2024
  bodyType?: string;         // e.g., "suv"
  condition?: string;        // e.g., "used"
  location?: string;         // e.g., "Los Angeles, CA"
  description?: string;
  features?: string[];
  otherFeatures?: string[];
  
  images?: {
    thumbnail: string;
    cover: string;
    gallery: string[];
  };
  
  pricing?: {
    price: number;
    discountPrice: number;
    currency: string;
    availability: 'in_stock' | 'out_of_stock' | string;
  };
  
  seller?: {
    userId: string;
    name: string;
    email: string;
  };
  
  seo?: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
  
  specifications?: {
    mileage: number;
    fuelType: string;         // e.g., 'hybrid'
    transmission: string;     // e.g., 'manual'
    driveType: string;        // e.g., 'awd'
    doors: number;
    seats?: number;           
    engine?: {
      type: string;
      capacity: string;
      horsepower: number;
      torque: string;
      topSpeed: string;
      acceleration: string;
    };
  };
  
  statistics?: {
    views: number;
    favorites: number;
    inquiries: number;
  };
  
  status?: 'pending' | 'approved' | 'rejected' | string;
  isFeatured?: boolean;
  isVerified?: boolean;
  isSold?: boolean;
  rating?: number;
  reviews?: number;
  createdBy?: string;
  updatedBy?: string;
  
  createdAt?: {
    $date: string;
  };
  
  updatedAt: {
    $date: string;
  };
}