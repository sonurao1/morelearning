"use client";

import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import { navbarData } from "@/data/layout.data";
import { useActiveLink } from "@/hooks/use-active-link";

import Link from "next/link";
import LinkButton from "@/components/ui/link-button";
import SiteLogo from "@/components/site-logos";

export default function Header() {
  const { isActive } = useActiveLink();

  const [isOpen, setIsOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);

  type HeaderScrollState = "top" | "visible" | "hidden";

  const [scrollState, setScrollState] = useState<HeaderScrollState>("top");

  const lastScrollTop = useRef(0);
  const headerRef = useRef<HTMLElement>(null);
  const navListRef = useRef<HTMLUListElement>(null);

  // -------------------------------------------------------
  // Scroll Behaviour
  // -------------------------------------------------------

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop <= 25) {
        setScrollState("top");
      } else if (scrollTop < lastScrollTop.current) {
        setScrollState("visible");
      } else {
        setScrollState("hidden");
        setIsOpen(false);
      }

      lastScrollTop.current = scrollTop;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // -------------------------------------------------------
  // Initial Entrance Animation
  // -------------------------------------------------------

  useGSAP(
    () => {
      if (!headerRef.current) return;

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        headerRef.current,
        {
          y: -35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
        },
      );

      if (navListRef.current) {
        tl.fromTo(
          navListRef.current.children,
          {
            y: -8,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            stagger: 0.055,
          },
          "-=0.35",
        );
      }
    },
    {
      scope: headerRef,
    },
  );

  const isHeaderGlassy = scrollState === "visible";
  const isHeaderTop = scrollState === "top";
  const isHeaderHidden = scrollState === "hidden";

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        ref={headerRef}
        className={`
          fixed z-50
          flex h-20 w-full
          items-center justify-center
          px-5

          transition-all duration-500

          md:h-25
          lg:px-8

          ${isHeaderHidden ? "-top-20 md:-top-25" : "top-0"}

          ${
            isHeaderGlassy
              ? `
                border-b border-white/[0.06]
                bg-primary/75
                shadow-[0_12px_45px_-25px_rgba(0,0,0,0.65)]
                backdrop-blur-xl
              `
              : ""
          }
        `}
      >
        <nav className="container flex h-full items-center justify-between">
          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            aria-label="Home"
            className="
              inline-flex
              transition-transform
              duration-300
              hover:scale-[1.03]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary-action/60
            "
          >
            <SiteLogo width={132} height={38} />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <ul
            ref={navListRef}
            className="
              hidden
              items-center
              gap-7

              text-[15px]
              font-medium
              capitalize

              lg:flex
              xl:gap-9
            "
          >
            {navbarData.map(({ url, text, items }) => {
              // =============================================
              // DROPDOWN
              // =============================================

              if (items) {
                const groupActive =
                  isActive(url) || items.some((item) => isActive(item.url));

                return (
                  <li key={url} className="group relative">
                    {/* Trigger */}

                    <Link
                      href={url}
                      className={`
                        relative
                        flex items-center gap-1.5
                        rounded-lg
                        px-1 py-2

                        tracking-[0.01em]

                        transition-colors duration-200

                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-primary-action/50

                        ${
                          groupActive
                            ? "text-white"
                            : "text-white/75 hover:text-white"
                        }
                      `}
                    >
                      {text}

                      <ChevronDown
                        size={16}
                        strokeWidth={1.8}
                        className="
                          translate-y-px
                          text-white/45

                          transition-all duration-200

                          group-hover:rotate-180
                          group-hover:text-primary-action

                          group-focus-within:rotate-180
                          group-focus-within:text-primary-action

                          motion-reduce:transition-none
                        "
                      />
                    </Link>

                    {/* Trigger underline */}

                    <span
                      aria-hidden="true"
                      className={`
                        pointer-events-none
                        absolute
                        -bottom-0.5 left-1/2

                        h-[2px]
                        -translate-x-1/2
                        rounded-full

                        bg-gradient-to-r
                        from-primary-action
                        to-digital

                        transition-all duration-300

                        group-hover:w-full
                        group-hover:opacity-100

                        ${groupActive ? "w-full opacity-100" : "w-4 opacity-0"}
                      `}
                    />

                    {/* =========================================
                        DROPDOWN PANEL
                    ========================================= */}

<div
  className={`absolute left-1/2 top-full -translate-x-1/2 origin-top pt-4
    scale-[0.96] translate-y-[-6px] opacity-0
    transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
    motion-reduce:transition-none
    ${
      isHeaderGlassy || isHeaderTop
        ? `
          pointer-events-none

          group-hover:pointer-events-auto
          group-hover:translate-y-0
          group-hover:scale-100
          group-hover:opacity-100

          group-focus-within:pointer-events-auto
          group-focus-within:translate-y-0
          group-focus-within:scale-100
          group-focus-within:opacity-100
        `
        : "pointer-events-none"
    }`}
>
  {/* Small bridge so hover doesn't break */}
  <div className="absolute inset-x-0 -top-2 h-6" />

  <div
    className="
      relative
      w-[780px]
      overflow-hidden
      rounded-[26px]

      border border-black/[0.07]

      bg-[#fbfbfa]/[0.98]

      p-2.5

      shadow-[0_30px_80px_-25px_rgba(0,0,0,0.28),0_8px_24px_-12px_rgba(0,0,0,0.12)]

      backdrop-blur-2xl
    "
  >
    {/* --------------------------------------------------
        BACKGROUND DECORATION
    -------------------------------------------------- */}

    {/* Soft brand tint — intentionally very subtle */}
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute inset-0

        bg-linear-to-br
        from-primary-action/[0.055]
        via-transparent
        to-digital/[0.05]
      "
    />

    {/* Soft glow top-left */}
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        -left-20 -top-24

        h-52 w-52
        rounded-full

        bg-primary-action/[0.08]
        blur-3xl
      "
    />

    {/* Soft glow bottom-right */}
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        -bottom-28 -right-16

        h-56 w-56
        rounded-full

        bg-digital/[0.07]
        blur-3xl
      "
    />

    {/* Premium inner border */}
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute inset-[1px]

        rounded-[24px]

        border border-white/80
      "
    />

    {/* --------------------------------------------------
        SMALL TOP LABEL
    -------------------------------------------------- */}

    <div
      className="
        relative

        flex items-center
        justify-between

        px-4
        pb-2
        pt-2
      "
    >
      <div className="flex items-center gap-2">
        <span
          className="
            h-1.5 w-1.5
            rounded-full

            bg-primary-action

            shadow-[0_0_0_4px_rgba(0,0,0,0.025)]
          "
        />

        <span
          className="
            text-[11px]
            font-semibold
            uppercase

            tracking-[0.14em]

            text-black/35
          "
        >
          Explore
        </span>
      </div>

      <span
        className="
          text-[11px]
          font-medium
          tracking-wide

          text-black/25
        "
      >
        Discover more
      </span>
    </div>

    {/* --------------------------------------------------
        MENU ITEMS
    -------------------------------------------------- */}

    <ul
      className="
        relative

        grid grid-cols-3

        gap-1.5
      "
    >
      {items.map(({ url, text }) => {
        const active = isActive(url)

        return (
          <li
            key={url}
            className="group/item relative"
          >
            <Link
              href={url}
              aria-current={active ? "page" : undefined}
              className={`
                relative

                flex h-[76px]
                items-center
                justify-between

                gap-4

                overflow-hidden

                rounded-[16px]

                border

                px-4

                transition-all
                duration-300
                ease-[cubic-bezier(0.16,1,0.3,1)]

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary-action/35

                ${
                  active
                    ? `
                      border-black/[0.06]

                      bg-white

                      text-black

                      shadow-[0_8px_24px_-14px_rgba(0,0,0,0.22)]
                    `
                    : `
                      border-transparent

                      text-black/60

                      hover:-translate-y-[2px]
                      hover:border-black/[0.055]
                      hover:bg-white
                      hover:text-black

                      hover:shadow-[0_12px_28px_-16px_rgba(0,0,0,0.18)]
                    `
                }
              `}
            >
              {/* Very soft hover wash */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none

                  absolute inset-0

                  bg-linear-to-r
                  from-primary-action/[0.055]
                  to-digital/[0.035]

                  opacity-0

                  transition-opacity
                  duration-300

                  group-hover/item:opacity-100
                "
              />

              {/* LEFT SIDE */}
              <span
                className="
                  relative z-10

                  flex items-center
                  gap-3
                "
              >
                {/* Elegant accent */}
                <span
                  className={`
                    h-7 w-[3px]

                    rounded-full

                    transition-all
                    duration-300

                    ${
                      active
                        ? `
                          bg-linear-to-b
                          from-primary-action
                          to-digital
                        `
                        : `
                          bg-black/[0.08]

                          group-hover/item:bg-linear-to-b
                          group-hover/item:from-primary-action
                          group-hover/item:to-digital
                        `
                    }
                  `}
                />

                <span
                  className={`
                    text-[14px]

                    transition-all
                    duration-300

                    ${
                      active
                        ? "font-semibold"
                        : "font-medium"
                    }
                  `}
                >
                  {text}
                </span>
              </span>

              {/* RIGHT ARROW BUTTON */}
              <span
                className={`
                  relative z-10

                  flex h-8 w-8
                  shrink-0
                  items-center
                  justify-center

                  rounded-full

                  border

                  transition-all
                  duration-300

                  ${
                    active
                      ? `
                        border-black/[0.06]
                        bg-black/[0.035]

                        text-black
                      `
                      : `
                        border-transparent

                        text-black/25

                        group-hover/item:border-black/[0.06]
                        group-hover/item:bg-black/[0.035]
                        group-hover/item:text-black
                      `
                  }
                `}
              >
                <ArrowRight
                  aria-hidden="true"
                  size={14}
                  strokeWidth={1.8}
                  className="
                    -translate-x-[1px]

                    transition-transform
                    duration-300

                    group-hover/item:translate-x-[1px]
                  "
                />
              </span>

              {/* Active subtle bottom glow */}
              {active && (
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none

                    absolute
                    inset-x-5
                    bottom-0

                    h-px

                    bg-linear-to-r
                    from-transparent
                    via-primary-action/50
                    to-transparent
                  "
                />
              )}
            </Link>
          </li>
        )
      })}
    </ul>

    {/* --------------------------------------------------
        BOTTOM DETAIL
    -------------------------------------------------- */}

    <div
      aria-hidden="true"
      className="
        relative

        mx-4 mt-2

        h-px

        bg-linear-to-r
        from-transparent
        via-black/[0.055]
        to-transparent
      "
    />
  </div>
</div>
                  </li>
                );
              }

              // =============================================
              // NORMAL DESKTOP NAV LINK
              // =============================================

              return (
                <li key={url} className="group relative py-2">
                  <Link
                    href={url}
                    className={`
                      relative
                      rounded-md

                      tracking-[0.01em]

                      transition-colors
                      duration-200

                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-primary-action/50

                      ${
                        isActive(url)
                          ? "text-white"
                          : "text-white/75 hover:text-white"
                      }
                    `}
                  >
                    {text}
                  </Link>

                  {/* Animated underline */}

                  <span
                    aria-hidden="true"
                    className={`
                      pointer-events-none

                      absolute
                      -bottom-0.5
                      left-1/2

                      h-[2px]

                      -translate-x-1/2

                      rounded-full

                      bg-gradient-to-r
                      from-primary-action
                      to-digital

                      transition-all
                      duration-300

                      group-hover:w-full
                      group-hover:opacity-100

                      ${isActive(url) ? "w-full opacity-100" : "w-4 opacity-0"}
                    `}
                  />
                </li>
              );
            })}
          </ul>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="flex items-center gap-4">
            {/* CTA */}

            <div className="group/cta relative hidden lg:block">
              {/* Soft CTA Glow */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-x-2
                  -bottom-1
                  -z-10

                  h-full

                  rounded-full

                  bg-gradient-to-r
                  from-primary-action
                  to-digital

                  opacity-0
                  blur-xl

                  transition-opacity
                  duration-300

                  group-hover/cta:opacity-40
                "
              />

              <div
                className="
                  transition-transform
                  duration-300
                  group-hover/cta:-translate-y-px
                "
              >
                <LinkButton
                  href="tel:+919650691250"
                  className="
                    bg-gradient-to-r
                    from-primary-action
                    to-digital

                    shadow-[0_8px_25px_-12px_rgba(0,0,0,0.5)]
                  "
                >
                  Connect now
                </LinkButton>
              </div>
            </div>

            {/* Mobile Burger */}

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              aria-controls="mobile-nav-panel"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="
                flex
                h-10 w-10
                items-center
                justify-center

                rounded-xl

                border
                border-white/10

                bg-white/[0.05]

                text-white

                backdrop-blur-md

                transition-all
                duration-200

                hover:border-white/20
                hover:bg-white/[0.1]

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary-action/60

                lg:hidden
              "
            >
              <span
                className={`
                  transition-transform
                  duration-200

                  ${isOpen ? "rotate-90" : "rotate-0"}
                `}
              >
                {isOpen ? <X size={21} /> : <Menu size={21} />}
              </span>
            </button>
          </div>
        </nav>

        {/* =================================================
            HEADER BOTTOM LINE
        ================================================= */}

        <div
          aria-hidden="true"
          className={`
            pointer-events-none

            absolute
            inset-x-0
            bottom-0

            h-px

            bg-gradient-to-r
            from-transparent
            via-white/15
            to-transparent

            transition-opacity
            duration-500

            ${isHeaderGlassy ? "opacity-100" : "opacity-0"}
          `}
        />
      </header>

      {/* =====================================================
          MOBILE BACKDROP
      ===================================================== */}

      <div
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        className={`
          fixed
          inset-0
          z-30

          bg-black/45

          backdrop-blur-[3px]

          transition-opacity
          duration-300

          motion-reduce:transition-none

          lg:hidden

          ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
      />

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <div
        id="mobile-nav-panel"
        className={`
          fixed
          inset-x-3
          top-[88px]
          z-40

          overflow-hidden

          rounded-2xl

          border
          border-white/[0.08]

          bg-primary/95

          shadow-[0_25px_70px_-25px_rgba(0,0,0,0.75)]

          backdrop-blur-2xl

          transition-all
          duration-300

          motion-reduce:transition-none

          lg:hidden

          ${
            isOpen
              ? `
                visible
                translate-y-0
                opacity-100
              `
              : `
                pointer-events-none
                invisible
                -translate-y-3
                opacity-0
              `
          }
        `}
      >
        {/* Mobile decorative glow */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0

            bg-gradient-to-br
            from-primary-action/[0.06]
            via-transparent
            to-digital/[0.06]
          "
        />

        <ul
          className="
            container
            relative

            flex
            max-h-[78vh]
            flex-col

            gap-1

            overflow-y-auto

            p-3

            font-medium
            capitalize
          "
        >
          {navbarData.map(({ url, text, items }, idx) => {
            const rowAnim = `
                transition-all
                duration-300
                motion-reduce:transition-none

                ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-2 opacity-0"
                }
              `;

            const rowDelay = {
              transitionDelay: isOpen ? `${idx * 40}ms` : "0ms",
            };

            // ============================================
            // MOBILE DROPDOWN
            // ============================================

            if (items) {
              const isGroupOpen = openMobileGroup === url;

              const groupActive =
                isActive(url) || items.some((item) => isActive(item.url));

              return (
                <li
                  key={url}
                  style={rowDelay}
                  className={`
                      border-b
                      border-white/[0.06]

                      last:border-none

                      ${rowAnim}
                    `}
                >
                  <button
                    type="button"
                    onClick={() => setOpenMobileGroup(isGroupOpen ? null : url)}
                    aria-expanded={isGroupOpen}
                    className={`
                        flex w-full
                        items-center
                        justify-between

                        rounded-xl

                        px-3 py-3.5

                        transition-colors
                        duration-200

                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-primary-action/50

                        ${groupActive ? "text-white" : "text-white/75"}

                        ${
                          isGroupOpen
                            ? "bg-white/[0.06]"
                            : "hover:bg-white/[0.04]"
                        }
                      `}
                  >
                    <span>{text}</span>

                    <span
                      className={`
                          flex h-7 w-7
                          items-center
                          justify-center

                          rounded-lg

                          bg-white/[0.05]

                          transition-all
                          duration-200

                          ${isGroupOpen ? "bg-white/[0.08]" : ""}
                        `}
                    >
                      <ChevronDown
                        size={16}
                        strokeWidth={1.8}
                        className={`
                            text-white/55

                            transition-transform
                            duration-200

                            ${isGroupOpen ? "rotate-180" : ""}
                          `}
                      />
                    </span>
                  </button>

                  {/* Accordion Content */}

                  <div
                    className={`
                        overflow-hidden

                        transition-all
                        duration-300

                        motion-reduce:transition-none

                        ${
                          isGroupOpen
                            ? "max-h-80 opacity-100"
                            : "max-h-0 opacity-0"
                        }
                      `}
                  >
                    <ul className="flex flex-col gap-1 px-2 pb-3 pt-1">
                      {items.map(({ url: itemUrl, text: itemText }) => (
                        <li key={itemUrl}>
                          <Link
                            href={itemUrl}
                            onClick={() => setIsOpen(false)}
                            aria-current={
                              isActive(itemUrl) ? "page" : undefined
                            }
                            className={`
                                  flex
                                  items-center
                                  justify-between

                                  rounded-xl

                                  px-3 py-3

                                  text-[14px]

                                  transition-all
                                  duration-200

                                  focus-visible:outline-none
                                  focus-visible:ring-2
                                  focus-visible:ring-primary-action/50

                                  ${
                                    isActive(itemUrl)
                                      ? `
                                        bg-gradient-to-r
                                        from-primary-action/15
                                        to-digital/10

                                        font-medium
                                        text-white
                                      `
                                      : `
                                        text-white/55
                                        hover:bg-white/[0.04]
                                        hover:text-white
                                      `
                                  }
                                `}
                          >
                            {itemText}

                            <ArrowRight
                              size={15}
                              className="
                                    text-primary-action/80
                                  "
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            }

            // ============================================
            // MOBILE NORMAL LINK
            // ============================================

            return (
              <li
                key={url}
                style={rowDelay}
                className={`
                    border-b
                    border-white/[0.06]

                    last:border-none

                    ${rowAnim}
                  `}
              >
                <Link
                  href={url}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive(url) ? "page" : undefined}
                  className={`
                      flex
                      items-center
                      justify-between

                      rounded-xl

                      px-3 py-3.5

                      transition-all
                      duration-200

                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-primary-action/50

                      ${
                        isActive(url)
                          ? `
                            bg-white/[0.06]
                            text-white
                          `
                          : `
                            text-white/65
                            hover:bg-white/[0.04]
                            hover:text-white
                          `
                      }
                    `}
                >
                  {text}

                  {isActive(url) && (
                    <span
                      aria-hidden="true"
                      className="
                          h-1.5 w-1.5
                          rounded-full
                          bg-primary-action
                        "
                    />
                  )}
                </Link>
              </li>
            );
          })}

          {/* Mobile CTA */}

          <li
            style={{
              transitionDelay: isOpen ? `${navbarData.length * 40}ms` : "0ms",
            }}
            className={`
              pt-3

              transition-all
              duration-300

              motion-reduce:transition-none

              ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-2 opacity-0"
              }
            `}
          >
            <LinkButton
              href="tel:+919650691250"
              className="
                w-full
                justify-center

                bg-gradient-to-r
                from-primary-action
                to-digital
              "
            >
              Connect now
            </LinkButton>
          </li>
        </ul>
      </div>
    </>
  );
}
