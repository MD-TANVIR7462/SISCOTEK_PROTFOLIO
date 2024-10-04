import { LucideIcon } from "lucide-react";

export type TPricingPackage = {
  id?: string;
  name: string;
  services: string[];
  features: string[];
};

export type TPicture = {
  id: string;
  imageUrl: string;
};

export type TTestimonial = {
  id?: string;
  comment: string;
  starRating: number;
  customer: {
    name: string;
    picture: string;
  };
};

export type TServiceCategory = {
  category: string;
  categoryDescription: string;
  Icon: LucideIcon;
  services: {
    name: string;
    serviceDescription: string;
  }[];
};

export type TPortfolio = {
  id?: string;
  instagramURL: string;
};

export type TConsultation = {
  id?: string;
  fullName: string;
  email: string;
  message?: string;
  phoneNo: string;
  consultType: string;
  preferedTimeSlot: string;
  preferedDate: string;
};

export type NewsletterEmail = {
  id?: string;
  email: string;
  date: string;
};
