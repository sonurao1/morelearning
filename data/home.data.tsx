import type { CaseStudy } from "../types/content";

//Importing Icons - Capabilities
import { GraduationCap } from "lucide-react"
import { MonitorPlay } from "lucide-react"
import { Handshake } from "lucide-react"
import { RectangleGoggles } from "lucide-react"


import Pg from "@/assets/images/client-logos/pg.png";
import Bsnl from "@/assets/images/client-logos/bsnl.png";
import Hsbc from "@/assets/images/client-logos/hsbc.png";
import Visa from "@/assets/images/client-logos/visa.png";
import Ikea from "@/assets/images/client-logos/ikea.png";
import Graco from "@/assets/images/client-logos/graco.png";
import Bunge from "@/assets/images/client-logos/bunge.png";
import Wipro from "@/assets/images/client-logos/wipro.png";
import Abbott from "@/assets/images/client-logos/abbott.png";
import CpPlus from "@/assets/images/client-logos/cp-plus.png";
import Rapross from "@/assets/images/client-logos/rapross.png";
import Bechtel from "@/assets/images/client-logos/bechtel.png";
import BanLabs from "@/assets/images/client-logos/ban-labs.png";
import Assystem from "@/assets/images/client-logos/assystem.png";
import Lenskart from "@/assets/images/client-logos/lenskart.png";
import Microsoft from "@/assets/images/client-logos/microsoft.png";
import IndianOil from "@/assets/images/client-logos/indian-oil.png";
import McCormick from "@/assets/images/client-logos/mc-cormick.png";
import NovoNordisk from "@/assets/images/client-logos/novo-nordisk.png";
import CrestDigitel from "@/assets/images/client-logos/crest-digitel.png";
import KonicaMinolta from "@/assets/images/client-logos/konica-minolta.png";
import JohnsonJohnson from "@/assets/images/client-logos/johnson-johnson.png";


export const clientMarquee = [
  {
    image: Abbott,
    altText: "Abbott Logo",
  },
  {
    image: Bsnl,
    altText: "BSNL Logo",
  },
  {
    image: CrestDigitel,
    altText: "Crest Digitel Logo",
  },
  {
    image: Bechtel,
    altText: "Bechtel Logo",
  },
  {
    image: Graco,
    altText: "Graco Logo",
  },
  {
    image: IndianOil,
    altText: "Indian Oil Logo",
  },
  {
    image: Hsbc,
    altText: "HSBC Logo",
  },
  {
    image: Ikea,
    altText: "IKEA Logo",
  },
  {
    image: JohnsonJohnson,
    altText: "Johnson & Johnson Logo",
  },
  {
    image: KonicaMinolta,
    altText: "Konica Minolta Logo",
  },
  {
    image: Lenskart,
    altText: "Lenskart Logo",
  },
  {
    image: Microsoft,
    altText: "Microsoft Logo",
  },
  {
    image: NovoNordisk,
    altText: "Novo Nordisk Logo",
  },
  {
    image: Pg,
    altText: "Procter & Gamble Logo",
  },
  {
    image: Rapross,
    altText: "Rapross Logo",
  },
  {
    image: Assystem,
    altText: "Assystem Logo",
  },
  {
    image: Visa,
    altText: "Visa Logo",
  },
  {
    image: Wipro,
    altText: "Wipro Logo",
  },
  {
    image: BanLabs,
    altText: "Ban Labs Logo",
  },
  {
    image: CpPlus,
    altText: "CP Plus Logo",
  },
  {
    image: McCormick,
    altText: "McCormick Logo",
  },
  {
    image: Bunge,
    altText: "Bunge Logo",
  },
];

export const statsCounter = [
  {
    stat: 500,
    title: "Enterprise Project Delivered",
  },
  {
    stat: (new Date().getFullYear() - new Date("2012").getFullYear()) - 1,
    title: "Years of Expertise",
  },
  {
    stat: 35,
    title: "In-house Specialists",
  },
  {
    stat: 20,
    title: "Industries Served",
  },
];

