"use client";

import { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";

// Data
import { TESTIMONIALS } from "@/data/home.data";

export default function Testimonial() {
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  const totalTestimonials = TESTIMONIALS.length;
  const testimonial = TESTIMONIALS[activeTestimonial];

  // GSAP refs
  const cardRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // Store progress bar refs
  const progressBarRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Auto change testimonial
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveTestimonial((prev) => {
        if (prev + 1 >= totalTestimonials) {
          return 0;
        }

        return prev + 1;
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [activeTestimonial, totalTestimonials]);

  // GSAP testimonial animation
  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      const progressBar =
        progressBarRefs.current[activeTestimonial];

      const tl = gsap.timeline();

      // Reset card
      gsap.set(cardRef.current, {
        opacity: 0,
        y: 35,
        scale: 0.97,
      });

      // Reset content
      gsap.set(
        [
          starsRef.current,
          quoteRef.current,
          profileRef.current,
        ],
        {
          opacity: 0,
          y: 20,
        }
      );

      // Reset progress bars
      gsap.set(progressBarRefs.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      // Card
      tl.to(cardRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
      })

        // Stars
        .to(
          starsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.3"
        )

        // Quote
        .to(
          quoteRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.2"
        )

        // Profile
        .to(
          profileRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
          },
          "-=0.25"
        )

        // Progress bar
        .to(
          progressBar,
          {
            scaleX: 1,
            duration: 2,
            ease: "none",
          },
          "-=0.2"
        );
    }, cardRef);

    return () => ctx.revert();
  }, [activeTestimonial]);

  return (
    <section className="relative w-full overflow-hidden bg-white py-24 md:py-32 bg-gradient-l ">
      <div className="mx-auto grid w-full max-w-[1450px] grid-cols-1 items-center gap-16 px-6 md:px-10 lg:grid-cols-[0.85fr_1fr] lg:gap-20">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6">

          {/* Eyebrow */}
          <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-digital">
            <span className="h-px w-8 bg-digital" />
            Trusted by developers
          </span>

          {/* Heading */}
          <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight text-primary md:text-5xl">
            What Enterprise Learning
            <br className="hidden md:block" />
            Leaders Say.
          </h2>

          {/* Supporting copy */}
          <p className="max-w-md text-base leading-7 text-secondary-text/70">
            Don't just take our word for it. See what developers and
            companies have to say about our starter template.
          </p>

          {/* Dots / Progress */}
          <div className="flex items-center gap-4">
            {Array.from({ length: totalTestimonials }).map(
              (_, i) => {
                const active = activeTestimonial === i;

                return (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Show testimonial ${i + 1}`}
                    onClick={() => setActiveTestimonial(i)}
                    className={`
                      relative h-5 overflow-hidden rounded-full
                      bg-secondary-text/20
                      transition-all duration-300
                      hover:bg-secondary-text/30
                      ${active ? "w-15" : "w-5"}
                    `}
                  >
                    <span
                      ref={(el) => {
                        progressBarRefs.current[i] = el;
                      }}
                      className="absolute inset-0 block origin-left rounded-full bg-digital"
                    />
                  </button>
                );
              }
            )}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative flex justify-center lg:justify-end">

          {/* Card wrapper */}
          <div className="relative w-full max-w-[480px]">

            {/* Ambient glow */}
            <div className="absolute -right-10 -top-10 z-0 h-56 w-56 rounded-full bg-digital/20 blur-3xl" />

            {/* Dot grid */}
            <div
              className="absolute -right-8 -top-8 z-0 h-40 w-40 rotate-6 rounded-3xl border border-digital/20 bg-digital/5 md:h-48 md:w-48"
              style={{
                backgroundImage:
                  "radial-gradient(currentColor 1.5px, transparent 1.5px)",
                backgroundSize: "14px 14px",
                color: "var(--digital, #2563eb)",
              }}
            />

            {/* TESTIMONIAL CARD */}
            <div
              ref={cardRef}
              className="relative z-10 flex min-h-[400px] w-full flex-col gap-5 overflow-hidden rounded-[28px] border border-primary/5 bg-white p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] md:p-10"
            >

              {/* Decorative quote */}
              <span
                aria-hidden
                className="pointer-events-none absolute -left-1 -top-4 select-none font-serif text-[110px] leading-none text-primary/[0.04]"
              >
                "
              </span>

              {/* Stars */}
              <div
                ref={starsRef}
                className="relative flex gap-1.5"
              >
                {Array.from({
                  length: testimonial.stars,
                }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-digital stroke-[0.875] text-digital"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote
                ref={quoteRef}
                className="relative text-lg leading-7 text-primary/80"
              >
                {testimonial.quote}
              </blockquote>

              {/* Profile */}
              <div
                ref={profileRef}
                className="mt-auto flex flex-col gap-5"
              >
                <span className="h-px w-full bg-primary/10" />

                <div className="flex items-center gap-4">

                  {/* Avatar */}
                  <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-digital/15">
                    <Image
                      src="/images/Testimonial-Avatar1.jpg"
                      alt={testimonial.name}
                      sizes="56px"
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Name */}
                  <div className="flex flex-col gap-0.5">
                    <p className="font-semibold text-primary">
                      {testimonial.name}
                    </p>

                    <p className="text-xs uppercase tracking-wide text-secondary-text/50">
                      {testimonial.role}
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}