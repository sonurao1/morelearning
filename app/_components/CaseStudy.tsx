"use client";

import { useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { useGSAP } from "@gsap/react";

import CaseStudyBox from "@/components/Case-Study-box";
import mergeClassNames from "@/libs/merge-classnames";
import {
  CASE_STUDIES,
  CASE_STUDIES_CONTENT,
  CASE_STUDY_CATEGORIES,
} from "@/data/home.data";
import type { CaseStudy } from "@/types/content";

gsap.registerPlugin(ScrollTrigger, Flip, useGSAP);

export default function CaseStudy() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const highlightRef = useRef<HTMLSpanElement>(null);
  const flipStateRef = useRef<ReturnType<typeof Flip.getState> | null>(null);
  const previousHeightRef = useRef<number | null>(null);

  const filteredCaseStudies = useMemo(() => {
    if (activeCategory === "All") return CASE_STUDIES;
    return CASE_STUDIES.filter(
      (study: CaseStudy) => study.category === activeCategory
    );
  }, [activeCategory]);

  // Tab click — layout change se PEHLE current card positions snapshot kar lo,
  // taaki baad mein Flip old -> new position ka smooth animation bana sake
  function handleCategoryClick(category: string) {
    if (category === activeCategory) return;
    const grid = gridRef.current;
    if (grid) {
      // Height ko YAHI, isi tick mein, turant DOM pe lock kar do — React state
      // update se pehle hi. Post-render effect mein lock karne se ek frame ke
      // liye natural (collapsed/resized) layout paint ho jaata tha, wahi
      // flicker tha. Ab koi gap hi nahi bachta.
      const currentHeight = grid.getBoundingClientRect().height;
      grid.style.height = `${currentHeight}px`;
      grid.style.overflow = "hidden";
      previousHeightRef.current = currentHeight;
      flipStateRef.current = Flip.getState(grid.children);
    }
    setActiveCategory(category);
  }

  // Header — ek baar upar se reveal
  useGSAP(
    () => {
      gsap.from(".case-study-reveal", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: sectionRef }
  );

  // Sliding highlight pill — active tab ke peeche wali colored pill ko
  // uske exact position/width pe smoothly slide karata hai
  useGSAP(
    () => {
      const activeIndex = CASE_STUDY_CATEGORIES.findIndex(
        (category) => category === activeCategory
      );
      const activeTab = tabRefs.current[activeIndex];
      const highlight = highlightRef.current;
      if (!activeTab || !highlight) return;

      gsap.to(highlight, {
        x: activeTab.offsetLeft,
        width: activeTab.offsetWidth,
        duration: 0.45,
        ease: "power3.inOut",
      });
    },
    { dependencies: [activeCategory], scope: tabsRef }
  );

  // Cards — pehli baar scroll mein aate hi ek baar pop-up hote hai
  useGSAP(
    () => {
      ScrollTrigger.batch(".case-study-card", {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.from(batch, {
            opacity: 0,
            scale: 0.9,
            y: 50,
            rotateY: -25,
            transformPerspective: 800,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.12,
          }),
      });
    },
    { scope: sectionRef }
  );

  // Filter badalne pe — Flip poori grid ko old position se new position tak
  // smoothly reflow karta hai; jo cards nayi list mein aayi wo fade+scale-in
  // hoti hai, jo hati wo fade+scale-out
  useGSAP(
    () => {
      const state = flipStateRef.current;
      if (!state) return;
      flipStateRef.current = null;

      const grid = gridRef.current;
      const wasLocked = previousHeightRef.current != null;
      previousHeightRef.current = null;

      // Height already lock ho chuki hai (click handler mein) — ab bas
      // natural end-height tak smoothly tween karo, Flip ke saath sync mein
      if (grid && wasLocked) {
        const endHeight = grid.getBoundingClientRect().height;
        gsap.to(grid, {
          height: endHeight,
          duration: 0.6,
          ease: "power3.inOut",
          onComplete: () => {
            grid.style.height = "";
            grid.style.overflow = "";
          },
        });
      }

      Flip.from(state, {
        duration: 0.6,
        ease: "power3.inOut",
        scale: true,
        absolute: true,
        stagger: 0.03,
        onEnter: (elements) =>
          gsap.fromTo(
            elements,
            { opacity: 0, scale: 0.85, y: 20, rotate: -2 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              rotate: 0,
              duration: 0.5,
              ease: "power2.out",
              stagger: 0.06,
            }
          ),
        onLeave: (elements) =>
          gsap.to(elements, {
            opacity: 0,
            scale: 0.85,
            duration: 0.3,
            ease: "power2.in",
          }),
      });
    },
    { dependencies: [activeCategory], scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      aria-label="Featured case studies"
      className="relative w-full overflow-hidden bg-primary py-20 md:py-28"
    >
      {/* Ambient glow — Capabilities section jaisa hi treatment, brand consistency ke liye */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full bg-primary-action/15 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-digital/15 blur-[130px]" />

      {/* Header */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1450px] flex-col gap-5 px-6 pb-10 md:px-10 md:pb-14">
        <p className="case-study-reveal flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-action sm:text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-action" />
          {CASE_STUDIES_CONTENT.eyebrow}
        </p>

        <h2 className="case-study-reveal max-w-4xl text-3xl font-bold leading-[1.1] text-white sm:text-4xl lg:text-5xl xl:text-6xl">
          {CASE_STUDIES_CONTENT.headline}
        </h2>

        <p className="case-study-reveal mt-1 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
          {CASE_STUDIES_CONTENT.supporting}
        </p>
      </div>

      {/* Category tabs — animated sliding pill */}
      <div className="relative z-10 mx-auto mb-10 w-full max-w-[1450px] px-6 md:px-10 md:mb-14">
        <div
          ref={tabsRef}
          className="case-study-reveal relative flex w-full gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/5 p-1.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:inline-flex sm:w-auto [&::-webkit-scrollbar]:hidden"
        >
          <span
            ref={highlightRef}
            className="pointer-events-none absolute inset-y-1.5 left-0 z-0 w-0 rounded-full bg-primary-action shadow-[0_4px_16px_-2px_rgba(16,84,232,0.5)]"
          />

          {CASE_STUDY_CATEGORIES.map((category, index) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                onClick={() => handleCategoryClick(category)}
                aria-pressed={isActive}
                className={mergeClassNames(
                  "relative z-10 shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-300 sm:px-5 sm:text-sm",
                  isActive ? "text-white" : "text-white/55 hover:text-white/85"
                )}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      {filteredCaseStudies.length > 0 ? (
        <div
          ref={gridRef}
          className="relative z-10 mx-auto grid w-full max-w-[1450px] grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-8"
        >
          {filteredCaseStudies.map((study) => (
            <CaseStudyBox
              key={study.id}
              className="case-study-card"
              {...study}
            />
          ))}
        </div>
      ) : (
        <div className="relative z-10 mx-auto flex w-full max-w-[1450px] min-h-60 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 text-center md:mx-6 lg:mx-auto">
          <div>
            <p className="text-lg font-semibold text-white">
              No case studies found
            </p>
            <p className="mt-2 text-sm text-white/50">
              Try selecting a different capability.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}