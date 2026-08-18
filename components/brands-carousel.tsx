"use client";

import Image from "next/image";
import { clientMarquee } from "@/data/home.data";

interface MovingBrandsProps {
  direction?: "left" | "right";
}

export default function MovingBrands({ direction = "left" }: MovingBrandsProps) {
  // Increased vertical padding so the larger drop shadows don't get clipped
  return (
    <div className="w-full overflow-hidden py-8">
      <ul
        className="flex w-max items-center gap-6 animate-[marquee_50s_linear_infinite]"
        style={{ animationDirection: direction === "right" ? "reverse" : "normal" }}
      >
        {[...clientMarquee, ...clientMarquee].map((brand, index) => (
          <li
            key={`${brand.altText || "brand"}-${index}`}
            className="group flex h-[88px] w-52 shrink-0 items-center justify-center rounded-2xl px-8 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-[#ffffff] via-[#e5e7eb] to-[#c7cbd1] border border-[#b4b8c0] shadow-[inset_0_4px_6px_rgba(255,255,255,0.9),inset_0_-3px_4px_rgba(0,0,0,0.06),0_15px_25px_-5px_rgba(0,0,0,0.4)] hover:shadow-[inset_0_4px_6px_rgba(255,255,255,0.9),inset_0_-3px_4px_rgba(0,0,0,0.06),0_20px_30px_-5px_rgba(0,0,0,0.5)]"
          >
            <Image
              src={brand.image}
              alt={brand.altText}
              width={160}
              height={48}
              className="max-h-18 w-auto max-w-full object-contain mix-blend-darken transition-transform duration-300 group-hover:scale-105"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}