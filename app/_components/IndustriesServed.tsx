"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

// Data
import { industriesServed } from "@/data/home.data"

// Type
import { IndusriesServiceType } from "@/types/content"

// Icons
import { CircleChevronRight, CircleChevronLeft } from "lucide-react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function IndustriesServed() {
  const [selected, setSelected] = useState<number>(0)

  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  // Derived, not stored — no separate `src` state / effect chain needed
  const activeIndustry = industriesServed[selected]
  const totalIndustries = industriesServed.length

  // Section entrance — reveals once on scroll into view
  useGSAP(
    () => {
      gsap.from(".industry-reveal", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      })
    },
    { scope: sectionRef }
  )

  // Image + caption swap — comes up from below and settles into place
  useGSAP(
    () => {
      if (!imageRef.current) return

      gsap.fromTo(
        imageRef.current,
        { yPercent: 12, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
    },
    { dependencies: [selected], scope: sectionRef }
  )

  // Skip re-triggering the animation if the same card is tapped again
  const handleSelect = (i: number) => {
    if (i !== selected) setSelected(i)
  }

  // Wrap around both ends — no dead clicks at the first/last industry
  const goToPrev = () =>
    setSelected((prev) => (prev - 1 + totalIndustries) % totalIndustries)
  const goToNext = () => setSelected((prev) => (prev + 1) % totalIndustries)

  if (!activeIndustry) return null

  return (
    <section
      ref={sectionRef}
      className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-white overflow-hidden"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-10 lg:gap-16 items-center">
        {/* Image */}
        <div className="relative industry-reveal">
          <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden">
            <div ref={imageRef} className="absolute inset-0">
              <Image
                src={activeIndustry.image}
                alt={activeIndustry.heading}
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover object-center"
                priority
              />

              {/* count badge */}
              <span className="absolute top-5 left-5 bg-black/70 backdrop-blur-sm text-white text-xs font-bold tracking-wide px-3 py-1.5 rounded-full">
                {totalIndustries}+ Industries
              </span>

              {/* gradient for caption readability */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent" />

              {/* caption — mirrors the active industry */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight">
                  {activeIndustry.heading}
                </h3>
                <p className="text-white/80 text-sm mt-1">
                  {activeIndustry.subHeading}
                </p>
              </div>
            </div>

            {/* prev / next controls — wrap around, real buttons, safe touch target */}
            <button
              type="button"
              onClick={goToPrev}
              aria-label="Previous industry"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full text-white drop-shadow-md transition-transform duration-200 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <CircleChevronLeft className="w-7 h-7" strokeWidth={1.75} />
            </button>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Next industry"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full text-white drop-shadow-md transition-transform duration-200 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <CircleChevronRight className="w-7 h-7" strokeWidth={1.75} />
            </button>
          </div>
        </div>

        {/* Copy + list */}
        <div className="flex flex-col gap-5">
          <p className="industry-reveal flex items-center gap-2 text-primary-action text-xs sm:text-sm font-bold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-action" />
            Industries We Serve
          </p>

          <h2 className="industry-reveal text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] text-primary">
            Deep Experience Across Complex, Regulated Industries.
          </h2>

          <p className="industry-reveal text-secondary-text max-w-xl">
            From highly regulated environments to fast-moving consumer
            businesses, we adapt learning strategy, content and technology to
            the realities of your sector. Select an industry to see it in
            focus.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            {industriesServed.map(
              (
                { heading, subHeading, icon }: IndusriesServiceType,
                i: number
              ) => {
                const isActive = i === selected
                return (
                  <li key={heading} className="industry-reveal">
                    <button
                      type="button"
                      onClick={() => handleSelect(i)}
                      aria-pressed={isActive}
                      className={`w-full text-left p-4 border rounded-2xl flex items-start gap-3 transition-colors duration-300 ${
                        isActive
                          ? "bg-primary-action/5 border-primary-action shadow-sm"
                          : "border-border hover:bg-primary-action/5"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                          isActive
                            ? "bg-primary-action text-white"
                            : "bg-primary-action/10 text-primary-action"
                        }`}
                      >
                        {icon}
                      </div>
                      <div>
                        <h3 className="text-primary font-bold text-[0.95rem]">
                          {heading}
                        </h3>
                        <p className="text-secondary-text/70 text-[0.8rem] font-medium mt-0.5">
                          {subHeading}
                        </p>
                      </div>
                    </button>
                  </li>
                )
              }
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}