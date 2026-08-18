import { useRef } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import fb from "../assets/icon/Facebook.png";
import li from "../assets/icon/Linkedin.png";
import wp from "../assets/icon/Whatsapp.png";
import yt from "../assets/icon/Youtube.png";

import logo from "../assets/LOGO3.svg";

gsap.registerPlugin(ScrollTrigger);

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: readonly FooterLink[];
}

interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

const SERVICES: FooterLink[] = [
  { label: "Find a Doctor", href: "#" },
  { label: "Medical Specialties", href: "#" },
  { label: "Book Appointment", href: "#book-appointment" },
  { label: "Same-Day Appointments", href: "#" },
  { label: "Insurance Support", href: "#" },
  { label: "Virtual Consultations", href: "#" },
];

const QUICK_LINKS: FooterLink[] = [
  { label: "About Us", href: "#why-meridian" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Verified Providers", href: "#specialties" },
  { label: "Patient Reviews", href: "#patient-reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Download App", href: "#book-appointment" },
];

const LEGAL_LINKS: FooterLink[] = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "Sitemap", href: "#" },
];

const SOCIALS: SocialLink[] = [
  { icon: fb, label: "Facebook", href: "#" },
  { icon: li, label: "LinkedIn", href: "#" },
  { icon: yt, label: "YouTube", href: "#" },
  { icon: wp, label: "WhatsApp", href: "#" },
];

/* --------------------------------
   Footer Link Column
--------------------------------- */

function FooterColumn({
  title,
  links,
}: FooterColumnProps) {
  return (
    <div className="footer-column">
      <h3 className="text-[24px] text-white">
        {title}
      </h3>

      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="
                text-sm text-neutral-300
                transition-colors duration-200
                hover:text-white
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
                focus-visible:ring-offset-2
                focus-visible:ring-offset-primary-900
              "
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* --------------------------------
   Main Footer
--------------------------------- */

export default function SiteFooter() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const footer = footerRef.current;

      if (!footer) return;

      const brand = footer.querySelector(".footer-brand");
      const columns = gsap.utils.toArray<HTMLElement>(
        ".footer-column",
        footer
      );
      const contact = footer.querySelector(".footer-contact");
      const divider = footer.querySelector(".footer-divider");
      const bottomBar = footer.querySelector(".footer-bottom");

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set(
          [
            brand,
            ...columns,
            contact,
            divider,
            bottomBar,
          ],
          {
            clearProps: "all",
          }
        );

        return;
      }

      /*
       * Initial states
       */

      gsap.set(
        [
          brand,
          ...columns,
          contact,
        ],
        {
          y: 30,
          opacity: 0,
        }
      );

      gsap.set(divider, {
        scaleX: 0,
        transformOrigin: "center",
      });

      gsap.set(bottomBar, {
        y: 20,
        opacity: 0,
      });

      /*
       * Scroll-triggered sequence
       */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: footer,
          start: "top 80%",
          once: true,
        },
      });

      // 1. Brand
      timeline.to(brand, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      });

      // 2. Footer columns appear one by one
      timeline.to(
        columns,
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.3"
      );

      // 3. Contact
      timeline.to(
        contact,
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power3.out",
        },
        "-=0.25"
      );

      // 4. Divider
      timeline.to(
        divider,
        {
          scaleX: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.15"
      );

      // 5. Bottom bar
      timeline.to(
        bottomBar,
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.2"
      );
    },
    {
      scope: footerRef,
    }
  );

  return (
    <footer
      ref={footerRef}
      className="
        w-full bg-primary-900
        px-4 pt-12

        sm:px-6 sm:pt-14

        lg:px-8 lg:pt-16
      "
    >
      <div className="mx-auto max-w-6xl">

        {/* Main Footer Grid */}
        <div
          className="
            grid grid-cols-1 gap-10

            sm:grid-cols-2
            sm:gap-x-8
            sm:gap-y-10

            lg:grid-cols-[1.3fr_1fr_1fr_1fr]
            lg:gap-8
          "
        >

          {/* Brand */}
          <div className="footer-brand sm:col-span-2 lg:col-span-1">
            <div className="mb-[100px] flex items-center gap-2">
              <img
                src={logo}
                alt="Meridian Health"
              />
            </div>

            <p className="mt-4 max-w-xs text-[16px] text-neutral-300">
              Helping patients find trusted{" "}
              <br className="hidden md:block" />
              healthcare providers.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full
                    border border-slate-500/60
                    transition-all duration-200 ease-out
                    hover:-translate-y-0.5
                    hover:border-white
                    hover:shadow-sm
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-white
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-primary-900
                    active:translate-y-0
                  "
                >
                  <img
                    src={icon}
                    alt=""
                    className="h-5 w-5 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <FooterColumn
            title="Services"
            links={SERVICES}
          />

          {/* Quick Links */}
          <FooterColumn
            title="Quick Links"
            links={QUICK_LINKS}
          />

          {/* Contact */}
          <div className="footer-contact sm:col-span-2 lg:col-span-1">
            <h3 className="text-[24px] text-white">
              Contact Us
            </h3>

            <ul className="mt-4 space-y-3">

              {/* Address */}
              <li className="flex items-start gap-2.5">
                <MapPin
                  aria-hidden="true"
                  className="
                    mt-0.5 h-6 w-6
                    shrink-0 text-neutral-300
                  "
                />

                <span className="text-[12px] text-neutral-300">
                  500 Market Street, Suite 1200
                  <br />
                  San Francisco, CA 94105
                  <br />
                  United States
                </span>
              </li>

              {/* Email */}
              <li className="flex items-center gap-2.5">
                <Mail
                  aria-hidden="true"
                  className="
                    h-6 w-6 shrink-0
                    text-neutral-300
                  "
                />

                <a
                  href="mailto:support@meridianhealth.com"
                  className="
                    text-[12px] text-neutral-300
                    transition-colors duration-200
                    hover:text-white
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-white
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-primary-900
                  "
                >
                  support@meridianhealth.com
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-2.5">
                <Phone
                  aria-hidden="true"
                  className="
                    h-6 w-6 shrink-0
                    text-neutral-300
                  "
                />

                <a
                  href="tel:+80569125152"
                  className="
                    text-[12px] text-neutral-300
                    transition-colors duration-200
                    hover:text-white
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-white
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-primary-900
                  "
                >
                  +80 569 125 152
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="
            footer-divider
            mt-10 border-t border-slate-600/50
            sm:mt-12
          "
        />

        {/* Bottom Bar */}
        <div
          className="
            footer-bottom
            flex flex-col items-center gap-4
            py-6 text-center

            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:gap-4
            sm:py-7
            sm:text-left
          "
        >
          <p className="text-xs text-neutral-300">
            © 2026 Meridian Health. All rights reserved.
          </p>

          <ul
            className="
              flex flex-wrap
              items-center justify-center
              gap-x-5 gap-y-2

              sm:justify-end
            "
          >
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="
                    text-xs text-neutral-300
                    transition-colors duration-200
                    hover:text-white
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-white
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-primary-900
                  "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}