import {
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

import fb from '../assets/icon/Facebook.png'
import li from '../assets/icon/Linkedin.png'
import wp from '../assets/icon/Whatsapp.png'
import yt from '../assets/icon/Youtube.png'

import logo from '../assets/LOGO3.svg'

/**
 * SiteFooter
 * -------------------------------------------------------------
 * Desktop (lg+):  4 columns side by side — Brand, Services,
 *                 Quick Links, Contact Us.
 * Tablet (sm–lg): 2-column grid — Brand and Contact span full
 *                 width, Services and Quick Links sit side by side.
 * Mobile (<sm):   everything stacked in a single column.
 *
 * Usage:
 *   <SiteFooter />
 * -------------------------------------------------------------
 */

const SERVICES = [
  "Find a Doctor",
  "Medical Specialties",
  "Book Appointment",
  "Same-Day Appointments",
  "Insurance Support",
  "Virtual Consultations",
];

const QUICK_LINKS = [
  "About Us",
  "How it works",
  "Verified Providers",
  "Patient Reviews",
  "FAQ",
  "Download App",
];

const LEGAL_LINKS = [
  "Terms of Service",
  "Privacy Policy",
  "Cookie Policy",
  "Sitemap",
];

const SOCIALS = [
  { icon: fb, label: "Facebook", href: "#" },
  { icon: li, label: "LinkedIn", href: "#" },
  { icon: yt, label: "YouTube", href: "#" },
  { icon: wp, label: "WhatsApp", href: "#" },
];

function FooterColumn({
  title,
  links,
  className = "",
}: {
  title: string;
  links: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="text-[24px] text-white">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm text-neutral-300 transition hover:text-white"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="w-full bg-primary-900 px-4 pt-12 sm:px-6 sm:pt-14 lg:px-8 lg:pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-[100px]">
               <img src={logo} alt="" />
            </div>
            <p className="mt-4 max-w-xs text-[16px] text-neutral-300">
              Helping patients find trusted <br className="hidden md:block"/>healthcare providers.
            </p>
            <div className="mt-5 flex items-center gap-3">
                {SOCIALS.map(({ icon, label, href }) => (
                    <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-500/60 transition hover:border-white"
                    >
                    <img
                        src={icon}
                        alt={label}
                        className="h-5 w-5 object-contain"
                    />
                    </a>
                ))}
            </div>
          </div>

          {/* Services */}
          <FooterColumn title="Services" links={SERVICES} />

          {/* Quick Links */}
          <FooterColumn title="Quick Links" links={QUICK_LINKS} />

          {/* Contact Us */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-[24px] text-white">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-neutral-300" />
                <span className="text-[12px] text-neutral-300">
                  500 Market Street, Suite 1200
                  <br />
                  San Francisco, CA 94105
                  <br />
                  United States
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-6 w-6 shrink-0 text-neutral-300" />
                <a
                  href="mailto:support@meridianhealth.com"
                  className="text-[12px] text-neutral-300 transition hover:text-white"
                >
                  support@meridianhealth.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-6 w-6 shrink-0 text-neutral-300" />
                <a
                  href="tel:+80569125152"
                  className="text-[12px] text-neutral-300 transition hover:text-white"
                >
                  +80 569 125 152
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-slate-600/50 sm:mt-12" />

        {/* Bottom bar: stacked + centered on mobile, row + space-between from sm up */}
        <div className="flex flex-col items-center gap-4 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-7 sm:text-left">
          <p className="text-xs text-neutral-300">
            © 2026 Meridian Health. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:justify-end">
            {LEGAL_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-xs text-neutral-300 transition hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}