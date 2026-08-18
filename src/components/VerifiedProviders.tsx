import { Users } from "lucide-react";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import chen from "../assets/None2.png";
import mike from "../assets/None1.png";
import james from "../assets/James.png";
import park from "../assets/Park.png";
import emma from "../assets/Emma.png";
import david from "../assets/David.png";
import morgan from "../assets/Morgan.png";
import smith from "../assets/Smith.png";
import sophie from "../assets/Sphie.png";
import jennifer from "../assets/Jennifer.png";
import robert from "../assets/Robert.png";

gsap.registerPlugin(ScrollTrigger);

interface Provider {
  id: string;
  name: string;
  specialty: string;
  patients: string;
  years: string;
  image: string;
}

interface ProviderCardProps {
  provider: Provider;
  className?: string;
}

interface MoreCardProps {
  className?: string;
}

interface DesktopColumn {
  shift: boolean;
  providers: Provider[];
  more?: boolean;
}

const PROVIDERS: Provider[] = [
  {
    id: "morgan",
    name: "Dr. Rachel Morgan",
    specialty: "Neurology",
    patients: "92",
    years: "10 yrs",
    image: morgan,
  },
  {
    id: "park",
    name: "Dr. Michael Park",
    specialty: "Orthopedics",
    patients: "75",
    years: "8 yrs",
    image: park,
  },
  {
    id: "thompson",
    name: "Dr. Emma Thompson",
    specialty: "Pediatrics",
    patients: "110",
    years: "9 yrs",
    image: emma,
  },
  {
    id: "mike",
    name: "Dr. Mike Elite",
    specialty: "OPD",
    patients: "110",
    years: "9 yrs",
    image: mike,
  },
  {
    id: "morrison",
    name: "Dr. James Morrison",
    specialty: "Cardiology",
    patients: "120",
    years: "15 yrs",
    image: james,
  },
  {
    id: "kumar",
    name: "Dr. David Kumar",
    specialty: "Dermatology",
    patients: "88",
    years: "12 yrs",
    image: david,
  },
  {
    id: "smith",
    name: "Dr. Karen Smith",
    specialty: "Psychiatry",
    patients: "60",
    years: "5 yrs",
    image: smith,
  },
  {
    id: "laurent",
    name: "Dr. Sophie Laurent",
    specialty: "Psychiatry",
    patients: "140",
    years: "12 yrs",
    image: sophie,
  },
  {
    id: "martinez",
    name: "Dr. Jennifer Martinez",
    specialty: "Neurology",
    patients: "130",
    years: "8 yrs",
    image: jennifer,
  },
  {
    id: "chen",
    name: "Dr. Alex Chen",
    specialty: "General Surgery",
    patients: "95",
    years: "7 yrs",
    image: chen,
  },
  {
    id: "walsh",
    name: "Dr. Robert Walsh",
    specialty: "Internal Medicine",
    patients: "128",
    years: "13 yrs",
    image: robert,
  },
];

const DESKTOP_COLUMNS: DesktopColumn[] = [
  {
    shift: false,
    providers: [PROVIDERS[0], PROVIDERS[1]],
  },
  {
    shift: true,
    providers: [PROVIDERS[2], PROVIDERS[3]],
  },
  {
    shift: false,
    providers: [PROVIDERS[4]],
  },
  {
    shift: true,
    providers: [PROVIDERS[5], PROVIDERS[6]],
  },
  {
    shift: false,
    providers: [PROVIDERS[7]],
  },
  {
    shift: true,
    providers: [PROVIDERS[8], PROVIDERS[9]],
  },
  {
    shift: false,
    providers: [PROVIDERS[10]],
    more: true,
  },
];

/* --------------------------------
   Provider Card
--------------------------------- */

