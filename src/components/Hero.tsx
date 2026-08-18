import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import heroBG from "../assets/HeroBG.webp";
import heroMBG from "../assets/HeroMBG.webp";
import calendar from "../assets/icon/calendar.svg";
import star from "../assets/icon/star.svg";
import star2 from "../assets/icon/star2.svg";
import trustImgs from "../assets/trustImgs.webp";
import trustMImgs from "../assets/trustMImgs.webp";

import Navbar from "./Navbar";

export default function Hero() {
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const context = gsap.context(() => {
      const desktopTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      const mobileTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      /*
       * Desktop hero
       * ---------------------------------------------------------
       * Background enters first with a very subtle scale.
       * Content follows with a staggered vertical reveal.
       */

      desktopTimeline
        .fromTo(
          ".hero-desktop-bg",
          {
            scale: 1.04,
          },
          {
            scale: 1,
            duration: 1.4,
            ease: "power2.out",
          },
        )
        .from(
          ".hero-desktop-content",
          {
            y: 35,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.9",
        )
        .from(
          ".hero-desktop-actions",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.45",
        )
        .from(
          ".hero-desktop-trust",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.35",
        )
        .from(
          ".hero-desktop-rating",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4",
        );

      /*
       * Mobile hero
       * ---------------------------------------------------------
       * The mobile background receives a smaller scale animation
       * to avoid making the full-screen image feel too dynamic.
       */

      mobileTimeline
        .fromTo(
          ".hero-mobile-bg",
          {
            scale: 1.03,
          },
          {
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
          },
        )
        .from(
          ".hero-mobile-content",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.7",
        )
        .from(
          ".hero-mobile-actions",
          {
            y: 15,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4",
        )
        .from(
          ".hero-mobile-trust",
          {
            y: 15,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3",
        )
        .from(
          ".hero-mobile-rating",
          {
            y: 15,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3",
        );
    });

    return () => context.revert();
  });

  return (
    <>
      <Navbar />

      {/* ---------------------------------------------------------
          Desktop / Tablet Hero
      --------------------------------------------------------- */}

      <section
        id="hero"
        className="
          relative mx-auto mb-32
          hidden max-w-175
          overflow-hidden
          md:block
          xl:max-w-300
        "
      >
        {/* Background */}
        <div className="h-full w-full overflow-hidden">
          <img
            src={heroBG}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="hero-desktop-bg h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid h-full w-full grid-cols-2">
            {/* Left Content */}
            <div
              className="
                hero-desktop-content
                flex flex-col justify-center
                px-8
                xl:px-10
              "
            >
              <div>
                <h1
                  className="
                    mb-3
                    text-3xl font-bold text-inverse
                    xl:text-5xl
                  "
                >
                  Find the right <br />
                  doctor in minutes, <br />
                  not hours.
                </h1>

                <h2
                  className="
                    hidden
                    text-2xl font-medium text-neutral-200
                    xl:block
                  "
                >
                  Compare verified specialists, check insurance <br />
                  compatibility, and book appointments online <br />
                  without phone calls.
                </h2>

                <h2
                  className="
                    block
                    text-md font-medium text-neutral-200
                    xl:hidden
                  "
                >
                  Compare verified specialists, <br />
                  check insurance compatibility, and <br />
                  book appointments online without phone calls.
                </h2>
              </div>

              {/* Actions */}
              <div
                className="
                  hero-desktop-actions
                  mt-8 mb-8
                  flex items-center gap-3
                  self-start
                  xl:mt-11 xl:mb-11 xl:gap-3.75
                "
              >
                <button
                  type="button"
                  className="button flex items-center justify-center"
                >
                  Find Your Doctor
                </button>

                <button
                  type="button"
                  aria-label="Book Now"
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full bg-surface
                    transition-transform duration-200
                    hover:-translate-y-0.5
                    active:translate-y-0
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-surface
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-primary-900
                    xl:h-11 xl:w-11
                  "
                >
                  <img
                    src={calendar}
                    alt=""
                    aria-hidden="true"
                    className="h-5 w-5 xl:h-6.25 xl:w-6.25"
                  />
                </button>
              </div>

              {/* Trust Indicators */}
              <div
                className="
                  hero-desktop-trust
                  flex self-start
                  gap-0.5
                  text-xs text-primary
                  xl:gap-5 xl:text-[14px]
                "
              >
                <p>5000+ appointments</p>
                <p>Verified providers</p>
                <p>Insurance supported</p>
              </div>
            </div>

            {/* Rating */}
            <div
              className="
                hero-desktop-rating
                mb-4 mr-4
                self-end justify-self-end
                xl:mb-5 xl:mr-5
              "
            >
              <div
                className="
                  flex items-center justify-center
                  rounded-[15px]
                  bg-neutral-100
                  px-2 py-2
                  xl:px-3
                "
              >
                <div>
                  <img
                    src={trustImgs}
                    alt=""
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <div className="flex items-center">
                    <div className="flex items-center self-start">
                      <img
                        src={star}
                        alt=""
                        aria-hidden="true"
                      />

                      <p className="ml-1 text-base text-primary xl:text-[20px]">
                        4.8/5
                      </p>
                    </div>

                    <p className="ml-1 text-xs font-semibold text-secondary xl:text-[14px]">
                      AVG
                    </p>
                  </div>

                  <p className="text-xs xl:text-[14px]">
                    Rating from 120,000+ <br />
                    verified patients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          Mobile Hero
      --------------------------------------------------------- */}

      <section
        id="hero-mobile"
        className="
          relative
          flex min-h-screen
          flex-col justify-center
          md:hidden
        "
      >
        {/* Mobile Background */}
        <div className="absolute inset-0 z-0 w-full overflow-hidden">
          <img
            src={heroMBG}
            alt=""
            aria-hidden="true"
            className="hero-mobile-bg h-full w-full object-cover"
          />
        </div>

        {/* Mobile Content */}
        <div
          className="
            hero-mobile-content
            relative z-10
            flex w-full
            flex-col items-center justify-center
            px-10
            pt-28 pb-16
          "
        >
          <div>
            <h1
              className="
                mb-8
                text-center
                text-4xl font-bold
                leading-14 text-inverse
              "
            >
              Find the right <br />
              doctor in minutes, <br />
              not hours.
            </h1>

            <h2
              className="
                text-center
                text-[16px] font-medium
                leading-6 text-neutral-200
              "
            >
              Compare verified specialists, check <br />
              insurance compatibility, and book <br />
              appointments online without phone <br />
              calls.
            </h2>
          </div>

          {/* Mobile Actions */}
          <div
            className="
              hero-mobile-actions
              mt-10 mb-10
              flex items-center justify-center gap-3
            "
          >
            <button
              type="button"
              className="button flex items-center justify-center"
            >
              Find Your Doctor
            </button>

            <button
              type="button"
              aria-label="Book Now"
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full bg-surface
                transition-transform duration-200
                hover:-translate-y-0.5
                active:translate-y-0
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-surface
                focus-visible:ring-offset-2
              "
            >
              <img
                src={calendar}
                alt=""
                aria-hidden="true"
                className="h-5 w-5"
              />
            </button>
          </div>

          {/* Mobile Trust Indicators */}
          <div
            className="
              hero-mobile-trust
              flex items-center justify-center
              gap-3.75
              text-[10px] text-primary
            "
          >
            <p>5000+ appointments</p>
            <p>Verified providers</p>
            <p>Insurance supported</p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          Mobile Rating
      --------------------------------------------------------- */}

      <div
        className="
          hero-mobile-rating
          bg-neutral-100
          md:hidden
        "
      >
        <div
          className="
            flex items-center justify-center
            gap-5
            bg-neutral-100
            px-2 py-3
            xl:px-3
          "
        >
          <div className="h-10">
            <img
              src={trustMImgs}
              alt=""
              aria-hidden="true"
            />
          </div>

          <div>
            <div className="flex items-center">
              <div className="flex items-center">
                <img
                  src={star2}
                  alt=""
                  aria-hidden="true"
                />

                <p className="ml-1 text-[14px] text-primary">
                  4.8/5
                </p>
              </div>

              <p className="ml-1 mt-1 text-[10px] font-semibold text-secondary">
                AVG
              </p>
            </div>

            <p className="text-[10px]">
              Rating from 120,000+ verified patients
            </p>
          </div>
        </div>
      </div>
    </>
  );
}