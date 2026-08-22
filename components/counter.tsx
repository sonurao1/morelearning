"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

// GSAP imports
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins once at module level
gsap.registerPlugin(useGSAP, ScrollTrigger);

// Props type for the component
type CounterProps = React.ComponentPropsWithoutRef<"h3">;

export default function Counter({ children, className }: CounterProps) {
  // Ref to the DOM element that displays the counter value
  const counterRef = useRef<HTMLSpanElement>(null);

  // Animate counter value from 0 to target when element scrolls into view
  useGSAP(() => {
    gsap.to(counterRef.current, {
      duration: 3.5,
      ease: "power1.in",
      textContent: children,
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: counterRef.current,
        start: "top 90%",
        once: true,
      },
    });
  }, [children]);

  return (
    <h3 className={className}>
      <span ref={counterRef} className="will-change-contents">
        0
      </span>
      +
    </h3>
  );
}
