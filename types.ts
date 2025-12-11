
export type Language = 'ru' | 'ua' | 'en';

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface JobCategory {
  title: string;
  salaryRange: string;
  requirements: string[];
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
  video?: string;
  audio?: string;
  verificationDoc?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Stage {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export enum ApplicationStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
