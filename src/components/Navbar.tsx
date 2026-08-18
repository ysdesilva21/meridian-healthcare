import {
  useEffect,
  useRef,
  useState,
} from "react";
import gsap from "gsap";

import LOGO from "../assets/LOGO.svg";
import LOGO2 from "../assets/LOGO2.svg";
import menuClose from "../assets/icon/close.svg";
import menuIcon from "../assets/icon/menu.svg";

interface NavLink {
  label: string;
  link: string;
}

const NAV_LINKS: NavLink[] = [
  {
    label: "Why Meridian",
    link: "#why-meridian",
  },
  {
    label: "How It Works",
    link: "#how-it-works",
  },
  {
    label: "Specialties",
    link: "#specialties",
  },
  {
    label: "Patient Reviews",
    link: "#patient-reviews",
  },
  {
    label: "FAQ",
    link: "#faq",
  },
  {
    label: "Book Appointment",
    link: "#book-appointment",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  /* --------------------------------
     GSAP Refs
  --------------------------------- */

  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileLinksRef = useRef<HTMLDivElement>(null);

  /* --------------------------------
     Desktop / Tablet Entrance
  --------------------------------- */

  useEffect(() => {
    const header = headerRef.current;

    if (!header) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const desktopNavItems = gsap.utils.toArray<HTMLElement>(
        "[data-nav-item]"
      );

      gsap.fromTo(
        desktopNavItems,
        {
          y: -12,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.06,
          clearProps: "transform,opacity",
        }
      );
    }, header);

    return () => ctx.revert();
  }, []);

  /* --------------------------------
     Mobile Menu Animation
  --------------------------------- */

  useEffect(() => {
    const menu = mobileMenuRef.current;
    const links = mobileLinksRef.current;

    if (!menu || !links) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(menu, {
          xPercent: open ? 0 : 100,
          opacity: open ? 1 : 0,
        });

        gsap.set(links.children, {
          y: 0,
          opacity: open ? 1 : 0,
        });

        return;
      }

      if (open) {
        gsap.set(menu, {
          xPercent: 100,
          opacity: 1,
        });

        gsap.to(menu, {
          xPercent: 0,
          duration: 0.55,
          ease: "power3.out",
        });

        gsap.fromTo(
          links.children,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            ease: "power2.out",
            stagger: 0.07,
            delay: 0.2,
          }
        );
      } else {
        gsap.to(menu, {
          xPercent: 100,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        });
      }
    }, menu);

    return () => ctx.revert();
  }, [open]);

  /* --------------------------------
     Keyboard Interaction
  --------------------------------- */

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  /* --------------------------------
     Handlers
  --------------------------------- */

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className="relative w-full"
    >
      {/* --------------------------------
          Desktop Navbar
      --------------------------------- */}

      <nav
        aria-label="Desktop navigation"
        className="hidden w-full pb-16 lg:block"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a
            href="#"
            aria-label="Meridian home"
            data-nav-item
          >
            <img
              src={LOGO}
              alt="Meridian"
              className="block"
            />
          </a>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {NAV_LINKS.map((navItem) => (
              <a
                key={navItem.label}
                href={navItem.link}
                data-nav-item
                className="
                  text-primary
                  transition-colors duration-200 ease-out
                  hover:text-primary/80
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary
                  focus-visible:ring-offset-2
                "
              >
                {navItem.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <button
            type="button"
            data-nav-item
            className="
              button
              transition-all duration-200 ease-out
              hover:-translate-y-0.5
              hover:shadow-md
              active:translate-y-0
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary
              focus-visible:ring-offset-2
            "
          >
            Book Now
          </button>
        </div>
      </nav>

      {/* --------------------------------
          Tablet Navbar
      --------------------------------- */}

      <nav
        aria-label="Tablet navigation"
        className="
          mx-auto hidden max-w-5xl
          items-center justify-between
          px-6 py-4 pb-16
          md:flex lg:hidden
        "
      >
        {/* Logo */}
        <a
          href="#"
          aria-label="Meridian home"
          data-nav-item
        >
          <img
            src={LOGO}
            alt="Meridian"
            className="block w-32"
          />
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-5">
          {NAV_LINKS.slice(0, 3).map((navItem) => (
            <a
              key={navItem.label}
              href={navItem.link}
              data-nav-item
              className="
                text-sm text-primary
                transition-colors duration-200 ease-out
                hover:text-primary/80
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary
                focus-visible:ring-offset-2
              "
            >
              {navItem.label}
            </a>
          ))}

          <a
            href="#faq"
            data-nav-item
            className="
              text-sm text-primary
              transition-colors duration-200 ease-out
              hover:text-primary/80
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary
              focus-visible:ring-offset-2
            "
          >
            FAQ
          </a>
        </div>

        {/* CTA */}
        <button
          type="button"
          data-nav-item
          className="
            button whitespace-nowrap text-sm
            transition-all duration-200 ease-out
            hover:-translate-y-0.5
            hover:shadow-md
            active:translate-y-0
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary
            focus-visible:ring-offset-2
          "
        >
          Book Now
        </button>
      </nav>

      {/* --------------------------------
          Mobile Navigation
      --------------------------------- */}

      <div className="absolute left-0 top-0 z-1000 w-full md:hidden">
        {/* Menu Button */}
        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={open}
          onClick={handleOpen}
          className="
            p-5
            transition-opacity duration-200 ease-out
            hover:opacity-70
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary
          "
        >
          <img
            src={menuIcon}
            alt=""
            className="block"
          />
        </button>

        {/* Mobile Menu Overlay */}
        <div
          ref={mobileMenuRef}
          className="
            fixed inset-0 z-1000
            min-h-screen
            bg-surface
            opacity-0
          "
          aria-hidden={!open}
          inert={!open}
        >
          {/* Close Button */}
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={handleClose}
            className="
              absolute left-0 top-0 p-5
              transition-opacity duration-200 ease-out
              hover:opacity-70
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary
            "
          >
            <img
              src={menuClose}
              alt=""
              className="block"
            />
          </button>

          {/* Mobile Navigation Content */}
          <div className="flex min-h-screen flex-col items-center justify-center">
            <a
              href="#"
              aria-label="Meridian home"
              onClick={handleClose}
            >
              <img
                src={LOGO2}
                alt="Meridian"
                className="mb-12 block"
              />
            </a>

            <div
              ref={mobileLinksRef}
              className="flex flex-col items-center justify-center gap-8"
            >
              {NAV_LINKS.map((navItem) => (
                <a
                  key={navItem.label}
                  href={navItem.link}
                  onClick={handleClose}
                  className="
                    text-[16px] text-primary
                    transition-colors duration-200 ease-out
                    hover:text-primary/80
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-primary
                    focus-visible:ring-offset-2
                  "
                >
                  {navItem.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}