"use client";

import Link from "next/link";
import SiteLogo from "@/components/site-logos";
import { useTextFadeIn } from "@/libs/text-fade";

import {
  CircleX,
  CircleCheck,
  Zap,
  Shapes,
  Puzzle,
  Sparkles,
} from "lucide-react";

// Shared once instead of four near-identical <li> blocks with the same
// className repeated verbatim — only the icon and label actually change.
const DIFFERENTIATOR_PILLS = [
  { icon: Zap, label: "Faster Execution" },
  { icon: Shapes, label: "Stronger Brand Consistency" },
  { icon: Puzzle, label: "Reduced Project Complexity" },
  { icon: Sparkles, label: "Better Learner Engagement" },
];

export default function IntegratedTeamSection() {
  const introFadeRef = useTextFadeIn({
    duration: 1.5,
    y: 40,
    delay: 0.2,
    stagger: 0.1,
    blur: 12,
    scrollTrigger: true,
    top: "top 700px",
  });

  const cardFadeRef = useTextFadeIn({
    duration: 1.5,
    y: 40,
    delay: 0.2,
    stagger: 0.1,
    blur: 12,
    scrollTrigger: true,
    top: "top bottom",
  });

  return (
    <section className="w-full bg-white flex items-center justify-center relative p-6 overflow-hidden">
      {/* Ambient glow — matches the treatment on the dark sections (Capabilities,
          CaseStudy) so this section doesn't look flat next to them. Kept
          much lower opacity since it's sitting on white, not dark, bg. */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-primary-action/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-digital/[0.08] blur-[120px]" />

      {/* Content Container */}
      <div className="container h-[90%] flex flex-col gap-6 py-6 border-10 relative">
        
        {/* Content 1 */}
        <div
          ref={introFadeRef}
          className="**:text-center flex flex-col items-center justify-center gap-4"
        >
          <p
            className="opacity-0 blur-md scale-95 text-primary-action font-bold"
            data-fade
          >
            What Makes MoreLearning Different
          </p>

          <h2
            className="opacity-0 blur-md scale-95 text-3xl md:text-4xl lg:text-5xl text-primary w-[90%] md:w-[70%] lg:w-[50%] mx-auto font-extrabold"
            data-fade
          >
            One Integrated Team. Every Discipline. No Compromise.
          </h2>
        </div>

        {/* Content 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          
          {/* Left Card — muted surface so it visually separates from the
              white section bg instead of blending into it */}
          <div className="p-8 flex flex-col justify-center gap-6 border border-primary/10 h-80 rounded-2xl bg-secondary shadow-lg shadow-digital/10">
            <h3 className="font-bold text-secondary-text/70">
              Most companies specialize in one area.
            </h3>

            <ul className="flex flex-col gap-4 text-secondary-text/50">
              <li className="flex gap-2">
                <CircleX strokeWidth={0.75} />
                <p>Some build eLearning.</p>
              </li>

              <li className="flex gap-2">
                <CircleX strokeWidth={0.75} />
                <p>Some create presentations.</p>
              </li>

              <li className="flex gap-2">
                <CircleX strokeWidth={0.75} />
                <p>Some produce videos.</p>
              </li>

              <li className="flex gap-2">
                <CircleX strokeWidth={0.75} />
                <p>Some develop 3D experiences.</p>
              </li>
            </ul>
          </div>

          {/* "vs" divider — small decorative accent that ties the two cards
              together as a before/after pair instead of two unrelated boxes.
              Desktop only; the cards just stack on mobile. */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:flex">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-primary text-xs font-bold uppercase tracking-wider text-white shadow-xl">
              vs
            </span>
          </div>

          {/* Right Card — richer gradient instead of a flat purple fill,
              plus a soft inner glow, so it reads as the "premium" answer
              rather than matching the muted left card's weight */}
          <div
            ref={cardFadeRef}
            className="relative overflow-hidden p-8 border border-white/10 h-80 bg-gradient-to-br from-digital to-[#4A0F82] flex flex-col justify-center gap-6 rounded-2xl shadow-xl shadow-digital/30"
          >
            <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-white/10 blur-[90px]" />

            <Link
              href="/"
              className="relative inline-block w-fit transition-transform duration-300 hover:scale-105"
            >
              <SiteLogo width={100} height={38} />
            </Link>

            <p
              className="relative opacity-0 blur-md scale-95 text-white/90"
              data-fade
            >
              We bring all these disciplines together under one integrated
              team, allowing enterprises to create consistent, engaging, and
              scalable learning and communication experiences without
              coordinating multiple vendors.
            </p>

            <p
              data-fade
              className="relative opacity-0 blur-md scale-95 flex gap-2 items-center font-medium text-white"
            >
              <CircleCheck strokeWidth={0.75} />
              <span>Every discipline, one accountable team</span>
            </p>
          </div>
        </div>

        {/* Content 3 */}
        <div className="p-6 flex flex-col gap-6 items-center justify-center w-full">
          <p className="text-center text-secondary-text/50 w-full md:w-[80%] lg:w-[60%]">
            This integrated approach enables faster execution, stronger brand
            consistency, reduced project complexity, and significantly better
            learner engagement.
          </p>

          <ul className="flex flex-wrap gap-4 justify-center items-center mx-auto shrink-0">
            {DIFFERENTIATOR_PILLS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="bg-white text-primary/70 py-1 px-2 sm:py-2 sm:px-4 rounded-full text-[0.600rem] md:text-[0.875rem] shadow-md shadow-digital/50 hover:shadow-lg font-bold flex items-center gap-2 hover:-translate-y-2 transition-transform duration-300"
              >
                <Icon
                  color="var(--color-digital)"
                  className="drop-shadow-lg drop-shadow-digital/50 w-[16px]"
                  strokeWidth={0.875}
                />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}