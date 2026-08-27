import { TestimonialTypes } from "@/types/content";
import { Star, StarHalf, Quote } from "lucide-react";

const ACCENT_STYLES = {
  "primary-action": {
    spine: "bg-primary-action",
    glyph: "text-primary-action/[0.08]",
    label: "text-primary-action",
    wash: "bg-primary-action/[0.05]",
    border: "group-hover:border-primary-action/40",
    // literal rgba, not the CSS var — arbitrary shadow values with
    // color-mix()/vars aren't reliably supported across engines yet,
    // a plain rgba() is safe everywhere
    shadow: "group-hover:shadow-[0_25px_60px_-15px_rgba(16,84,232,0.35)]",
  },
  digital: {
    spine: "bg-digital",
    glyph: "text-digital/[0.08]",
    label: "text-digital",
    wash: "bg-digital/[0.05]",
    border: "group-hover:border-digital/40",
    shadow: "group-hover:shadow-[0_25px_60px_-15px_rgba(120,20,184,0.35)]",
  },
  technology: {
    spine: "bg-technology",
    glyph: "text-technology/[0.08]",
    label: "text-technology",
    wash: "bg-technology/[0.05]",
    border: "group-hover:border-technology/40",
    shadow: "group-hover:shadow-[0_25px_60px_-15px_rgba(3,140,163,0.35)]",
  },
} as const;

type Accent = keyof typeof ACCENT_STYLES;

interface TestimonialCardProps extends TestimonialTypes {
  accent?: Accent;
}

export default function TestimonialCard({
  name,
  text,
  rating,
  id,
  accent = "primary-action",
}: TestimonialCardProps) {
  const starRating = rating >= 4.6 ? 5 : rating >= 4.1 ? 4.5 : 4;
  const fullStars = Math.floor(starRating);
  const hasHalfStar = starRating % 1 !== 0;
  const styles = ACCENT_STYLES[accent];

  return (
    <article className="group relative w-[320px] shrink-0">
      <div
        className={`relative flex h-[380px] flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out group-hover:-translate-y-3 ${styles.border} ${styles.shadow}`}
      >
        {/* soft accent wash in the corner — quiet on light bg,
            replaces the dark-theme's blur "aura" trick */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl ${styles.wash}`}
        />

        <div className={`absolute inset-x-0 top-0 h-1 ${styles.spine}`} />

        <Quote
          size={140}
          strokeWidth={1}
          className={`pointer-events-none absolute -right-6 -top-4 ${styles.glyph} transition-transform duration-500 group-hover:scale-110`}
        />

        <div className="relative mb-5 mt-2 flex items-center gap-1">
          {Array.from({ length: fullStars }).map((_, index) => (
            <Star
              key={index}
              size={18}
              strokeWidth={1.5}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}
          {hasHalfStar && (
            <StarHalf
              size={18}
              strokeWidth={1.5}
              className="fill-yellow-400 text-yellow-400"
            />
          )}
          <span className="ml-2 text-sm font-medium text-neutral-500">
            {rating.toFixed(1)}
          </span>
        </div>

        <blockquote className="relative flex-1">
          <p className="line-clamp-6 text-[15px] leading-7 text-neutral-600">
            &ldquo;{text}&rdquo;
          </p>
        </blockquote>

        <div className="mb-7 h-px w-full bg-neutral-100" />

        <footer className="relative">
          <h3 className="font-display text-base font-semibold tracking-tight text-neutral-900">
            {name}
          </h3>
          <p
            className={`mt-1 font-mono text-xs uppercase tracking-wider ${styles.label}`}
          >
            Verified Client
          </p>
        </footer>
      </div>
    </article>
  );
}