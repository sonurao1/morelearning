// ─────────────────────────────────────────────────────────────────────────
// Shared content types
// Centralising these keeps every data file and section component in sync —
// change a shape here once and TypeScript will flag every place that needs
// updating.
// ─────────────────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export interface CapabilityArea {
  id: string;
  index: string; // "01" style reference used as a visual marker, not a strict sequence
  title: string;
  description: string;
  keywords: string[];
  icon: string; // lucide-react icon name, resolved by <CapabilityIconMap>
  image: string;
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
  image: string;
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
  id: string;
  title: string;
  client: string;
  category: CaseStudyCategory;
  summary: string;
  image: string;
  results: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}
