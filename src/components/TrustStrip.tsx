import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TrustItem {
  head: string;
  tagline: string;
}

const TRUST_ITEMS: TrustItem[] = [
  {
    head: "10+ Years",
    tagline: "Connecting Patients\nWith Care",
  },
  {
    head: "24/7",
    tagline: "Secure Online\nAccess",
  },
  {
    head: "5000+",
    tagline: "Verified Healthcare\nProviders",
  },
  {
    head: "120,000+",
    tagline: "Appointments Successfully\nBooked",
  },
];

export default function Trust() {
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      /*
       * Reduced motion:
       * Show everything immediately.
       */
      if (prefersReducedMotion) {
        gsap.set(
          ".trust-desktop-bg, .trust-mobile-bg",
          { opacity: 1, y: 0 },
        );

        gsap.set(
          ".trust-desktop-item, .trust-mobile-item",
          { opacity: 1, y: 0 },
        );

        return;
      }

      /*
       * Desktop / Tablet
       * ----------------
       * Background appears only when the section
       * enters the viewport.
       */
      const desktopTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".trust-desktop",
          start: "top 80%",
          once: true,
        },
      });

      desktopTimeline
        .from(".trust-desktop-bg", {
          opacity: 0,
          y: 25,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(
          ".trust-desktop-item",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.35",
        );

      /*
       * Mobile
       * ------
       * Background/content appears only when the
       * mobile trust section enters the viewport.
       */
      const mobileTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".trust-mobile",
          start: "top 80%",
          once: true,
        },
      });

      mobileTimeline
        .from(".trust-mobile-bg", {
          opacity: 0,
          y: 25,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(
          ".trust-mobile-item",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.35",
        );
    });

    return () => ctx.revert();
  });

  return (
    <>
      {/* Desktop & Tablet Trust Strip */}
      <section className="trust-desktop hidden w-full md:block">
        <div
          className="
            trust-desktop-bg
            my-32
            min-h-[128px]
            bg-neutral-300
          "
        >
          <div className="mx-auto flex max-w-7xl items-center justify-center">
            {TRUST_ITEMS.map((item) => (
              <div
                key={item.head}
                className="
                  trust-desktop-item
                  flex flex-col gap-1
                  px-8 py-8
                  lg:gap-2.5
                  lg:px-10 lg:py-10
                "
              >
                <p
                  className="
                    self-start
                    text-[24px]
                    leading-tight
                    text-primary
                    lg:text-[32px]
                  "
                >
                  {item.head}
                </p>

                <p
                  className="
                    self-start
                    whitespace-pre-line
                    text-[12px]
                    leading-5
                    text-primary
                  "
                >
                  {item.tagline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Trust Strip */}
      <section className="trust-mobile md:hidden">
        <div
          className="
            trust-mobile-bg
            flex flex-col
            py-16
          "
        >
          {TRUST_ITEMS.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={item.head}
                className={`
                  trust-mobile-item
                  flex flex-col gap-1
                  py-4
                  ${isLeft
                    ? "self-start pl-12"
                    : "self-end pr-12"}
                `}
              >
                <p
                  className={`
                    text-[24px]
                    leading-tight
                    text-primary
                    ${isLeft
                      ? "self-start"
                      : "self-end"}
                  `}
                >
                  {item.head}
                </p>

                <p
                  className={`
                    whitespace-pre-line
                    text-[12px]
                    leading-5
                    text-primary
                    ${isLeft
                      ? "text-left"
                      : "text-right"}
                  `}
                >
                  {item.tagline}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}