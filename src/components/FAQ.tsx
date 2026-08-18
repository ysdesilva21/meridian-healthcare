import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: "01",
    question: "What is Meridian Health?",
    answer:
      "Meridian helps you find verified doctors and book healthcare appointments online with confidence.",
  },
  {
    id: "02",
    question: "Are all doctors verified?",
    answer:
      "We connect you with verified healthcare professionals you can trust.",
  },
  {
    id: "03",
    question: "How quickly can I get an appointment?",
    answer:
      "View real time availability and book appointments with providers offering convenient time slots.",
  },
  {
    id: "04",
    question: "Is my health information secure?",
    answer:
      "Your personal information is protected through secure systems and privacy focused practices.",
  },
  {
    id: "05",
    question: "How do I find the right doctor?",
    answer:
      "Search by specialty, symptoms, location, or insurance to find the right provider for your needs.",
  },
  {
    id: "06",
    question: "Can I use my insurance?",
    answer:
      "Filter providers by accepted insurance plans to find care that fits your coverage.",
  },
  {
    id: "07",
    question: "Can I reschedule my appointment?",
    answer:
      "Yes, you can reschedule or cancel your appointment online at any time before it's confirmed.",
  },
];

function FAQRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-neutral-400 py-4 sm:py-5">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between gap-3 text-left"
      >
        <div className="flex items-start gap-2 sm:gap-3">
          <span className="md:text-[24px] text-primary sm:text-base">
            {item.id}.
          </span>
          <span className="md:text-[20px] text-primary sm:text-base">
            {item.question}
          </span>
        </div>
        <ChevronDown
          className={`mt-0.5 h-4 w-4 shrink-0 text-secondary transition-transform duration-300 sm:h-5 sm:w-5 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Smooth expand/collapse via grid-template-rows trick — no JS height measuring needed */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pl-5 pr-6 pt-1.5 text-xs leading-relaxed text-slate-500 sm:pl-7 sm:pt-2 sm:text-sm">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection({
  singleOpen = true,
}: {
  singleOpen?: boolean;
}) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(["01"]));

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(singleOpen ? [] : prev);
      if (prev.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section className="w-full px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-2xl rounded-2xl border border-neutral-300 bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="text-center">
          <h2 className="heading">
            Frequently Asked
            <br /> Questions
          </h2>
          <p className="mx-auto mt-6 sub-heading">
            Everything you need to know before finding your next <br/>healthcare provider.
          </p>
        </div>

        <div className="mt-6 sm:mt-8">
          {FAQS.map((item) => (
            <FAQRow
              key={item.id}
              item={item}
              isOpen={openIds.has(item.id)}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}