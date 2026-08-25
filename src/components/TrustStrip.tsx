import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

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
  const trustRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const trust = trustRef.current;

      if (!trust) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const desktopBackground = trust.querySelector(
        ".trust-desktop-bg",
      );

      const desktopItems = trust.querySelectorAll(
        ".trust-desktop-item",
      );

      const mobileBackground = trust.querySelector(
        ".trust-mobile-bg",
      );

      const mobileItems = trust.querySelectorAll(
        ".trust-mobile-item",
      );

      /*
       * Reduced motion
       */
      if (prefersReducedMotion) {
        gsap.set(
          [
            desktopBackground,
            ...desktopItems,
            mobileBackground,
            ...mobileItems,
          ],
          {
            opacity: 1,
            y: 0,
          },
        );

        return;
      }

      /*
       * Initial state
       */
      gsap.set(
        [
          desktopBackground,
          ...desktopItems,
          mobileBackground,
          ...mobileItems,
        ],
        {
          opacity: 0,
          y: 25,
        },
      );

      /*
       * Trust animation
       */
      const timeline = gsap.timeline({
        paused: true,
      });

      timeline
        .to(
          [desktopBackground, mobileBackground],
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
        )
        .to(
          [desktopItems, mobileItems],
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.35",
        );

      /*
       * Trigger only when Trust actually
       * enters the viewport.
       */
      const trigger = ScrollTrigger.create({
        trigger: trust,
        start: "top 80%",
        once: true,
        onEnter: () => {
          timeline.play();
        },
      });

      /*
       * Recalculate positions after layout
       * and Hero animations have initialized.
       */
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      return () => {
        trigger.kill();
        timeline.kill();
      };
    },
    {
      scope: trustRef,
    },
  );

  return (
    <div ref={trustRef}>
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
                  ${
                    isLeft
                      ? "self-start pl-12"
                      : "self-end pr-12"
                  }
                `}
              >
                <p
                  className={`
                    text-[24px]
                    leading-tight
                    text-primary
                    ${
                      isLeft
                        ? "self-start"
                        : "self-end"
                    }
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
                    ${
                      isLeft
                        ? "text-left"
                        : "text-right"
                    }
                  `}
                >
                  {item.tagline}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}