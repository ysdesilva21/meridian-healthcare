import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQRowProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

interface FAQSectionProps {
  singleOpen?: boolean;
}

const FAQS: FAQItem[] = [
  {
    id: "01",
    question: "What is Meridian Health?",
    answer:
      "Meridian helps you find verified doctors and book healthcare appointments online with confidence.",
  },
  {
    id: "02",
    question: "Are all doctors verified?",
    answer:
      "We connect you with verified healthcare professionals you can trust.",
  },
  {
    id: "03",
    question: "How quickly can I get an appointment?",
    answer:
      "View real-time availability and book appointments with providers offering convenient time slots.",
  },
  {
    id: "04",
    question: "Is my health information secure?",
    answer:
      "Your personal information is protected through secure systems and privacy-focused practices.",
  },
  {
    id: "05",
    question: "How do I find the right doctor?",
    answer:
      "Search by specialty, symptoms, location, or insurance to find the right provider for your needs.",
  },
  {
    id: "06",
    question: "Can I use my insurance?",
    answer:
      "Filter providers by accepted insurance plans to find care that fits your coverage.",
  },
  {
    id: "07",
    question: "Can I reschedule my appointment?",
    answer:
      "Yes, you can reschedule or cancel your appointment online at any time before it's confirmed.",
  },
];

/* --------------------------------
   FAQ Row
--------------------------------- */

function FAQRow({
  item,
  isOpen,
  onToggle,
}: FAQRowProps) {
  const answerId = `faq-answer-${item.id}`;

  return (
    <div className="faq-row border-b border-neutral-400 py-4 sm:py-5">
      <button
        type="button"
        aria-controls={answerId}
        aria-expanded={isOpen}
        onClick={onToggle}
        className="
          flex w-full items-start justify-between
          gap-3 rounded-lg text-left
          transition-colors duration-200 ease-out
          hover:bg-neutral-300/40
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-primary
          focus-visible:ring-offset-2
        "
      >
        <span className="flex items-start gap-2 sm:gap-3">
          <span className="text-base text-primary sm:text-base md:text-[24px]">
            {item.id}.
          </span>

          <span className="text-base text-primary sm:text-base md:text-[20px]">
            {item.question}
          </span>
        </span>

        <ChevronDown
          aria-hidden="true"
          className={`
            mt-0.5 h-4 w-4 shrink-0 text-secondary
            transition-transform duration-300 ease-out
            sm:h-5 sm:w-5
            ${isOpen ? "rotate-180" : ""}
          `}
        />
      </button>

      {/* Answer */}
      <div
        id={answerId}
        className={`
          grid transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="overflow-hidden">
          <p className="pl-5 pr-6 pt-1.5 text-xs leading-relaxed text-slate-500 sm:pl-7 sm:pt-2 sm:text-sm">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------
   FAQ Section
--------------------------------- */

export default function FAQSection({
  singleOpen = true,
}: FAQSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const [openIds, setOpenIds] = useState<Set<string>>(
    new Set(["01"])
  );

  /* --------------------------------
     Accordion
  --------------------------------- */

  const toggle = (id: string) => {
    setOpenIds((previous) => {
      const next = new Set(
        singleOpen ? [] : previous
      );

      if (previous.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  };

  /* --------------------------------
     GSAP Scroll Animation
  --------------------------------- */

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const heading = section.querySelector(".faq-heading");
      const subtitle = section.querySelector(".faq-subtitle");
      const rows = gsap.utils.toArray<HTMLElement>(
        ".faq-row",
        section
      );

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set(
          [heading, subtitle, ...rows],
          {
            clearProps: "all",
          }
        );

        return;
      }

      /* Initial states */

      gsap.set(heading, {
        y: 40,
        opacity: 0,
      });

      gsap.set(subtitle, {
        y: 25,
        opacity: 0,
      });

      gsap.set(rows, {
        y: 35,
        opacity: 0,
      });

      /* Timeline */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });

      /* 1. Heading */

      timeline.to(heading, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      });

      /* 2. Subtitle */

      timeline.to(
        subtitle,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.35"
      );

      /* 3. FAQ rows one-by-one */

      timeline.to(
        rows,
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.12,
          ease: "power3.out",
        },
        "+=0.25"
      );
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="
        w-full px-4 py-10
        sm:px-6 sm:py-14
        lg:px-8 lg:py-16
      "
    >
      <div
        className="
          mx-auto max-w-2xl
          rounded-2xl
          border border-neutral-300
          bg-white
          px-5 py-8
          sm:px-8 sm:py-10
          lg:px-10 lg:py-12
        "
      >
        {/* Heading */}
        <div className="text-center">
          <h2 className="faq-heading heading">
            Frequently Asked
            <br />
            Questions
          </h2>

          <p className="faq-subtitle mx-auto mt-6 sub-heading">
            Everything you need to know before finding your next{" "}
            <br />
            healthcare provider.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-6 sm:mt-8">
          {FAQS.map((item) => (
            <FAQRow
              key={item.id}
              item={item}
              isOpen={openIds.has(item.id)}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}