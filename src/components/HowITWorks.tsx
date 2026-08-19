import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Step {
  number: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Search",
    description:
      "Enter your symptoms, specialty, doctor name and location to find the care you need.",
  },
  {
    number: "02",
    title: "Compare",
    description:
      "Review verified doctors, patient ratings, availability and accepted insurance.",
  },
  {
    number: "03",
    title: "Book",
    description:
      "Choose a convenient time and receive instant confirmation of your appointment.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const heading = section.querySelector(
        ".how-heading"
      ) as HTMLElement | null;

      const stepCards = gsap.utils.toArray<HTMLElement>(
        ".how-step",
        section
      );

      const supportingText = section.querySelector(
        ".how-supporting"
      ) as HTMLElement | null;

      if (!heading || !supportingText || stepCards.length === 0) {
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set(
          [heading, ...stepCards, supportingText],
          {
            clearProps: "all",
          }
        );

        return;
      }

      /*
       * --------------------------------
       * HEADING
       * --------------------------------
       */

      gsap.set(heading, {
        y: 40,
        opacity: 0,
      });

      gsap.to(heading, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          once: true,
        },
      });

      /*
       * --------------------------------
       * STEP CARDS
       * --------------------------------
       *
       * Each card has its own ScrollTrigger.
       *
       * This means the animation happens
       * when the user actually reaches
       * that card.
       */

      stepCards.forEach((card, index) => {
        gsap.set(card, {
          y: 50,
          opacity: 0,
        });

        gsap.to(card, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            once: true,
          },
        });
      });

      /*
       * --------------------------------
       * SUPPORTING TEXT
       * --------------------------------
       *
       * Completely independent animation.
       * It waits until the user scrolls
       * down to the paragraph.
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
      id="how-it-works"
      className="mb-32"
    >
      {/* Section Heading */}
      <div className="how-heading flex justify-start pr-4 md:justify-end md:pr-12 lg:pr-40">
        <h2 className="heading md:text-right">
          Find Care In Three Simple <br />
          Steps
        </h2>
      </div>

      {/* Mobile Steps */}
      <div className="mt-10 grid grid-cols-2 md:hidden">
        <div className="flex items-center justify-center">
          <StepCard
            step={STEPS[0]}
            variant="mobile"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-20">
          <StepCard
            step={STEPS[1]}
            variant="mobile"
          />

          <StepCard
            step={STEPS[2]}
            variant="mobile"
          />
        </div>
      </div>

      {/* Desktop Steps */}
      <div className="hidden justify-between md:mx-15 md:flex lg:mx-40">
        {STEPS.map((step, index) => (
          <StepCard
            key={step.number}
            step={step}
            variant="desktop"
            index={index}
          />
        ))}
      </div>

      {/* Supporting Statement */}
      <div className="how-supporting mt-16 flex justify-start pl-4 md:pl-15 lg:mt-16 lg:pl-40">
        <p className="sub-heading text-left">
          From finding the right provider to booking your visit,
          <br className="hidden md:block"/>
          without unnecessary steps.
        </p>
      </div>
    </section>
  );
}

interface StepCardProps {
  step: Step;
  variant: "mobile" | "desktop";
  index?: number;
}

function StepCard({
  step,
  variant,
  index = 0,
}: StepCardProps) {
  if (variant === "mobile") {
    return (
      <article
        className="
          how-step
          flex h-[250px] w-full max-w-[200px]
          flex-col justify-center
          gap-2 rounded-[15px]
          border-2 border-neutral-300
          bg-primary-900 p-5 text-inverse
          shadow-sm
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:shadow-lg
        "
      >
        <p className="text-[18px] font-bold leading-tight text-neutral-400">
          {step.number}
        </p>

        <h3 className="text-[18px] font-medium leading-tight">
          {step.title}
        </h3>

        <p className="text-[12px] leading-5">
          {step.description}
        </p>
      </article>
    );
  }

  const verticalOffset =
    index === 0
      ? "mt-10"
      : index === 1
        ? "mt-30 lg:mt-40"
        : "mt-50 lg:mt-80";

  return (
    <article
      className={`
        how-step
        flex h-[350px] w-full max-w-[225px]
        flex-col items-start justify-center
        gap-4 rounded-[15px]
        border-2 border-neutral-300
        bg-primary-900 p-5 text-inverse
        shadow-sm
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:shadow-lg
        lg:max-w-[350px]
        ${verticalOffset}
      `}
    >
      <p className="text-[36px] font-bold leading-tight text-neutral-400">
        {step.number}
      </p>

      <h3 className="text-[24px] font-medium leading-tight">
        {step.title}
      </h3>

      <p className="text-[20px] leading-7">
        {step.description}
      </p>
    </article>
  );
}