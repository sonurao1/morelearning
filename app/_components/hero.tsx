import LinkButton from "@/components/ui/link-button"
import { Manrope, Berkshire_Swash } from "next/font/google";
import { Star, ArrowRight } from "lucide-react";
import Image from "next/image";

const manrope = Manrope({
  subsets: ["latin"],
  weight: "500",
});

const manropeWeight = Manrope({
  subsets: ["latin"],
  weight: "700",
});

const felipaWeight = Berkshire_Swash({
  subsets: ["latin"],
  weight: "400",
});


export default function Hero(){
 return (
    <section
     className="min-h-dvh h-screen overflow-hidden relative py-16 px-5 flex items-center justify-center lg:px-8"
    >
        {/* Background image — space / orbit-ring artwork */}
        <Image
          src="/images/HeroBG1.png"
          alt="MoreLearning enterprise background"
          fill
          priority
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />

        {/* Dark gradient overlay so text + buttons stay readable on any part of the bg */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/20 via-transparent to-primary/70" />

        {/* Ambient glow behind the headline, mirrors the purple/blue halo in the reference */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
          <div className="h-[280px] w-[560px] rounded-full bg-digital/25 blur-[110px]" />
        </div>

        {/* Content */}
        <div className="container relative flex flex-col gap-5 **:text-left  md:justify-center z-10  ">

          {/* Eyebrow badge */}
          <div
            className="
               flex w-fit items-center gap-2 rounded-full
              border border-digital/40 bg-digital/10
              px-4 py-1.5 text-xs text-white/90 backdrop-blur-sm sm:text-sm
            "
          >
            <Star size={14} className="fill-digital text-digital shrink-0" />
            Enterprise Learning. Reimagined.
          </div>

          {/* Heading */}
          <h1 className={`${manropeWeight.className} mx-auto w-full text-white text-[clamp(2rem,4vw,5rem)] leading-[1.1]`}>
            Transform Enterprise <br />
            Knowledge Into{" "}

            <span className="relative inline-block">
              <span
                className={`
                  ${felipaWeight.className}
                  bg-gradient-to-r from-primary-action to-digital
                  bg-clip-text text-transparent
                `}
              >
                Experiences
              </span>
              {/* gradient underline swoosh */}
              <span className="absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-gradient-to-r from-primary-action to-digital" />
            </span>

            <br />

            People Understand, <br />

            Remember{" "}
            <span className="text-digital">&</span>{" "}
            Act On.
          </h1>

          {/* Paragraph */}
          <p className={`${manrope.className} text-white/60 sm:text-lg md:text-[1.375rem] xl:text-xl`}>
            MoreLearning helps global enterprises enable employees, customers,
            <br className="hidden md:block" />

            dealers and sales teams through interactive learning, visual
            <br className="hidden md:block" />

            communication, AI-powered experiences, simulations, presentations,
            <br className="hidden md:block" />

            videos, 3D and immersive technologies.
          </p>

          <div
            className="
              relative mx-auto flex w-full container flex-col gap-4 
              md:flex-row items-center justify-start
            "
          >

            <a
              href="#"
              className="
                group flex w-fit items-center gap-2 rounded-xl
                bg-gradient-to-r from-primary-action to-digital
                px-6 py-4 text-sm font-medium text-white
                shadow-lg shadow-digital/20
                transition-all duration-300
                hover:shadow-digital/40 hover:brightness-110
                lg:text-base
              "
            >
              Let's Build Your Learning Experience

              <ArrowRight
                size={20}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#"
              className="
                group flex w-fit items-center gap-2 rounded-xl
                border border-white/15 bg-white/[0.03]
                px-6 py-4 text-sm font-medium text-white backdrop-blur-sm
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
            </a>

          </div>

        </div>

    </section>
 )
}