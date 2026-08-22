"use client";

import SiteLogo from "@/components/site-logos";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const footerRef = useRef<HTMLElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const columnsRef = useRef<HTMLDivElement | null>(null);
    const marqueeRef = useRef<HTMLDivElement | null>(null);
    const marqueeTrackRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            /* --------------------------------
               FOOTER CONTENT REVEAL
            -------------------------------- */

            gsap.fromTo(
                contentRef.current,
                {
                    opacity: 0,
                    y: 80,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: "top 85%",
                    },
                },
            );

            /* --------------------------------
               COLUMN STAGGER
            -------------------------------- */

            const columns = columnsRef.current?.children;

            if (columns) {
                gsap.fromTo(
                    columns,
                    {
                        opacity: 0,
                        y: 40,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.12,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: columnsRef.current,
                            start: "top 85%",
                        },
                    },
                );
            }

            /* --------------------------------
               MARQUEE
            -------------------------------- */

            const marqueeTrack = marqueeTrackRef.current;

            if (marqueeTrack) {
                const marqueeWidth = marqueeTrack.scrollWidth / 2;

                gsap.to(marqueeTrack, {
                    x: -marqueeWidth,
                    duration: 25,
                    ease: "none",
                    repeat: -1,
                });
            }

            /* --------------------------------
               MARQUEE SCROLL PARALLAX
            -------------------------------- */

            gsap.to(marqueeRef.current, {
                y: -30,
                ease: "none",
                scrollTrigger: {
                    trigger: marqueeRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            });
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer
            ref={footerRef}
            className="w-full overflow-hidden  text-white"
        >
            {/* =================================
          MAIN FOOTER
      ================================= */}

            <section
                ref={contentRef}
                className="w-full flex justify-center px-4 sm:px-6 lg:px-8"
            >
                <div className="container border-x border-t border-white/90/10">
                    {/* =================================
              TOP CONTENT
          ================================= */}

                    <div
                        ref={columnsRef}
                        className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              border-b
              border-white/90/10
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
                sm:border-r
                lg:border-b-0
                border-white/90/10
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
                lg:border-b-0
                lg:border-r
                border-white/90/10
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
                sm:border-r
                lg:border-b-0
                border-white/90/10
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
                  border-white/90/10
                  ${index !== 3 ? "lg:border-r" : ""}
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

            {/* =================================
          INFINITE LOGO MARQUEE
      ================================= */}

            <section
                ref={marqueeRef}
                className="
          w-full
          overflow-hidden
          bg-technology
          border-y
          border-white/90
        "
            >
                <div
                    ref={marqueeTrackRef}
                    className="
            flex
            w-max
            items-center
            py-8
            sm:py-10
          "
                >
                    {/* SET 1 */}

                    <div className="flex items-center shrink-0">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <div
                                key={`logo-one-${index}`}
                                className="
                  shrink-0
                  px-8
                  sm:px-12
                  md:px-16
                  border-r
                  border-white/90
                "
                            >
                                <SiteLogo width={260} height={130} />
                            </div>
                        ))}
                    </div>

                    {/* SET 2
              Duplicate is required for seamless loop
          */}

                    <div className="flex items-center shrink-0">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <div
                                key={`logo-two-${index}`}
                                className="
                  shrink-0
                  px-8
                  sm:px-12
                  md:px-16
                  border-r
                  border-white/90
                "
                            >
                                <SiteLogo width={260} height={130} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </footer>
    );
}
