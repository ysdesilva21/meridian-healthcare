import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToHero = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToHero}
      className={`
        fixed
        right-4
        bottom-4
        z-[1000]

        flex
        h-11
        w-11
        shrink-0
        items-center
        justify-center

        rounded-full
        bg-primary-900
        text-white
        shadow-md

        transition-all
        duration-300
        ease-out

        hover:-translate-y-1
        hover:shadow-lg

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary
        focus-visible:ring-offset-2

        active:translate-y-0

        sm:right-6
        sm:bottom-6

        md:right-8
        md:bottom-8

        lg:right-12
        lg:bottom-12

        ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }
      `}
    >
      <ArrowUp
        aria-hidden="true"
        className="h-5 w-5"
      />
    </button>
  );
}