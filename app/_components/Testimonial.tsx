"use client";

import TestimonialCard from "@/components/TestimonialCard";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import { testimonials } from "@/data/home.data";
import { TestimonialTypes } from "@/types/content";

// belt cycles through these 4 brand tokens, card by card
// pehle: const ACCENTS = ["primary", "primary-action", "digital", "technology"] as const;
const ACCENTS = ["primary-action", "digital", "technology"] as const;

export default function Testimonial() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(() => {
    const track = trackRef.current;
    if (!track) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // list is rendered TWICE below (see .map on the duplicated array).
      // half its total scroll width = exactly one full lap, so when the
      // tween resets to loop, card #1 of copy-2 sits exactly where
      // card #1 of copy-1 started → zero visible jump
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
    <section className="w-full overflow-hidden py-20">
      {/* optional heading — remove if this section already gets one
          from a parent/page-level component */}
      <div className="mx-auto mb-14 max-w-2xl px-4 text-center">
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