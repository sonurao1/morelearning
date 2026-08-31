"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CapabilityCard from "@/components/capabilites-card";
import { capabilities } from "@/data/home.data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Capabilities() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const numeralRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      /* --------------------------------
         LIVE DOT
      -------------------------------- */

      if (dotRef.current) {
        gsap.to(dotRef.current, {
          scale: 1.6,
          opacity: 0.35,
          duration: 1.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      /* --------------------------------
         INTRO ANIMATION
      -------------------------------- */

      gsap.from(
        [
          eyebrowRef.current,
          line1Ref.current,
          line2Ref.current,
        ].filter(Boolean),
        {
          yPercent: 115,
          opacity: 0,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.12,

          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true,
          },
        }
      );

      if (prefersReducedMotion) return;

      /* --------------------------------
         HORIZONTAL SCROLL
      -------------------------------- */

      const total = capabilities.length;

      /*
       * IMPORTANT:
       * Calculate the actual horizontal distance available.
       *
       * document.documentElement.clientWidth is used instead
       * of section.offsetWidth so browser zoom / scrollbar
       * changes don't create incorrect pin spacing.
       */
      const getScrollDistance = () => {
        const viewportWidth = document.documentElement.clientWidth;

        const distance = track.scrollWidth - viewportWidth;

        return Math.max(0, distance);
      };

      const horizontalTween = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",

        scrollTrigger: {
          trigger: section,

          /*
           * Start exactly when section reaches viewport top.
           */
          start: "top top",

          /*
           * The pin duration is exactly the horizontal
           * distance of the track.
           */
          end: () => `+=${getScrollDistance()}`,

          scrub: 1,

          pin: true,

          /*
           * VERY IMPORTANT
           * Keeps the space occupied by the pinned section
           * so the next section doesn't jump upward.
           */
          pinSpacing: true,

          /*
           * Helps prevent visible jump while entering pin.
           */
          anticipatePin: 1,

          /*
           * Recalculate on browser resize / zoom.
           */
          invalidateOnRefresh: true,

          /*
           * Don't horizontally scroll the body.
           */
          refreshPriority: 1,

          onUpdate: (self) => {
            const el = numeralRef.current;

            if (!el) return;

            const index = Math.min(
              total - 1,
              Math.round(self.progress * (total - 1))
            );

            const next = String(index + 1).padStart(2, "0");

            if (el.dataset.value !== next) {
              el.dataset.value = next;
              el.textContent = next;

              gsap.fromTo(
                el,
                {
                  scale: 1.06,
                },
                {
                  scale: 1,
                  duration: 0.35,
                  ease: "power2.out",
                  overwrite: true,
                }
              );
            }
          },
        },
      });

      /* --------------------------------
         REFRESH AFTER IMAGES LOAD
      -------------------------------- */

      const images = track.querySelectorAll("img");

      const refreshScrollTrigger = () => {
        ScrollTrigger.refresh();
      };

      images.forEach((img) => {
        if (!img.complete) {
          img.addEventListener("load", refreshScrollTrigger);
        }
      });

      /*
       * ResizeObserver handles:
       * - browser resize
       * - zoom
       * - responsive card width changes
       * - image/layout size changes
       */
      let resizeTimeout: ReturnType<typeof setTimeout>;

      const resizeObserver = new ResizeObserver(() => {
        clearTimeout(resizeTimeout);

        resizeTimeout = setTimeout(() => {
          ScrollTrigger.refresh();
        }, 100);
      });

      resizeObserver.observe(track);

      /* --------------------------------
         INITIAL REFRESH
      -------------------------------- */

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      /* --------------------------------
         CLEANUP
      -------------------------------- */

      return () => {
        clearTimeout(resizeTimeout);

        resizeObserver.disconnect();

        images.forEach((img) => {
          img.removeEventListener("load", refreshScrollTrigger);
        });

        horizontalTween.kill();
      };
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-dvh flex flex-col bg-primary text-white overflow-hidden pb-6 sm:pb-10 md:pb-14"
    >
      {/* Ambient Glow */}

      <div className="pointer-events-none absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-primary-action/15 blur-[130px]" />

      <div className="pointer-events-none absolute top-1/3 -right-40 h-[420px] w-[420px] rounded-full bg-digital/15 blur-[130px]" />

      {/* Film Grain */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Background Numeral */}

      <div
        ref={numeralRef}
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -right-6 md:-right-14 select-none text-[160px] sm:text-[240px] md:text-[380px] font-extrabold leading-none tracking-tighter tabular-nums"
        style={{
          WebkitTextStroke: "1.5px rgba(255,255,255,0.14)",
          color: "transparent",
        }}
      >
        01
      </div>

      {/* Intro */}

      <div className="relative z-10 shrink-0 w-full max-w-[1450px] mx-auto px-6 md:px-10 pt-10 sm:pt-16 md:pt-24 pb-5 sm:pb-8 md:pb-10 flex flex-col gap-3 sm:gap-4 md:gap-5">
        <span
          ref={eyebrowRef}
          className="inline-flex w-fit items-center gap-2 text-primary-action text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]"
        >
          <span
            ref={dotRef}
            className="h-1.5 w-1.5 rounded-full"
          />

          Enterprise Capabilities
        </span>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] sm:leading-[1.02] tracking-tight">
          <span className="block overflow-hidden">
            <span
              ref={line1Ref}
              className="block"
            >
              Four Disciplines.
            </span>
          </span>

          <span className="block overflow-hidden">
            <span
              ref={line2Ref}
              className="block bg-gradient-to-r from-primary-action to-digital bg-clip-text text-transparent"
            >
              One Integrated Team.
            </span>
          </span>
        </h2>
      </div>

      {/* Horizontal Scroll */}

      <div className="relative z-10 flex-1 min-h-0 w-full overflow-hidden flex items-center motion-reduce:overflow-x-auto">
        <div
          ref={trackRef}
          className="flex h-full items-center gap-8 md:gap-10 will-change-transform px-6 md:px-10"
        >
          {capabilities.map(
            ({
              heading,
              subHeading,
              icon,
              tags,
              image,
            }) => (
              <CapabilityCard
                key={heading}
                heading={heading}
                subHeading={subHeading}
                icon={icon}
                tags={tags}
                image={image}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}