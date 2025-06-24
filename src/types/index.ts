export interface Project {
  id: string;
  title: string;
  description: string;
  tagline: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  codeUrl?: string;
  featured: boolean;
  category: 'web3' | 'web2' | 'dashboard' | 'landing';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  project: string;
  budget: string;
  message: string;
}

export interface Theme {
  isDark: boolean;
  toggle: () => void;
}

export interface CursorPosition {
  x: number;
  y: number;
}

export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: string;
}