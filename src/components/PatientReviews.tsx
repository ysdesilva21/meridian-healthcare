import { Star } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import testimonialM from "../assets/testimonials/Testimonial Main.webp";

import olivia from "../assets/testimonials/Olivia.webp";
import sam from "../assets/testimonials/Sam.webp";
import james from "../assets/testimonials/James.webp";
import emily from "../assets/testimonials/Emily.webp";
import aryan from "../assets/testimonials/Aryan.webp";

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  id: string;
  rating: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

interface FeaturedTestimonial extends Testimonial {
  image: string;
}

const FEATURED: FeaturedTestimonial = {
  id: "olivia",
  rating: 4.9,
  quote:
    "Managing healthcare appointments usually feels overwhelming, but Meridian made it simple. I booked online, received instant confirmation, and the whole experience was seamless.",
  name: "Olivia P.",
  role: "Marketing Manager",
  avatar: olivia,
  image: testimonialM,
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "sam",
    rating: 4.8,
    quote:
      "Meridian helped me find a dermatologist that matched my needs and schedule. The booking process was fast, simple, and completely online.",
    name: "Sam M.",
    role: "Remote Software Engineer",
    avatar: sam,
  },
  {
    id: "james",
    rating: 4.8,
    quote:
      "The insurance filter made it easy to find doctors covered by my plan. I saved time by avoiding multiple calls and knowing my options before booking.",
    name: "James R.",
    role: "College Student",
    avatar: james,
  },
  {
    id: "emily",
    rating: 4.8,
    quote:
      "Managing healthcare for my family is easier with Meridian. I can quickly find trusted providers and schedule appointments that fit our needs.",
    name: "Emily K.",
    role: "Parent of Two",
    avatar: emily,
  },
  {
    id: "aryan",
    rating: 4.8,
    quote:
      "With Meridian, I could quickly find available appointments and book care around my schedule. It saved me time and made the process effortless.",
    name: "Aryan T.",
    role: "Small Business Owner",
    avatar: aryan,
  },
];

/* --------------------------------
   Rating Badge
--------------------------------- */

function RatingBadge({ rating }: { rating: number }) {
  return (
    <span
      aria-label={`${rating} out of 5 stars`}
      className="
        inline-flex w-fit items-center gap-1
        rounded-full border border-neutral-500
        bg-white px-2.5 py-1
        text-xs font-semibold
        text-slate-900
      "
    >
      <Star
        aria-hidden="true"
        className="
          h-3.5 w-3.5
          fill-neutral-500
          text-neutral-500
        "
      />

      {rating.toFixed(1)}
    </span>
  );
}

/* --------------------------------
   Featured Testimonial
--------------------------------- */

