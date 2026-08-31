import MovingBrands from "@/components/brands-carousel";
import { useTextFadeIn } from "@/libs/text-fade"

export default function TrustedBrands() {
  const fadeRef = useTextFadeIn({
    duration: 1.5,
    y: 40,
    delay: 0.2,
    stagger: 0.1,
    blur: 12,
    scrollTrigger: true,
    top: "top 80%",
  });

  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-28">
      {/* ambient glow orbs — digital + technology accents, signature element */}
      <div
        className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-digital opacity-20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-technology opacity-20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container relative mx-auto flex flex-col items-center gap-10 px-4 md:gap-14" ref={fadeRef}> 
        {/* heading */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="max-w-3xl text-balance text-center font-display text-2xl font-medium tracking-tight text-white sm:text-3xl md:text-4xl" data-fade>
            Trusted by Leading Enterprises Worldwide
          </h2>
          {/* gradient rule — spans the full brand palette in one small accent */}
          <span
            className="h-[3px] w-16 rounded-full bg-gradient-to-r from-primary-action via-digital to-technology"
            aria-hidden="true"
            data-fade
          />
        </div>

        {/* moving brands — masked edges so logos fade in/out instead of hard cut */}
        <div
          className="w-full "
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <MovingBrands direction="left" data-fade />
          <MovingBrands direction="right" data-fade />
        </div>

        {/* supporting copy */}
        <p className="max-w-6xl text-balance text-center text-sm leading-relaxed text-white/60 md:text-base" data-fade>
          Whether it's developing global learning programs, executive presentations, technical product visualizations, immersive 3D experiences, or enterprise communication assets, organizations trust MoreLearning to deliver work that meets the highest standards of quality, speed, and business impact.
        </p>
      </div>
    </section>
  );
}