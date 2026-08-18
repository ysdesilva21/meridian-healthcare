import { useState } from "react";

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
    link: "#",
  },
  {
    label: "How It Works",
    link: "#",
  },
  {
    label: "Specialties",
    link: "#",
  },
  {
    label: "Patient Reviews",
    link: "#",
  },
  {
    label: "FAQ",
    link: "#",
  },
  {
    label: "Book Appointment",
    link: "#",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <header className="relative w-full">
      {/* Desktop Navbar */}
      <nav
        aria-label="Desktop navigation"
        className="hidden w-full pb-16 lg:block"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#" aria-label="Meridian home">
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

      {/* Tablet Navbar */}
      <nav
        aria-label="Tablet navigation"
        className="mx-auto hidden max-w-5xl items-center justify-between px-6 pb-16 py-4 md:flex lg:hidden"
      >
        {/* Logo */}
        <a href="#" aria-label="Meridian home">
          <img
            src={LOGO}
            alt="Meridian"
            className="block w-32"
          />
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-5">
          <a
            href="#"
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
            Why Meridian
          </a>

          <a
            href="#"
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
            How It Works
          </a>

          <a
            href="#"
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
            Specialties
          </a>

          <a
            href="#"
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

      {/* Mobile Navigation */}
      <div className="absolute left-0 top-0 z-[1000] w-full md:hidden">
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
          className={`
            fixed inset-0 z-[1000] min-h-screen bg-surface
            transition-all duration-300 ease-out
            ${
              open
                ? "translate-x-0 opacity-100"
                : "pointer-events-none translate-x-full opacity-0"
            }
          `}
          aria-hidden={!open}
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

            <div className="flex flex-col items-center justify-center gap-8">
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