function FeaturedCard() {
  return (
    <article
      className="
        testimonial-featured
        relative mx-auto

        h-[320px] w-[300px]

        overflow-hidden
        rounded-[15px]
        bg-neutral-400
        shadow-sm

        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:shadow-md

        sm:h-[420px] sm:w-full

        lg:h-[720px]
      "
    >
      {/* Featured Image */}
      <img
        src={FEATURED.image}
        alt=""
        width={1200}
        height={1600}
        className="
          absolute inset-0
          h-full w-full
          object-cover
        "
      />

      {/* Mobile Overlay */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-linear-to-b
          from-black/10
          via-transparent
          to-black/20
          sm:hidden
        "
      />

      {/* Rating */}
      <div
        className="
          absolute
          left-3 top-3
          z-20

          sm:left-4 sm:top-4

          lg:left-6 lg:top-6
        "
      >
        <RatingBadge rating={FEATURED.rating} />
      </div>

      {/* Testimonial Content */}
      <div
        className="
          absolute inset-x-3 bottom-3
          z-10
          rounded-[15px]
          bg-neutral-400 p-4

          sm:inset-x-4 sm:bottom-4 sm:p-5

          lg:inset-x-6 lg:bottom-6 lg:p-6
        "
      >
        <p
          className="
            text-[13px] leading-relaxed text-primary

            sm:text-[15px]

            lg:text-[24px]
          "
        >
          &ldquo;{FEATURED.quote}&rdquo;
        </p>

        {/* Patient Information */}
        <div className="mt-3 flex items-center gap-3 sm:mt-4">
          <img
            src={FEATURED.avatar}
            alt=""
            width={40}
            height={40}
            className="
              h-9 w-9
              rounded-full
              object-cover

              sm:h-10 sm:w-10
            "
          />

          <div>
            <p className="text-[12px] font-semibold text-primary">
              {FEATURED.name}
            </p>

            <p className="text-[12px] text-secondary">
              {FEATURED.role}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

/* --------------------------------
   Testimonial Card
--------------------------------- */

function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <article
      className="
        testimonial-card
        mx-auto flex
        min-h-[185px] w-[300px]
        flex-col
        rounded-[15px]
        bg-neutral-400 p-4
        shadow-sm

        transition-all duration-300 ease-out
        hover:-translate-y-0.5
        hover:shadow-md

        sm:min-h-[190px]
        sm:w-full
        sm:p-5

        lg:min-h-[225px]
        lg:p-6
      "
    >
      {/* Rating */}
      <RatingBadge rating={testimonial.rating} />

      {/* Quote */}
      <p
        className="
          mt-3
          text-[14px] leading-relaxed text-primary

          sm:mt-4 sm:text-[15px]

          lg:mt-5
          lg:text-[18px]
          lg:leading-[1.6]
        "
      >
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Patient Information */}
      <div className="mt-auto flex items-center gap-3 pt-4 sm:pt-5">
        <img
          src={testimonial.avatar}
          alt=""
          width={40}
          height={40}
          loading="lazy"
          decoding="async"
          className="
            h-8 w-8
            rounded-full
            object-cover

            sm:h-9 sm:w-9
          "
        />

        <div>
          <p className="text-[13px] font-semibold text-slate-900 sm:text-sm">
            {testimonial.name}
          </p>

          <p className="text-[11px] text-secondary sm:text-xs">
            {testimonial.role}
          </p>
        </div>
      </div>
    </article>
  );
}

/* --------------------------------
   Main Section
--------------------------------- */

export default function PatientTestimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const heading = section.querySelector(
        ".reviews-heading"
      );

      const supportingText = section.querySelector(
        ".reviews-supporting"
      );

      const featuredCard = section.querySelector(
        ".testimonial-featured"
      );

      const testimonialCards = gsap.utils.toArray<HTMLElement>(
        ".testimonial-card",
        section
      );

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      /*
       * --------------------------------
       * Accessibility
       * --------------------------------
       */

      if (reduceMotion) {
        gsap.set(
          [
            heading,
            supportingText,
            featuredCard,
            ...testimonialCards,
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

      gsap.set(supportingText, {
        y: 25,
        opacity: 0,
      });

      gsap.set(featuredCard, {
        y: 50,
        opacity: 0,
        scale: 0.97,
      });

      gsap.set(testimonialCards, {
        y: 45,
        opacity: 0,
      });

      /*
       * --------------------------------
       * Scroll-triggered sequence
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
        duration: 0.75,
        ease: "power3.out",
      });

      /*
       * 2. Supporting paragraph
       */

      timeline.to(
        supportingText,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.25"
      );

      /*
       * 3. Featured testimonial
       */

      timeline.to(featuredCard, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
      });

      /*
       * 4. Supporting cards
       */

      timeline.to(testimonialCards, {
        y: 0,
        opacity: 1,
        duration: 0.55,
        stagger: 0.18,
        ease: "power3.out",
      });
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      id="patient-reviews"
      className="
        mb-32 w-full
        px-4 py-4

        sm:px-6

        md:py-16

        lg:px-8
      "
    >
      {/* Section Heading */}
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="reviews-heading heading">
          What Patients Say About <br />
          Meridian
        </h2>

        <p className="reviews-supporting sub-heading mt-6">
          A simpler healthcare experience, according to the people who use it.
        </p>
      </div>

      {/* Testimonials */}
      <div
        className="
          mx-auto mt-8
          grid max-w-6xl
          grid-cols-1 gap-4

          sm:mt-12
          sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]
          sm:items-center
          sm:gap-5

          lg:gap-6
        "
      >
        {/* Featured Testimonial */}
        <FeaturedCard />

        {/* Supporting Testimonials */}
        <div
          className="
            grid grid-cols-1 gap-4

            sm:grid-cols-2
            sm:gap-5

            lg:gap-6
          "
        >
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}