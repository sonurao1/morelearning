"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Poore app ke liye smooth scrolling — sirf ek jagah mount hota hai
 * (app/layout.tsx mein, Header/Footer/{children} ke around).
 *
 * `root` mode use kar rahe hain, matlab Lenis <html> ke real/native scroll
 * ko hi control karta hai — koi extra wrapper <div> nahi banta. Isliye
 * Header agar `position: sticky` ya `fixed` hai to wo bilkul waisa hi
 * behave karega jaisa Lenis ke bina karta tha.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    // --- Bug jo Lenis add karte hi aata: GSAP animations jittery ho jaana ---
    // Lenis aur GSAP dono apna-apna alag requestAnimationFrame loop chalate
    // hain by default. Do alag loops kabhi bhi ek hi frame pe fire nahi hote,
    // to Capabilities.tsx ka pinned horizontal-scroll section aur
    // EnterpriseEnablement.tsx ka parallax image ek frame "peeche" chalte hain
    // — yahi wo jitter/stutter hai jo Lenis add karte hi dikhta.
    //
    // Fix: Lenis ka apna raf loop band karo (neeche options.autoRaf: false)
    // aur GSAP ke ticker se hi Lenis ko drive karo. Ab dono exact same frame
    // pe update hote hain.
    function update(time: number) {
      // gsap.ticker time SECONDS mein deta hai, Lenis.raf() ko MS chahiye
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0); // tab switch karke wapas aane pe scroll "jump" nahi karega

    const lenis = lenisRef.current?.lenis;

    // Lenis jab bhi scroll position badle, usi frame mein ScrollTrigger ko
    // bhi bata do. Isके bina scrub:true / pin:true wale sections (Capabilities,
    // EnterpriseEnablement) ek frame lag ke saath update hote — wahi "laggy"
    // feel jo smooth-scroll libraries ke saath common bug hai.
    lenis?.on("scroll", ScrollTrigger.update);

    // --- Doosra bug: page height badalne par Lenis aur ScrollTrigger disagree kar dete ---
    // Capabilities.tsx already ScrollTrigger.refresh() call karta hai jab
    // koi image load ho ya section resize ho (uski apni ResizeObserver hai).
    // Lekin sirf ScrollTrigger ko pata chalna kaafi nahi — Lenis ko bhi pata
    // hona chahiye ki page ki total scrollable height badal gayi, warna uska
    // internal scroll-limit purana reh jaata hai aur scroll thoda pehle hi
    // "end" pe atak jaata hai. Fix: har ScrollTrigger refresh pe Lenis.resize()
    // bhi call kar do — bina Capabilities.tsx ko chhue.
    const onRefresh = () => lenisRef.current?.lenis?.resize();
    ScrollTrigger.addEventListener("refresh", onRefresh);
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(update);
      ScrollTrigger.removeEventListener("refresh", onRefresh);
    };
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        // GSAP ka ticker hi raf drive kar raha hai (upar wala effect) —
        // isliye Lenis ka apna loop yahan zaroor band rakhna hai
        autoRaf: false,

        // --- Teesra bug (abhi hi maujood hai, Lenis se pehle bhi): ---
        // hero.tsx, CTA.tsx aur EnterpriseEnablement.tsx mein CTA buttons
        // abhi `href="#"` (placeholder, koi real target nahi) hain. Ek plain
        // `href="#"` browser se turant top pe "jump" karwata hai — jo dikhne
        // mein bhi bura lagta, aur Lenis on hone ke baad us jump se Lenis ka
        // internal scroll value real scroll se desync ho jaata (jab tak page
        // refresh na ho, momentum/smoothing tab tak ajeeb behave karta).
        // anchors: true karne se Lenis khud in `#` clicks ko intercept karke
        // apne scrollTo se smoothly (top tak) le jaata hai — jump nahi hota,
        // desync nahi hota. Aage Header mein real `href="#section-id"` nav
        // links add honge to wo bhi isi se automatically smooth-scroll
        // karenge, koi extra code nahi likhna padega.
        anchors: true,

        // Next.js client-side route change (Link se navigate) par purani
        // scroll ki momentum/inertia agli page mein carry nahi hogi
        stopInertiaOnNavigate: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