function ProviderCard({
  provider,
  className = "",
}: ProviderCardProps) {
  return (
    <article
      className={`
        shrink-0 rounded-2xl bg-neutral-200 p-2
        shadow-sm
        transition-all duration-300 ease-out
        hover:-translate-y-0.5
        hover:shadow-md
        ${className}
      `}
    >
      <div className="aspect-[4/5] w-full overflow-hidden rounded-xl">
        <img
          src={provider.image}
          alt={`${provider.name}, ${provider.specialty}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="px-1 pb-1 pt-2">
        <p className="truncate text-[10px] font-medium text-primary lg:text-sm">
          {provider.name}
        </p>

        <p className="truncate text-[10px] text-secondary lg:text-xs">
          {provider.specialty}
        </p>

        <div className="mt-1 flex items-center gap-2 text-[10px] text-secondary">
          <span className="flex items-center gap-0.5">
            <Users
              aria-hidden="true"
              className="h-3 w-3"
            />
            <span>{provider.patients}</span>
          </span>

          <span>{provider.years}</span>
        </div>
      </div>
    </article>
  );
}

/* --------------------------------
   More Providers Card
--------------------------------- */

function MoreCard({ className = "" }: MoreCardProps) {
  return (
    <div
      className={`
        flex shrink-0 items-center justify-center
        rounded-2xl bg-emerald-50 p-6 text-center
        ${className}
      `}
    >
      <span className="text-lg font-semibold text-slate-900">
        4000+
        <br />
        more
      </span>
    </div>
  );
}

/* --------------------------------
   Desktop Provider Grid
--------------------------------- */

function DesktopGrid() {
  return (
    <div className="provider-grid mx-auto hidden w-fit items-start gap-1 md:flex lg:gap-2">
      {DESKTOP_COLUMNS.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className={`
            provider-column flex flex-col gap-2
            ${column.shift ? "mt-20" : ""}
          `}
        >
          {column.providers.map((provider) => {
            const isOffsetCard =
              provider.id === "morrison" ||
              provider.id === "laurent";

            return (
              <ProviderCard
                key={provider.id}
                provider={provider}
                className={`
                  provider-card
                  w-[100px] lg:w-[130px]
                  ${isOffsetCard ? "mt-40 lg:mt-50" : ""}
                `}
              />
            );
          })}

          {column.more && (
            <MoreCard
              className="
                provider-card
                h-[200px] w-[100px]
                lg:h-[250px] lg:w-[130px]
              "
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* --------------------------------
   Mobile Provider Carousel
--------------------------------- */

function MobileCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const cards = Array.from(
      track.children
    ) as HTMLElement[];

    if (cards.length === 0) {
      return;
    }

    const originalCount = PROVIDERS.length;
    const gap = 16;

    const getCardWidth = () => {
      const card = cards[0];

      return card.offsetWidth + gap;
    };

    const context = gsap.context(() => {
      const cardWidth = getCardWidth();

      gsap.to(track, {
        x: -(cardWidth * originalCount),
        duration: 30,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((value) => {
            const x = parseFloat(value);

            return x % (cardWidth * originalCount);
          }),
        },
      });
    }, track);

    return () => {
      context.revert();
    };
  }, []);

  const carouselProviders = [
    ...PROVIDERS,
    ...PROVIDERS,
  ];

  return (
    <div className="provider-carousel overflow-hidden md:hidden">
      <div
        ref={trackRef}
        className="flex w-max gap-4"
      >
        {carouselProviders.map((provider, index) => (
          <div
            key={`${provider.id}-${index}`}
            className="w-[230px] shrink-0"
          >
            <ProviderCard
              provider={provider}
              className="w-[230px] rounded-3xl p-3"
            />
          </div>
        ))}
      </div>

      {/* Pagination Indicators */}
      <div
        aria-hidden="true"
        className="mt-5 flex justify-center gap-2"
      >
        <span className="h-2 w-5 rounded-full bg-primary" />
        <span className="h-2 w-2 rounded-full bg-neutral-300" />
        <span className="h-2 w-2 rounded-full bg-neutral-300" />
      </div>
    </div>
  );
}

/* --------------------------------
   Main Section
--------------------------------- */

export default function VerifiedProviders() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const heading = section.querySelector(".providers-heading");
      const subtitle = section.querySelector(".providers-subtitle");

      const desktopCards = gsap.utils.toArray<HTMLElement>(
        ".provider-grid .provider-card"
      );

      const mobileCards = gsap.utils.toArray<HTMLElement>(
        ".provider-carousel .provider-card"
      );

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set(
          [
            heading,
            subtitle,
            ...desktopCards,
            ...mobileCards,
          ],
          {
            clearProps: "all",
          }
        );

        return;
      }

      /*
      * --------------------------------
      * Initial states
      * --------------------------------
      */

      gsap.set(heading, {
        y: 40,
        opacity: 0,
      });

      gsap.set(subtitle, {
        y: 25,
        opacity: 0,
      });

      gsap.set(
        [...desktopCards, ...mobileCards],
        {
          y: 45,
          opacity: 0,
        }
      );

      /*
      * --------------------------------
      * Scroll-triggered animation
      * --------------------------------
      */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });

      /*
      * 1. Heading
      */

      timeline.to(heading, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      });

      /*
      * 2. Subtitle
      */

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

      /*
      * 3. Desktop cards
      * One card at a time
      */

      timeline.to(
        desktopCards,
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.12,
          ease: "power3.out",
        },
        "+=0.25"
      );

      /*
      * 4. Mobile cards
      * One card at a time
      */

      timeline.to(
        mobileCards,
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
        },
        "+=0.2"
      );
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      id="specialties"
      className="
        mb-16 w-full px-4 py-4
        sm:px-6
        md:py-16
        lg:mb-32 lg:px-8
      "
    >
      {/* Section Heading */}
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="providers-heading heading">
          Meet Some Of Our Verified <br />
          Providers
        </h2>

        <p className="providers-subtitle sub-heading mt-5">
          5,000+ Healthcare Providers Across 50+ Specialties
        </p>
      </div>

      {/* Provider Collection */}
      <div className="mt-12">
        <DesktopGrid />
        <MobileCarousel />
      </div>
    </section>
  );
}