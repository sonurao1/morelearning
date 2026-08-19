import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ServiceCategory } from "@/types/content";

export default function CapabilityCard({
  heading,
  subHeading,
  icon,
  tags,
  image,
}: ServiceCategory) {
  return (
    <div className="h-full flex items-center gap-6 shrink-0">
      <div className="h-120 w-[85vw] sm:w-[500px] lg:w-[600px] relative rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/40 group">
        {/* Image */}
        <Image
          src= {image}
          alt={heading}
          fill
          sizes="(min-width: 1024px) 600px, (min-width: 640px) 500px, 85vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent opacity-100 group-hover:opacity-60 transition-opacity duration-500" />

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 text-white gap-3">
          <h2 className="text-3xl font-bold">{heading}</h2>
          <p className="text-white/60">{subHeading}</p>

          {/* tags container */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${heading}-${tag}`}
                className="py-1 px-2 backdrop-blur-lg text-white border-[0.5px] border-white/30 rounded-full text-[12px]"
              >
                {tag}
              </p>
            ))}
          </div>

          <Link
            href="#"
            className="inline-flex items-center gap-2 w-fit text-sm font-medium mt-1 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 focus-visible:opacity-100 focus-visible:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-sm transition-all duration-500"
          >
            See Related Work
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}