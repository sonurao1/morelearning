import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import type { CaseStudy } from "@/types/content";
import mergeClassNames from "@/libs/merge-classnames";

export default function CaseStudyBox({
  title,
  client,
  category,
  summary,
  image,
  results,
  className,
}: CaseStudy & { className?: string }) {
  return (
    <article
      className={mergeClassNames(
        "group relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40 transition-all duration-500 hover:-translate-y-2 hover:border-primary-action/40 hover:shadow-[0_30px_60px_-15px_rgba(16,84,232,0.35)]",
        className
      )}
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
      />

      {/* Gradient — hamesha readable, hover pe thoda deep ho jaata hai */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent transition-colors duration-500 group-hover:from-primary group-hover:via-primary/85" />

      {/* Accent line — hover pe neeche se ek gradient line grow hoti hai. Pure
          transform (scaleX) hai, koi filter/blur nahi — safe on all browsers */}
      <div className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-primary-action to-digital transition-transform duration-500 ease-out group-hover:scale-x-100" />

      {/* Arrow cue — hamesha halka visible (mobile/touch pe hover nahi hota),
          hover pe thoda pop karta hai. Solid bg — koi backdrop-blur nahi,
          kyunki GSAP transform ke saath backdrop-filter Chrome mein poore
          card ko hi blur render karne laga tha */}
      <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-primary/80 opacity-70 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100">
        <ArrowUpRight size={16} className="text-white" />
      </div>

      {/* Category tag — solid bg, backdrop-blur nahi (same reason as upar) */}
      <p className="absolute left-5 top-5 rounded-full border border-white/30 bg-primary/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white transition-transform duration-500 group-hover:-translate-y-0.5">
        {category}
      </p>

      {/* Content */}
      <div className="absolute inset-x-5 bottom-5 flex flex-col gap-2">
        <h3 className="text-lg font-bold leading-tight text-white transition-transform duration-500 group-hover:-translate-y-1 md:text-xl">
          {title}
        </h3>

        <p className="text-xs text-white/60 md:text-sm">{client}</p>

        <p className="line-clamp-2 text-xs leading-5 text-white/45 md:text-sm md:leading-6">
          {summary}
        </p>

        {/* Result chips — mobile pe hamesha visible (touch pe hover nahi hota),
            desktop pe hover pe reveal hote hai taaki card clean rahe */}
        {results?.length > 0 && (
          <ul className="mt-1 flex flex-wrap gap-1.5 opacity-100 transition-all duration-500 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
            {results.map((result, index) => (
              <li
                key={index}
                className="rounded-full bg-primary/80 px-2.5 py-1 text-[10px] font-medium text-white"
              >
                {result}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}