import Image from "next/image"
import { CircleCheck } from "lucide-react"
import { useTextFadeIn } from "@/libs/text-fade"

const enterpriseFeatures = [
  "Multi-disciplinary in-house team",
  "End-to-end enterprise delivery",
  "Instructional designers, visual strategists, developers & production specialists",
  "Scalable production for global rollouts",
  "Fast turnaround without compromising quality",
  "Dedicated project management",
  "Enterprise-ready workflows",
  "Learning, communication & visualization under one partner",
]

export default function EnterpriseStrategy() {
  const featureRef = useTextFadeIn({
    duration: 1.5,
    y: 40,
    delay: 0.2,
    stagger: 0.1,
    blur: 12,
    scrollTrigger: true,
    top: "top 85%",
  });

  return (
    <section className="relative w-full overflow-hidden bg-primary py-20 md:py-28">
      {/* Background image + legibility scrim */}
      <div className="absolute inset-0">
        <Image
          src="/images/EnterpriseStrategyBG.jpg"
          alt="Enterprise Strategy"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8" ref={featureRef}>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-10">
          {/* Copy */}
          <div className="flex flex-col items-start gap-5"  data-fade >
            <span className="text-sm font-semibold uppercase tracking-wide text-primary-action">
              Built for Enterprise Scale
            </span>
            <h1 className="max-w-xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"  data-fade >
              Enterprise-Ready, From Strategy to Delivery.
            </h1>
            <p className="max-w-md text-base text-white/80 sm:text-lg"  data-fade >
              Every engagement is backed by a multidisciplinary team and
              workflows built to move at the pace global organizations need.
            </p>
          </div>

          {/* Feature checklist */}
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {enterpriseFeatures.map((feature) => (
              <li
                key={feature}
                className="group flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-digital hover:bg-white/10"
              >
                <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 stroke-[1.75] text-digital transition-transform duration-300 group-hover:scale-110" />
                <span className="text-sm leading-snug text-white/90">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}