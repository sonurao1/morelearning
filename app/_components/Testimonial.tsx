"use client";

import TestimonialCard from "@/components/TestimonialCard";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import { testimonials } from "@/data/home.data";
import { TestimonialTypes } from "@/types/content";

const ACCENTS = ["primary-action", "digital", "technology"] as const;

export default function Testimonial() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(() => {
    const track = trackRef.current;
    if (!track) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const loopWidth = track.scrollWidth / 2;
      tweenRef.current = gsap.to(track, {
        x: -loopWidth,
        duration: 45,
        ease: "none",
        repeat: -1,
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[color-mix(in_srgb,var(--color-primary)_4%,white)] py-20">
      {/* single, quiet ambient wash — brand blue at 6% opacity, not
          a loud blob. Adds depth without competing with the cards */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--color-primary-action)_0%,_transparent_60%)] opacity-[0.06]"
      />

      <div className="relative mx-auto mb-14 max-w-2xl px-4 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary-action">
          Testimonials
        </span>
        <h2 className="mt-3 font-display text-4xl font-bold text-technology sm:text-5xl">
          What Enterprise Learning Leaders Say.
        </h2>
      </div>

      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
        onMouseEnter={() => tweenRef.current?.pause()}
        onMouseLeave={() => tweenRef.current?.play()}
      >
        <div ref={trackRef} className="flex w-max gap-6 py-6">
          {[...testimonials, ...testimonials].map(
            ({ id, name, text, rating }: TestimonialTypes, index) => (
              <TestimonialCard
                key={`${id}-${index}`}
                id={id}
                name={name}
                text={text}
                rating={rating}
                accent={ACCENTS[index % ACCENTS.length]}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}