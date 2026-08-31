import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Mobile browsers show/hide their address bar while scrolling,
// which can fire resize events and make ScrollTrigger recalculate
// start/end positions mid-scroll.
ScrollTrigger.config({
  ignoreMobileResize: true,
});

type UseTextFadeInOptions = {
  duration?: number;
  y?: number;
  delay?: number;

  // Supports both:
  // stagger: 0.1
  //
  // and:
  // stagger: {
  //   each: 0.1,
  //   from: "start"
  // }
  stagger?:
    | number
    | {
        each: number;
        from?: "start" | "center" | "end" | number;
      };

  blur?: number;
  scale?: number;
  ease?: string;
  scrollTrigger?: boolean;
  top?: string;
};

export function useTextFadeIn({
  duration = 1,
  y = 40,
  delay = 0,

  // Keep your object as the default
  stagger = {
    each: 0.15,
    from: "start",
  },

  blur = 12,
  scale = 0.95,
  ease = "elastic.out(1, 0.5)",
  scrollTrigger = false,
  top = "top",
}: UseTextFadeInOptions = {}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const elements =
        containerRef.current.querySelectorAll("[data-fade]");

      if (!elements.length) return;

      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y,
          scale,
          filter: `blur(${blur}px)`,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration,
          delay,

          // Works with both number and object
          stagger,

          ease,

          scrollTrigger: scrollTrigger
            ? {
                trigger: containerRef.current,
                start: top,
              }
            : undefined,
        }
      );

      // Refresh ScrollTrigger after images/fonts have finished loading.
      if (scrollTrigger) {
        const refresh = () => {
          ScrollTrigger.refresh();
        };

        window.addEventListener("load", refresh);

        document.fonts?.ready?.then(refresh);

        return () => {
          window.removeEventListener("load", refresh);
        };
      }
    },
    {
      scope: containerRef,
    }
  );

  return containerRef;
}