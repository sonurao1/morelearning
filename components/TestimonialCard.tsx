import { TestimonialTypes } from "@/types/content";
import { Star, StarHalf, Quote } from "lucide-react";

const ACCENT_STYLES = {
  "primary-action": {
    spine: "bg-primary-action",
    glyph: "text-primary-action/[0.15]",
    label: "text-primary-action",
    glow: "bg-[radial-gradient(circle_at_50%_50%,_var(--color-primary-action)_0%,_transparent_70%)]",
    border: "group-hover:border-primary-action/40",
  },
  digital: {
    spine: "bg-digital",
    glyph: "text-digital/[0.15]",
    label: "text-digital",
    glow: "bg-[radial-gradient(circle_at_50%_50%,_var(--color-digital)_0%,_transparent_70%)]",
    border: "group-hover:border-digital/40",
  },
  technology: {
    spine: "bg-technology",
    glyph: "text-technology/[0.15]",
    label: "text-technology",
    glow: "bg-[radial-gradient(circle_at_50%_50%,_var(--color-technology)_0%,_transparent_70%)]",
    border: "group-hover:border-technology/40",
  },
} as const;

type Accent = keyof typeof ACCENT_STYLES;

interface TestimonialCardProps extends TestimonialTypes {
  accent?: Accent;
}

export default function TestimonialCard({
  id,
  name,
  text,
  rating,
  accent = "primary-action",
}: TestimonialCardProps) {
  const starRating = rating >= 4.6 ? 5 : rating >= 4.1 ? 4.5 : 4;
  const fullStars = Math.floor(starRating);
  const hasHalfStar = starRating % 1 !== 0;
  const styles = ACCENT_STYLES[accent];

  return (
    <article className="group relative w-[320px] shrink-0">
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[160%] w-[160%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-40 ${styles.glow}`}
      />

      {/* h-[380px] + flex-col = fixed "frame". Every card is the
          exact same outer size no matter how long its text is */}
      <div
        className={`relative flex h-[380px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-brand p-7 transition-all duration-500 ease-out group-hover:-translate-y-3 ${styles.border}`}
      >
        <div className={`absolute inset-x-0 top-0 h-1 ${styles.spine}`} />

        <Quote
          size={140}
          strokeWidth={1}
          className={`pointer-events-none absolute -right-6 -top-4 ${styles.glyph} transition-transform duration-500 group-hover:scale-110`}
        />

        {/* fixed-size block */}
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
          <span className="ml-2 text-sm font-medium text-white/50">
            {rating.toFixed(1)}
          </span>
        </div>

        {/* flex-1 = "mat board". Absorbs the height difference between
            a short testimonial and a long one. line-clamp-6 caps the
            longest ones so they never overflow the frame */}
        <blockquote className="relative flex-1">
          <p className="line-clamp-6 text-[15px] leading-7 text-white/70">
            &ldquo;{text}&rdquo;
          </p>
        </blockquote>

        {/* everything below always lands in the same spot, because
            the block above always fills exactly the leftover space */}
        <div className="mb-7 h-px w-full bg-white/10" />

        <footer className="relative">
          <h3 className="font-display text-base font-semibold tracking-tight text-white">
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