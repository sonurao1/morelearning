// ─────────────────────────────────────────────────────────────────────────
// Shared content types
//
// Trimmed down to only the types actually consumed by a component or data
// file. Previously this file also declared NavLink, CapabilityArea,
// DifferentiatorPoint, ScaleFeature, StatItem, IndustryItem, ClientLogo and
// a `Testimonial` interface (distinct from `TestimonialTypes` below) — none
// of which were imported anywhere in the codebase. Removed as dead code;
// re-add if a future component actually needs one of these shapes.
// ─────────────────────────────────────────────────────────────────────────

import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";

export interface ServiceCategory {
  heading: string;
  subHeading: string;
  icon: ReactNode;
  tags: string[];
  image: string | StaticImageData;
}

// ─────────────────────────────────────────────────────────────────────────
// Case Study
// ─────────────────────────────────────────────────────────────────────────

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
};

export interface IndusriesServiceType {
  heading: string;
  subHeading: string;
  icon: ReactNode;
  image: string | StaticImageData;
}

// ─────────────────────────────────────────────────────────────────────────
// Testimonial
// ─────────────────────────────────────────────────────────────────────────

 export interface TestimonialTypes {
  id: number;
  name: string;
  text: string;
  rating: number;
}
