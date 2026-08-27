"use client";

import SiteLogo from "@/components/site-logos";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";


export default function Footer() {


    return (
        <footer
     
            className="w-full overflow-hidden  text-white relative"
        >
            {/* ================================= MAIN FOOTER ================================= */}

            <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8 relative z-5 ">
                <div className="container ">
                    {/* =================================
              TOP CONTENT
          ================================= */}

                    <div
                        className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
               border-b
              border-black/90/10
            "
                    >
                        {/* ---------------------------------
                BRAND
            --------------------------------- */}

                        <div
                            className="
                p-6
                sm:p-8
                lg:p-10
                 border-b
                sm: 
                lg: border-b-0
                border-black/90/10
                flex
                flex-col
                gap-8
                lg:col-span-1
              "
                        >
                            <Link
                                href="#"
                                className="inline-block w-fit transition-transform duration-300 hover:scale-[1.03]"
                            >
                                <SiteLogo width={100} height={100} />
                            </Link>

                            <p className="max-w-sm text-sm sm:text-[15px] leading-7 text-white/60">
                                Your enterprise enablement partner for interactive learning,
                                visual communication, AI-powered experiences and immersive
                                technology.
                            </p>

                            <Link
                                href="#"
                                className="
                  group
                  flex
                  items-center
                  gap-3
                  w-fit
                  text-sm
                  font-medium
                  text-digital
                "
                            >
                                <span className="relative">
                                    Let's build your learning experience
                                    <span
                                        className="
                      absolute
                      left-0
                      -bottom-1
                      h-px
                      w-0
                      bg-technology
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                                    />
                                </span>

                                <MoveUpRight
                                    className="
                    w-4
                    h-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                                />
                            </Link>
                        </div>

                        {/* ---------------------------------
                EXPLORE
            --------------------------------- */}

                        <div
                            className="
                p-6
                sm:p-8
                lg:p-10
                 border-b
                lg: border-b-0
                lg: 
                border-black/90/10
              "
                        >
                            <h3 className="mb-7 text-xs uppercase tracking-[0.2em] font-semibold text-white/40">
                                Explore
                            </h3>

                            <ul className="flex flex-col gap-4">
                                {[
                                    "Solutions",
                                    "Who We Are",
                                    "Industries",
                                    "Our Work",
                                    "Testimonials",
                                ].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href="#"
                                            className="
                        group
                        flex
                        items-center
                        justify-between
                        text-sm
                        text-white/70
                        transition-colors
                        duration-300
                        hover:text-white
                      "
                                        >
                                            <span>{item}</span>

                                            <MoveUpRight
                                                className="
                          w-3.5
                          h-3.5
                          opacity-0
                          -translate-x-2
                          translate-y-2
                          transition-all
                          duration-300
                          group-hover:opacity-100
                          group-hover:translate-x-0
                          group-hover:translate-y-0
                        "
                                            />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* ---------------------------------
                CAPABILITIES
            --------------------------------- */}

                        <div
                            className="
                p-6
                sm:p-8
                lg:p-10
                 border-b
                sm: 
                lg: border-b-0
                border-black/90/10
              "
                        >
                            <h3 className="mb-7 text-xs uppercase tracking-[0.2em] font-semibold text-white/40">
                                Capabilities
                            </h3>

                            <ul className="flex flex-col gap-4">
                                {[
                                    "Learning & Workforce Enablement",
                                    "Sales & Customer Enablement",
                                    "Visual Communication",
                                    "Immersive & Interactive Experiences",
                                ].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href="#"
                                            className="
                        group
                        flex
                        items-start
                        justify-between
                        gap-4
                        text-sm
                        leading-6
                        text-white/70
                        transition-colors
                        duration-300
                        hover:text-white
                      "
                                        >
                                            <span>{item}</span>

                                            <MoveUpRight
                                                className="
                          shrink-0
                          w-3.5
                          h-3.5
                          opacity-0
                          -translate-x-2
                          translate-y-2
                          transition-all
                          duration-300
                          group-hover:opacity-100
                          group-hover:translate-x-0
                          group-hover:translate-y-0
                        "
                                            />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* ---------------------------------
                CONTACT
            --------------------------------- */}

                        <div className="p-6 sm:p-8 lg:p-10">
                            <h3 className="mb-7 text-xs uppercase tracking-[0.2em] font-semibold text-white/40">
                                Get in Touch
                            </h3>

                            <div className="flex flex-col gap-5">
                                <a
                                    href="mailto:contact@moreslides.com"
                                    className="
                    group
                    w-fit
                    text-sm
                    text-white/70
                    transition-colors
                    hover:text-white
                  "
                                >
                                    <span className="relative">
                                        contact@moreslides.com
                                        <span
                                            className="
                        absolute
                        left-0
                        -bottom-1
                        h-px
                        w-0
                        bg-black
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                                        />
                                    </span>
                                </a>

                                <a
                                    href="tel:+919876543210"
                                    className="
                    group
                    w-fit
                    text-sm
                    text-white/70
                    transition-colors
                    hover:text-white
                  "
                                >
                                    <span className="relative">
                                        +91 9876543210
                                        <span
                                            className="
                        absolute
                        left-0
                        -bottom-1
                        h-px
                        w-0
                        bg-black
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                                        />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* =================================
              SOCIAL LINKS
          ================================= */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                label: "Email",
                                href: "mailto:contact@moreslides.com",
                            },
                            {
                                label: "Facebook",
                                href: "#",
                            },
                            {
                                label: "X",
                                href: "#",
                            },
                            {
                                label: "LinkedIn",
                                href: "#",
                            },
                        ].map((item, index) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className={`
                  group
                  p-5
                  sm:p-6
                  flex
                  items-center
                  justify-between
                   border-b
                  border-black/90/10
                  ${index !== 3 ? "lg: " : ""}
                  hover:bg-digital
                  transition-colors
                  duration-500
                `}
                            >
                                <span className="text-sm font-medium">{item.label}</span>

                                <MoveUpRight
                                    className="
                    w-4
                    h-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                                />
                            </a>
                        ))}
                    </div>

                    {/* =================================
              COPYRIGHT
          ================================= */}

                    <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <p className="text-xs sm:text-sm text-white/40">
                            © 2026 WeTheIvy. All rights reserved.
                        </p>

                        <p className="text-xs sm:text-sm text-white/40">
                            Built for learning. Designed for impact.
                        </p>
                    </div>
                </div>
            </section>
 
            
            <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black via-digital/10 to-transparent z-0">

            </div>
  
        </footer>
    );
}
