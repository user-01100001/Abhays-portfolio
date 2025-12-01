export interface Artwork {
  id: string;
  title: string;
  imageUrl: string;
  category: 'collection' | 'mosaic';
  description?: string;
}

export interface Course {
  id: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  duration: string;
  price: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
}
