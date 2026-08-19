import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import mockup from "../assets/mockups/Feature Mockup Mobile.webp";
import F01 from "../assets/features/F01.webp";
import F02 from "../assets/features/F02.webp";
import F03 from "../assets/features/F03.webp";
import F04 from "../assets/features/F04.webp";

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  img: string;
  head: string;
  tagline: string;
  alt: string;
}

const FEATURES: Feature[] = [
  {
    img: F01,
    head: "Book In Minutes",
    tagline:
      "See real time availability & confirm\nyour appointment online without phone calls.",
    alt: "Online appointment booking interface",
  },
  {
    img: F02,
    head: "Verified Healthcare\nProfessionals",
    tagline:
      "You can book with confidence\nknowing you're in trusted hands.",
    alt: "Verified healthcare professional icon",
  },
  {
    img: F03,
    head: "Real Time Availability",
    tagline:
      "See live appointment slots before\nyou book, no waiting for callbacks.",
    alt: "Real-time appointment availability icon",
  },
  {
    img: F04,
    head: "Insurance Made Simple",
    tagline:
      "Filter doctors by accepted insurance\nplans to avoid unexpected costs.",
    alt: "Healthcare insurance icon",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const heading = section.querySelector(
        ".features-heading"
      ) as HTMLElement | null;

      const mockupElement = section.querySelector(
        ".features-mockup"
      ) as HTMLElement | null;

      const cards = gsap.utils.toArray<HTMLElement>(
        ".feature-card",
        section
      );

      const supportingText = section.querySelector(
        ".features-supporting"
      ) as HTMLElement | null;

      if (
        !heading ||
        !mockupElement ||
        !supportingText ||
        cards.length === 0
      ) {
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set(
          [heading, mockupElement, ...cards, supportingText],
          {
            clearProps: "all",
          }
        );

        return;
      }

      /*
       * --------------------------------
       * MAIN FEATURES ANIMATION
       * --------------------------------
       */

      gsap.set(heading, {
        y: 40,
        opacity: 0,
      });

      gsap.set(mockupElement, {
        y: 50,
        scale: 0.94,
        opacity: 0,
      });

      gsap.set(cards, {
        y: 45,
        opacity: 0,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });

      // 1. Heading
      timeline.to(heading, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      });

      // Small pause
      timeline.to({}, {
        duration: 0.15,
      });

      // 2. Mockup
      timeline.to(mockupElement, {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1.1,
        ease: "power3.out",
      });

      // Let mockup settle
      timeline.to({}, {
        duration: 0.3,
      });

      // 3. Cards
      timeline.to(cards, {
        y: 0,
        opacity: 1,
        duration: 0.65,
        stagger: 0.2,
        ease: "power3.out",
      });

      /*
       * --------------------------------
       * SUPPORTING TEXT ANIMATION
       * --------------------------------
       */

      gsap.set(supportingText, {
        y: 35,
        opacity: 0,
      });

      gsap.to(supportingText, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: supportingText,
          start: "top 85%",
          once: true,
        },
      });
    },
    {
      scope: sectionRef,
  });

  return (
    <section
      ref={sectionRef}
      id="why-meridian"
      className="relative mx-auto mb-32 w-full max-w-[700px] overflow-hidden xl:max-w-[1200px]"
    >
      {/* Section Heading */}
      <div>
        <h2 className="features-heading heading self-start">
          Why Patients Choose <br />
          Meridian
        </h2>
      </div>

      {/* Central Mockup */}
      <div
        className="
          features-mockup
          absolute
          inset-x-0
          mt-16
          flex
          w-full
          justify-center
          md:mt-32
        "
      >
        <img
          src={mockup}
          alt="Meridian healthcare booking interface"
          className="
            h-auto
            w-[260px]
            max-w-none
            md:w-[300px]
            lg:w-auto
          "
        />
      </div>

      {/* Feature Cards */}
      <div
        className="
          relative
          z-50
          mx-auto
          flex
          max-w-[1024px]
          flex-col
          items-center
          py-32
          md:py-[184px]
          lg:py-64
        "
      >
        {FEATURES.map((item, index) => {
          const isRight = index % 2 === 0;
          const isFirstRow = index < 2;

          return (
            <div
              key={item.head}
              className={`
                feature-card
                flex
                h-[75px]
                w-full
                max-w-[225px]
                items-center
                gap-3.5
                rounded-[15px]
                bg-neutral-400
                px-3
                py-2
                text-primary
                shadow-sm
                transition-all
                duration-300
                ease-out
                hover:-translate-y-1
                hover:shadow-lg

                md:h-[80px]
                md:max-w-[250px]

                lg:h-[124px]
                lg:max-w-[400px]
                lg:gap-5
                lg:rounded-[30px]

                ${
                  isRight
                    ? "mr-5 self-end md:mr-20 lg:mr-8"
                    : "ml-5 self-start md:ml-20 lg:ml-8"
                }

                ${
                  isFirstRow
                    ? "mt-5"
                    : "mt-5 md:mt-15 lg:mt-10"
                }
              `}
            >
              <img
                src={item.img}
                alt={item.alt}
                className="h-10 w-auto shrink-0 lg:h-auto"
              />

              <div className="flex flex-col lg:gap-2.5">
                <p className="whitespace-pre-line text-[12px] font-medium leading-tight lg:text-[20px]">
                  {item.head}
                </p>

                <p className="whitespace-pre-line text-[8px] leading-4 lg:text-[14px] lg:leading-5">
                  {item.tagline}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Supporting Statement */}
      <div className="features-supporting flex justify-end pr-4">
        <p className="sub-heading text-right">
          Everything you need to find trusted <br />
          care with less friction
        </p>
      </div>
    </section>
  );
}