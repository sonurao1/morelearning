// ─────────────────────────────────────────────────────────────────────────
// Shared content types
// ─────────────────────────────────────────────────────────────────────────

import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";

export interface NavLink {
  label: string;
  href: string;
}

export interface CapabilityArea {
  id: string;
  index: string;
  title: string;
  description: string;
  keywords: string[];
  icon: string;
  image: string | StaticImageData;
}

export interface ServiceCategory {
  heading: string;
  subHeading: string;
  icon: ReactNode;
  tags: string[];
  image: string | StaticImageData;
}

export interface DifferentiatorPoint {
  label: string;
}

export interface ScaleFeature {
  label: string;
}

export interface StatItem {
  value: string;
  label: string;
  suffix?: string;
  icon: string;
}

export interface IndustryItem {
  name: string;
  description: string;
  icon: string;
  image: string | StaticImageData;
}

export interface ClientLogo {
  name: string;
}

export type CaseStudyCategory =
  | "Learning & Workforce Enablement"
  | "Sales & Customer Enablement"
  | "Visual Communication"
  | "Immersive & Interactive Experiences";

export interface CaseStudy {
  id?: string;
  title: string;
  client: string;
  category: CaseStudyCategory;
  summary: string;
  image: string | StaticImageData;
  results: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

export interface IndusriesServiceType {
  heading: string;
  subHeading: string;
  icon: ReactNode;
  image: string | StaticImageData;
}

// ─────────────────────────────────────────────────────────────────────────
// Case Study
// ─────────────────────────────────────────────────────────────────────────

export interface caseStudyTypes {
  id: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  image: string | StaticImageData;
  results: string[];
}

// ─────────────────────────────────────────────────────────────────────────
// Testimonial
// ─────────────────────────────────────────────────────────────────────────

export interface TestimonialTypes {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  image: StaticImageData;
  stars: number;
}