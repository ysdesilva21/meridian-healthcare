import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import mockup from "../assets/mockups/mockup2.webp";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const container = section.querySelector(".cta-container");
      const content = section.querySelector(".cta-content");
      const buttons = section.querySelector(".cta-buttons");
      const mockupElement = section.querySelector(".cta-mockup");

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set(
          [container, content, buttons, mockupElement],
          {
            clearProps: "all",
          }
        );

        return;
      }

      /*
       * Initial states
       */

      gsap.set(container, {
        y: 50,
        opacity: 0,
      });

      gsap.set(content, {
        y: 25,
        opacity: 0,
      });

      gsap.set(buttons, {
        y: 20,
        opacity: 0,
      });

      /*
       * IMPORTANT:
       * No scale is applied to the mockup.
       * Its existing width/height remain unchanged.
       */

      gsap.set(mockupElement, {
        x: 80,
        opacity: 0,
      });

      /*
       * Scroll-triggered animation
       */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });

      // 1. CTA container
      timeline.to(container, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      });

      // 2. Text content
      timeline.to(
        content,
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          ease: "power3.out",
        },
        "-=0.25"
      );

      // 3. Buttons
      timeline.to(
        buttons,
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power3.out",
        },
        "-=0.25"
      );

      // 4. Mockup
      // Slides in without scaling.
      timeline.to(
        mockupElement,
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.35"
      );
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      id="book-appointment"
      className="w-full px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-32"
    >
      <div
        className="
          cta-container
          relative mx-auto max-w-6xl
          rounded-3xl bg-neutral-200
          shadow-md
        "
      >
        <div
          className="
            relative flex flex-col items-center
            gap-8 px-6 py-10

            sm:flex-row
            sm:justify-between
            sm:gap-6
            sm:px-10 sm:py-12

            lg:px-14 lg:py-0
          "
        >
          {/* CTA Content */}
          <div className="cta-content text-center sm:text-left">
            <h2 className="heading">
              Ready to Take Control
              <br />
              of Your Healthcare?
            </h2>

            <p className="mt-6 sub-heading">
              Find verified doctors, compare providers, and book
              appointments in minutes, whether you're at home or on the go.
            </p>

            {/* CTA Buttons */}
            <div
              className="
                cta-buttons
                mt-8 flex flex-wrap justify-center gap-3
                sm:justify-start
              "
            >
              <button
                type="button"
                className="
                  button
                  transition-all duration-200 ease-out
                  hover:-translate-y-0.5
                  hover:shadow-md
                  active:translate-y-0
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary
                  focus-visible:ring-offset-2
                "
              >
                Book appointment
              </button>

              <button
                type="button"
                className="
                  sec-button
                  transition-all duration-200 ease-out
                  hover:-translate-y-0.5
                  hover:shadow-sm
                  active:translate-y-0
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary
                  focus-visible:ring-offset-2
                "
              >
                Download App
              </button>
            </div>
          </div>

          {/* Product Mockup */}
          <div className="cta-mockup">
            <img
              src={mockup}
              alt=""
              className="h-auto w-125"
            />
          </div>
        </div>
      </div>
    </section>
  );
}