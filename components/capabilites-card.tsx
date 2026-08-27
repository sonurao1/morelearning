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
    <div className="h-full flex items-center shrink-0">
      <div
        className="
          relative
          w-[calc(100vw-32px)]
          h-full
          min-h-[240px]
          max-h-[420px]

          sm:w-[500px]
          sm:min-h-[340px]
          sm:max-h-[480px]

          lg:w-[600px]
          lg:min-h-[380px]   
          lg:max-h-[520px]

          rounded-2xl
          border border-white/10
          overflow-hidden
          shadow-2xl shadow-black/40
          group
        "
      >
        {/* Image */}
        <Image
          src={image}
          alt={heading}
          fill
          sizes="
            (min-width: 1024px) 600px,
            (min-width: 640px) 500px,
            calc(100vw - 32px)
          "
          className="
            object-cover
            object-center
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* Gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-primary
            via-primary/70
            to-transparent
            transition-opacity
            duration-500
          "
        />

        {/* Content — pehle yahan ek 375px-specific hack tha (bottom-20,
            bina inset-x ke) jo iPhone SE jaisi widths pe box ko galat
            size/position deta tha. Ab hamesha inset-0 hai, aur padding/
            font-size responsive classes hi chhote screens sambhalti hai */}
        <div
          className="
            absolute
            inset-0
            z-10
            flex
            flex-col
            justify-end

            p-4
            sm:p-7
            lg:p-8

            text-white
            gap-1
            sm:gap-3
          "
        >
          <h2
            className="
              text-lg
              sm:text-3xl
              font-bold
              leading-tight
            "
          >
            {heading}
          </h2>

          <p
            className="
              text-xs
              sm:text-base
              text-white/60
              leading-relaxed
            "
          >
            {subHeading}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {tags.map((tag) => (
              <span
                key={`${heading}-${tag}`}
                className="
                  py-1
                  px-2

                  backdrop-blur-lg
                  text-white

                  border-[0.5px]
                  border-white/30

                  rounded-full

                  text-[10px]
                  sm:text-[12px]      

                  whitespace-nowrap
                "
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA — pehle sirf hover pe reveal hota tha (>=360px se), jo touch
              devices pe kabhi dikhta hi nahi tha. Ab mobile pe hamesha
              visible, sirf sm+ (real pointer) pe hover-gated hai */}
          <Link
            href="#"
            className="
              inline-flex
              items-center
              gap-2
              w-fit

              text-sm
              font-medium
              mt-1

              opacity-100
              translate-y-0

              min-[340px]:opacity-0
              min-[340px]:translate-y-1
              min-[340px]:group-hover:opacity-100
              min-[340px]:group-hover:translate-y-0

              focus-visible:opacity-100
              focus-visible:translate-y-0
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-white/70

              rounded-sm
              transition-all
              duration-500
            "
          >
            See Related Work
            <ArrowUpRight
              size={16}
              className="
                transition-transform
                duration-300
                sm:group-hover:translate-x-0.5
                sm:group-hover:-translate-y-0.5
              "
            />
          </Link>
        </div>
      </div>
    </div>
  );
}