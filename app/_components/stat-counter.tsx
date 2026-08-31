import Image from "next/image";
// import MediaCamera from "@/assets/images/stock-images/media-camera.webp";

import { useTextFadeIn } from "@/libs/text-fade";

// Import statistics data and counter component
import Counter from "@/components/counter";
import { statsCounter } from "@/data/home.data";

export default function StatsCounter() {
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
    <section className=" mb-20 py-16 px-5 flex flex-col gap-14 items-center justify-center bg-secondary lg:px-8 lg:pb-0 xl:gap-20" ref={fadeRef}>



      {/* Stats counter */}
      <div data-fade className="container z-1 text-center grid grid-rows-4 grid-cols-1 gap-3.5 min-[512px]:grid-rows-2 min-[512px]:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 lg:bg-primary lg:rounded-2xl lg:-mb-20 xl:max-w-7xl">
        {statsCounter.map(({ stat, title }, index) => {
          return (
            <div
              key={index}
              className="py-8 px-5 flex flex-col items-center justify-center gap-2.5 bg-primary rounded-2xl md:gap-3.5 lg:py-0 lg:my-8 lg:border-r-2 border-black/25 lg:rounded-none last:border-r-0"
            >
              {/* Animated counter component */}
              <Counter className="text-4xl md:text-5xl xl:text-[3.5rem]">
                {stat}
              </Counter>

              {/* Counter title */}
              <h5 className="text-lg normal-case md:text-xl">{title}</h5>

            </div>
          );
        })}
      </div>

    </section>
  );
}
