import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Mobile browsers show/hide their address bar while scrolling, which fires
// resize events and makes ScrollTrigger recalculate start/end positions
// mid-scroll — the trigger line visibly drifts as a result. Tell it to
// ignore that specific class of resize.
ScrollTrigger.config({ ignoreMobileResize: true });

type UseTextFadeInOptions = {
  duration?: number;
  y?: number;
  delay?: number;
  stagger?: {each: number; from?: "start" | "center" | "end" | number };
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
  stagger = { each: 0.15, from: "start" },
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

      console.log(containerRef.current)

      const elements = containerRef.current.querySelectorAll("[data-fade]");
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

      // Images and swapped-in web fonts can finish settling the layout
      // after this already ran, pushing every section below further down
      // than what was just measured. Re-measure once things have actually
      // finished loading so start positions match reality.
      if (scrollTrigger) {
        const refresh = () => ScrollTrigger.refresh();
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