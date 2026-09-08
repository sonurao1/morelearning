"use client";
import { Star, ArrowRight } from "lucide-react";

import { useTextFadeIn } from "@/libs/text-fade";
import { ShaderBackground, SHADER_FALLBACK_GRADIENT } from "@/components/ui/HeroBackground";

export default function Hero() {
  const fadeRef = useTextFadeIn({
    duration: 1,
    y: 40,
    delay: 0.2,
    stagger: 0.1,
    blur: 12,
  });

  return (
    <section className="relative flex min-h-dvh h-screen items-center justify-center overflow-hidden px-5 py-16 lg:px-8">
      {/* Static gradient — plain CSS, rendered on the server as part of the
          page's own HTML. This is what's actually visible the instant the
          page paints (no JS, no WebGL, no wait), and on mobile / low-power
          devices (see shouldUseHeavyBackground in HeroBackground.tsx) it's
          the ONLY background — the WebGL canvas below never even mounts
          there. The slow drift is transform-only CSS (near-zero cost) so
          it still feels alive even with zero JS involved. On capable
          desktops the animated shader canvas fades in on top of this once
          its first frame is ready. */}
      <div
        className="hero-gradient-drift absolute inset-0 -z-20"
        style={{ background: SHADER_FALLBACK_GRADIENT }}
      />

      {/* Background — animated WebGL shader, layered above the static
          gradient above and fading in on top of it once ready. */}
      <ShaderBackground className="absolute inset-0 -z-10" />

      {/* Dark gradient overlay — kept for text legibility over the shader */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-primary/30 via-primary/10 to-primary/80" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[280px] w-[560px] rounded-full bg-digital/25 blur-[110px]" />
      </div>

      {/* Content */}
      <div
        ref={fadeRef}
        className="container relative z-10 flex flex-col gap-5 **:text-left md:justify-center"
      >
        {/* Eyebrow */}
        <div
          data-fade
          className="
            opacity-0 blur-md scale-95 flex w-fit items-center gap-2 rounded-full
            border border-digital/40 bg-digital/10
            px-4 py-1.5 text-xs text-white/90
            backdrop-blur-sm sm:text-sm
          "
        >
          <Star size={14} className="shrink-0 fill-digital text-digital" />
          Enterprise Learning. Reimagined.
        </div>

        {/* Heading */}
        <h1
          data-fade
          className="opacity-0 blur-md scale-95 mx-auto w-full text-[clamp(2rem,4vw,5rem)] leading-[1.1] text-white"
        >
          Transform Enterprise <br />
          Knowledge Into{" "}
          <span className="relative inline-block">
            <span
              className={`
               
                bg-linear-to-r from-primary-action to-digital
                bg-clip-text text-transparent
              `}
            >
              Experiences
            </span>
            <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-linear-to-r from-primary-action to-digital" />
          </span>
          <br />
          People Understand, <br />
          Remember <span className="text-digital">&</span> Act On.
        </h1>

        {/* Paragraph */}
        <p
          data-fade
          className={` opacity-0 blur-md scale-95 text-white/60 sm:text-lg md:text-[1.375rem] xl:text-xl`}
        >
          MoreLearning helps global enterprises enable employees, customers,
          <br className="hidden md:block" />
          dealers and sales teams through interactive learning, visual
          <br className="hidden md:block" />
          communication, AI-powered experiences, simulations, presentations,
          <br className="hidden md:block" />
          videos, 3D and immersive technologies.
        </p>

        {/* Buttons */}
        <div className="relative flex w-full flex-col items-center gap-4 md:flex-row md:items-center ">
          {/* Button 1 */}
          <a
            data-fade
            href="#"
            className="
              opacity-0 blur-md scale-95 group relative overflow-hidden flex w-fit items-center gap-2 rounded-xl
              bg-linear-to-r from-primary-action to-digital
              px-6 py-4 text-sm font-medium text-white
              shadow-lg shadow-digital/20
              transition-all duration-300
              hover:brightness-110 hover:shadow-digital/40
              lg:text-base
            "
          >
            Let&apos;s Build Your Learning Experience
            <ArrowRight
              size={20}
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            />
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
          </a>

          {/* Button 2 */}
          <a
            data-fade
            href="#"
            className="
              opacity-0 blur-md scale-95 group relative overflow-hidden flex w-fit items-center gap-2 rounded-xl
              border border-white/15 bg-white/[0.03]
              px-6 py-4 text-sm font-medium text-white
              backdrop-blur-sm
              transition-all duration-300
              hover:border-white/30 hover:bg-white/[0.08]
              lg:text-base
            "
          >
            View Our Work
            <ArrowRight
              size={20}
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            />
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
          </a>
        </div>
      </div>
    </section>
  );
}