"use client";

import { useMemo, useState } from "react";
import { CASE_STUDY_CATEGORIES, CASE_STUDIES } from "@/data/home.data";
import { caseStudyTypes } from "@/types/content";
import CaseStudyBox from "@/components/Case-Study-box";

export default function CaseStudy() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCaseStudies = useMemo(() => {
    if (activeCategory === "All") {
      return CASE_STUDIES;
    }

    return CASE_STUDIES.filter(
      (study: caseStudyTypes) => study.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto container ">
        {/* Header */}
        <div className="mb-10 flex w-full flex-col gap-5 lg:mb-14">
          {/* Eyebrow */}
          <p className="industry-reveal flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-action sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-action" />
            Case Studies
          </p>

          {/* Heading */}
          <h2 className="industry-reveal max-w-4xl text-3xl font-bold leading-[1.1] text-primary sm:text-4xl lg:text-5xl xl:text-6xl">
            Enterprise Impact, By the Numbers.
          </h2>

          {/* Description */}
          <p className="industry-reveal max-w-2xl text-sm leading-7 text-secondary-text sm:text-base">
            A sample of the enterprise programs we've delivered — filter by
            capability to explore. This is a placeholder set; the full 40+
            case study library from the current site should replace it before
            launch.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-10 w-full lg:mb-14">
          <div className="no-scrollbar flex w-full gap-3 overflow-x-auto pb-2">
            {CASE_STUDY_CATEGORIES.map((category: string) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`
                    shrink-0 rounded-full border px-5 py-2.5
                    text-sm font-semibold transition-all duration-300
                    focus:outline-none focus:ring-2
                    focus:ring-primary-action/40
                    ${
                      isActive
                        ? "border-primary-action bg-primary-action text-white"
                        : "border-secondary-text/30 bg-transparent text-primary hover:border-primary-action hover:bg-primary-action/10"
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Case Studies */}
        {filteredCaseStudies.length > 0 ? (
          <ul className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCaseStudies.map(
              (
                {
                  title,
                  client,
                  category,
                  summary,
                  image,
                  results,
                }: caseStudyTypes,
                index: number
              ) => (
                <li
                  key={`${title}-${category}-${index}`}
                  className="h-full"
                >
                  <CaseStudyBox
                    title={title}
                    client={client}
                    category={category}
                    summary={summary}
                    image={image}
                    results={results}
                  />
                </li>
              )
            )}
          </ul>
        ) : (
          /* Empty State */
          <div className="flex min-h-60 w-full items-center justify-center rounded-2xl border border-secondary-text/10 bg-secondary-text/5 px-6 text-center">
            <div>
              <p className="text-lg font-semibold text-primary">
                No case studies found
              </p>

              <p className="mt-2 text-sm text-secondary-text">
                Try selecting a different capability.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}