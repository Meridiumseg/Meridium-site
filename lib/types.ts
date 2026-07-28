export type ServiceTier = {
  id: string;
  tier: string;
  title: string;
  items: string;
  featured: boolean;
  sort_order: number;
};

export type Project = {
  id: string;
  code: string;
  category: string;
  title: string;
  description: string;
  image_url: string | null;
  sort_order: number;
};

export type NewsPost = {
  id: string;
  published_date: string;
  title: string;
  description: string;
  sort_order: number;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo_url: string | null;
  sort_order: number;
};

export type LegislationItem = {
  id: string;
  name: string;
  sort_order: number;
};

export type ContactInfo = {
  id: number;
  phone: string;
  email: string;
  address: string;
  hours: string;
};

export const PROJECT_CATEGORIES = [
  "Engenharia",
  "Consultoria",
  "Segurança",
  "Tecnologia",
] as const;
