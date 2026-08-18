import { Star } from "lucide-react";
import testimonialM from "../assets/Testimonial Main.png";

interface Testimonial {
  id: string;
  rating: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const FEATURED: Testimonial & { image: string } = {
  id: "olivia",
  rating: 4.9,
  quote:
    "Managing healthcare appointments usually feels overwhelming, but Meridian made it simple. I booked online, received instant confirmation, and the whole experience was seamless.",
  name: "Olivia P.",
  role: "Marketing Manager",
  avatar: "https://randomuser.me/api/portraits/women/44.jpg",
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
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    id: "james",
    rating: 4.8,
    quote:
      "The insurance filter made it easy to find doctors covered by my plan. I saved time by avoiding multiple calls and knowing my options before booking.",
    name: "James R.",
    role: "College Student",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: "emily",
    rating: 4.8,
    quote:
      "Managing healthcare for my family is easier with Meridian. I can quickly find trusted providers and schedule appointments that fit our needs.",
    name: "Emily K.",
    role: "Parent of Two",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: "daniel",
    rating: 4.8,
    quote:
      "With Meridian, I could quickly find available appointments and book care around my schedule. It saved me time and made the process effortless.",
    name: "Daniel T.",
    role: "Small Business Owner",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

function RatingBadge({ rating }: { rating: number }) {
  return (
    <span className="inline-flex w-fit items-center gap-1 rounded-full border border-neutral-500 bg-white px-2.5 py-1 text-xs font-semibold">
      <Star className="h-3.5 w-3.5 text-neutral-500 fill-neutral-500" />
      {rating.toFixed(1)}
    </span>
  );
}

function FeaturedCard() {
  return (
    <div
      className="
        relative mx-auto
        h-[200px] w-[300px]
        overflow-hidden rounded-[15px]
        bg-neutral-400

        sm:h-[420px] sm:w-full

        lg:h-[720px]
      "
    >
      {/* Featured image hidden on mobile */}
      <img
        src={FEATURED.image}
        alt=""
        className="absolute inset-0 hidden h-full w-full object-cover sm:block"
      />

      <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
        <RatingBadge rating={FEATURED.rating} />
      </div>

      <div
        className="
          absolute inset-x-3 bottom-3
          rounded-[15px]
          bg-neutral-400
          p-4

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

        <div className="mt-3 flex items-center gap-3 sm:mt-4">
          <img
            src={FEATURED.avatar}
            alt={FEATURED.name}
            className="h-9 w-9 rounded-full object-cover sm:h-10 sm:w-10"
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
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div
      className="
        mx-auto flex
        min-h-[185px] w-[300px]
        flex-col
        rounded-[15px]
        bg-neutral-400
        p-4

        sm:min-h-[190px]
        sm:w-full
        sm:p-5

        lg:min-h-[225px]
        lg:p-6
      "
    >
      {/* Rating */}
      <RatingBadge rating={t.rating} />

      {/* Quote */}
      <p
        className="
          mt-3
          text-[14px]
          leading-relaxed
          text-primary

          sm:mt-4
          sm:text-[15px]

          lg:mt-5
          lg:text-[18px]
          lg:leading-[1.6]
        "
      >
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* User */}
      <div className="mt-auto flex items-center gap-3 pt-4 sm:pt-5">
        <img
          src={t.avatar}
          alt={t.name}
          className="h-8 w-8 rounded-full object-cover sm:h-9 sm:w-9"
        />

        <div>
          <p className="text-[13px] font-semibold text-slate-900 sm:text-sm">
            {t.name}
          </p>

          <p className="text-[11px] text-secondary sm:text-xs">
            {t.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PatientTestimonials() {
  return (
    <section className="mb-32 w-full px-4 py-4 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="heading">
          What Patients Say About <br />
          Meridian
        </h2>

        <p className="sub-heading mt-6">
          A simpler healthcare experience, according to the people who use it.
        </p>
      </div>

      <div
        className="
          mx-auto mt-8
          grid max-w-6xl
          grid-cols-1
          gap-4

          sm:mt-12
          sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]
          sm:items-center
          sm:gap-5

          lg:gap-6
        "
      >
        {/* Featured */}
        <FeaturedCard />

        {/* Four testimonials */}
        <div
          className="
            grid
            grid-cols-1
            gap-4

            sm:grid-cols-2
            sm:gap-5

            lg:gap-6
          "
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}