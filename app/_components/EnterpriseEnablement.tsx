"use client";

import Image from "next/image";
import LinkButton from "@/components/ui/link-button";
import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useTextFadeIn } from "@/libs/text-fade";

gsap.registerPlugin(ScrollTrigger);

export default function EnterpriseEnablement() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const bufferRef = useRef<HTMLDivElement | null>(null);
  const littleNotesRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      bufferRef.current,
      { y: -50 },
      {
        y: 200,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    gsap.from(
       littleNotesRef.current,
       {
        y:50,
        duration:.8,
        opacity:0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: littleNotesRef.current,
          start: "top bottom",
        //   end: "bottom bottom",
          // markers:true,
        },
       } 
    )


  }, []);

    const fadeRef = useTextFadeIn({
    duration: 1.5,
    y: 40,
    delay: 0.2,
    stagger: 0.1,
    blur: 12,
    scrollTrigger: true,
    top: "top 70%",
  });

  return (
    <section className="w-full bg-white px-4 py-16 md:py-24" >
      <div
        ref={fadeRef}
        className="container mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20"
      >
        {/* Image */}
        
        <div className="relative">
            <div
          ref={wrapperRef}
          className="relative h-[550px] w-full overflow-hidden rounded-2xl border md:h-[750px]"
        >
          {/* buffer div: har taraf 240px bada hai visible frame se.
              RULE: yeh inset value hamesha >= sabse bada |y| jo GSAP tween mein use ho raha hai.
              abhi range hai -50 se 200 -> max abs value = 200 -> 240px buffer (40px safety margin) */}
          <div
            ref={bufferRef}
            className="absolute -top-[100px] -bottom-[0px] md:-top-[100px] md:-bottom-[140px] left-0 right-0 will-change-transform"
          >
            <Image
              src="/images/EnterpriseEnablement.jpg"
              fill
              alt="Enterprise enablement"
              className="object-cover object-center"
            />
          </div>
          
         
        </div>
             {/* little Notes on image bottom */}
          <div className="w-55 bg-white text-secondary-text absolute -bottom-5 -right-5 hidden  md:flex flex-col p-4 rounded-2xl shadow-2xl shadow-digital/50  " ref={littleNotesRef}>
            <h1 className="text-primary-action font-bold text-2xl">13+</h1>
            <p className="text-[14px]">Years partnering with global enterprises</p>
          </div>
        </div>

        {/* Content */}
        <div className="flex h-full flex-col gap-6" >
          <h2
            className="opacity-0 blur-md scale-95 text-[13px] font-bold text-primary-action md:text-xl"
            data-fade
          >
            Your Enterprise Enablement Partner
          </h2>

          <h1
            className="opacity-0 blur-md scale-95 w-[90%] text-3xl font-bold text-primary md:text-5xl"
            data-fade
          >
            Beyond Learning. Beyond Content. Built for Enterprise.
          </h1>

          <p 
          className="text-secondary-text"
          data-fade
          >
            Organizations today need more than courses—they need a partner
            who can transform complex knowledge into engaging experiences
            that educate, influence, and drive action.
          </p>

          <p 
          className="text-secondary-text"
          data-fade
          >
            At MoreLearning, we combine learning strategy, visual
            communication, interactive technologies, and AI-powered
            experiences to help enterprises build a more knowledgeable
            workforce, empower sales teams, simplify technical concepts,
            and accelerate organizational performance.
          </p>

          <p
            className="opacity-0 blur-md scale-95 text-secondary-text"
            data-fade
          >
            From executive presentations and immersive product demonstrations
            to large-scale learning programs, simulations, videos, and
            interactive digital experiences, we create solutions that make
            information easier to understand, retain, and apply.
          </p>

          <p
            className="opacity-0 blur-md scale-95 text-secondary-text"
            data-fade
          >
            Whether you're launching a new product, training thousands of
            employees, enabling channel partners, or communicating strategic
            initiatives, our multidisciplinary team delivers everything
            under one roof—from strategy and instructional design to creative
            production and technology implementation.
          </p>

          <div className="pt-2">
            <LinkButton
              href="#"
              className="group inline-flex w-fit items-center gap-3 rounded-md bg-gradient-to-r from-primary-action to-digital px-6 py-3.5 text-sm font-semibold tracking-wide text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:shadow-lg hover:shadow-primary-action/20 active:translate-y-0 active:scale-[0.98]"
            >
              Talk to Our Team
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}