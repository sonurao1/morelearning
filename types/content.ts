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

export interface ServiceCategory {
  heading: string;
  subHeading: string;
  icon: React.ReactNode;
  tags: string[];
  image:HTMLImageElement;
};

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

//industries served
export interface IndusriesServiceType {
  heading: string,
  subHeading: string,
  icon: React.ReactNode,
  image: string
}


//sample case study
//sample data

//  {
//     id: "cs-01",
//     title: "Global Onboarding Reimagined for a Banking Leader",
//     client: "Global Banking Leader",
//     category: "Learning & Workforce Enablement",
//     summary:
//       "A modular onboarding ecosystem covering compliance, product and systems training for a multi-region workforce.",
//     image: "https://images.unsplash.com/photo-1758873269035-aae0e1fd3422?q=80&w=1400&auto=format&fit=crop",
//     results: ["40% faster ramp-up", "Multi-region rollout", "Microlearning + assessments"],
//   },

export interface caseStudyTypes {
  id:string,
  title: string,
  client: string,
  category: string,
  summary: string,
  image: string,
  results: string[]

}


// Sample testimonial 

// {
//     quote:
//       "MoreLearning brought every discipline we needed — strategy, design, development — under one roof. That alone cut months off our rollout.",
//     name: "Chief Learning Officer",
//     role: "Chief Learning Officer",
//     company: "Global Financial Services Enterprise",
//     initials: "CL",
//   },


export interface TestimonialTypes {
  quote: string,
  name: string,
  role: string,
  company: string,
  initials: string,
  image:StaticImageData,
  stars:number
}