export const CASE_STUDIES_CONTENT = {
  eyebrow: "Case Studies",
  headline: "Enterprise Impact, By the Numbers.",
  supporting:
    "A sample of the enterprise programs we've delivered — filter by capability to explore. This is a placeholder set; the full 40+ case study library from the current site should replace it before launch.",
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-01",
    title: "Global Onboarding Reimagined for a Banking Leader",
    client: "Global Banking Leader",
    category: "Learning & Workforce Enablement",
    summary:
      "A modular onboarding ecosystem covering compliance, product and systems training for a multi-region workforce.",
    image: "https://images.unsplash.com/photo-1758873269035-aae0e1fd3422?q=80&w=1400&auto=format&fit=crop",
    results: ["40% faster ramp-up", "Multi-region rollout", "Microlearning + assessments"],
  },
  {
    id: "cs-02",
    title: "Technical Certification Program for a Pharma Manufacturer",
    client: "Fortune 500 Pharma",
    category: "Learning & Workforce Enablement",
    summary:
      "A blended certification pathway simplifying regulated technical processes for plant-floor teams.",
    image: "https://images.unsplash.com/photo-1747999060057-89b7a533f347?q=80&w=1400&auto=format&fit=crop",
    results: ["Regulatory-ready content", "Blended delivery", "Standardized global SOPs"],
  },
  {
    id: "cs-03",
    title: "Interactive Product Demos for a Global Sales Team",
    client: "Enterprise Technology Group",
    category: "Sales & Customer Enablement",
    summary:
      "A configurable, interactive demo suite equipping a distributed sales team with a consistent product story.",
    image: "https://images.unsplash.com/photo-1572937021225-a79d784c943c?q=80&w=1400&auto=format&fit=crop",
    results: ["Consistent sales narrative", "Faster deal cycles", "Self-serve demo library"],
  },
  {
    id: "cs-04",
    title: "Dealer Enablement Platform for a Retail Enterprise",
    client: "Global Retail Enterprise",
    category: "Sales & Customer Enablement",
    summary:
      "A dealer education and launch-readiness program supporting a large, geographically spread partner network.",
    image: "https://images.unsplash.com/photo-1759215524484-89c8d7ae28f2?q=80&w=1400&auto=format&fit=crop",
    results: ["Nationwide dealer rollout", "Faster product launches", "Partner certification tracking"],
  },
  {
    id: "cs-05",
    title: "Executive Communication Suite for a Telecom Provider",
    client: "Global Telecom Provider",
    category: "Visual Communication",
    summary:
      "A motion-graphics led communication toolkit translating strategic initiatives for a global workforce.",
    image: "https://images.unsplash.com/photo-1759215524484-89c8d7ae28f2?q=80&w=1400&auto=format&fit=crop",
    results: ["Motion graphics suite", "Executive storytelling", "Global localization"],
  },
  {
    id: "cs-06",
    title: "Data Storytelling Refresh for a Public Sector Agency",
    client: "Public Sector Agency",
    category: "Visual Communication",
    summary:
      "A technical-visualization refresh turning dense policy data into accessible, presentation-ready narratives.",
    image: "https://images.unsplash.com/photo-1572937021225-a79d784c943c?q=80&w=1400&auto=format&fit=crop",
    results: ["Simplified technical content", "Accessible design system", "Reusable presentation kit"],
  },
  {
    id: "cs-07",
    title: "VR Safety Simulation for an Energy & Utilities Major",
    client: "Energy & Utilities Major",
    category: "Immersive & Interactive Experiences",
    summary:
      "An immersive VR simulation replicating high-risk field scenarios for safe, repeatable practice.",
    image: "https://images.unsplash.com/photo-1758523670550-223a01cd7764?q=80&w=1400&auto=format&fit=crop",
    results: ["Safer practice environment", "Repeatable simulations", "Measurable readiness scoring"],
  },
  {
    id: "cs-08",
    title: "Digital Twin Product Walkthrough for a Manufacturing Co.",
    client: "International Manufacturing Co.",
    category: "Immersive & Interactive Experiences",
    summary:
      "A 3D digital-twin experience letting technicians explore complex equipment before ever touching it.",
    image: "https://images.unsplash.com/photo-1758523670550-223a01cd7764?q=80&w=1400&auto=format&fit=crop",
    results: ["3D digital twin", "Reduced onsite training time", "Interactive troubleshooting guide"],
  },
  
];

export const CASE_STUDY_CATEGORIES = [
  "All",
  "Learning & Workforce Enablement",
  "Sales & Customer Enablement",
  "Visual Communication",
  "Immersive & Interactive Experiences",
] as const;  

export const capabilities= [
    {
        heading: "Learning & Workforce Enablement",
        subHeading: "Interactive eLearning, onboarding, compliance, technical training, leadership development, product education, certifications, microlearning, assessments, and learning ecosystems.",
        icon: (
                <GraduationCap />
        ),
         tags:["Interactive eLearning", "Onboarding", "Compliance Training"]

    },
    {
        heading: "Sales & Customer Enablement",
        subHeading: "Sales presentations, interactive product demos, proposal presentations, customer education, dealer training, product launches, and marketing enablement assets.",
        icon: (
                <Handshake />
        ),
         tags:["Sales Presentations", "Ineractive Product Demos", "Dealer Training"]

    },
    {
        heading: "Visual Communication",
        subHeading: "Corporate presentations, motion graphics, explainer videos, executive communication, technical visualization, data storytelling, and knowledge communication.",
        icon: (
                <MonitorPlay />
        ),
         tags:["Motion Graphics", "Explainer Videos", "Executive Communication"]

    },
    {
        heading: "Immersive & Interactive Experiences",
        subHeading: "3D visualization, simulations, digital twins, VR/AR experiences, AI-powered learning assistants, interactive applications, and experiential learning.",
        icon: (
                <RectangleGoggles />
        ),
         tags:["3D Visualization", "Digital Twins", "VR / AR Experiences"]

    },
]