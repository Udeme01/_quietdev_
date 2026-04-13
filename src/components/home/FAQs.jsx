import { useState } from "react";

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "Do you do Web Design or Development only?",
    a: "Yes, I do both. I usually work on projects from design to Webflow and Framer development. However, if you only require web design or development, I'm available for both.",
  },
  {
    q: "Will I get a responsive website?",
    a: "Absolutely. Every website I build is fully responsive and optimized for all screen sizes — desktop, tablet, and mobile.",
  },
  {
    q: "How much does a website design and development cost?",
    a: "Pricing depends on the scope and complexity of the project. Reach out with your requirements and I'll send over a tailored quote.",
  },
  {
    q: "Do I need a Webflow/Framer Account?",
    a: "For Webflow projects, you'll need a Webflow account to host your site. For Framer projects, a Framer account is required. I'll walk you through the setup process — it's straightforward.",
  },
  {
    q: "Are you available 24/7?",
    a: "I'm not a robot (though I build things that look like they could be). I work during standard business hours and typically respond within 24 hours. For urgent matters, I do my best to accommodate.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-transparent py-20 px-6 md:px-12 lg:px-24">
      <div className="lg:container mx-auto">
        {/* Heading */}
        <h2
          className="text-4xl md:text-6xl lg:text-7xl font-black uppercase text-white leading-tight mb-16 font-bebas"
          style={{
            letterSpacing: "-0.02em",
          }}
        >
          Your Questions,
          <br />
          Answered
        </h2>

        {/* Accordion */}
        <div className="flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-t border-white/10 last:border-b">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 md:py-6 text-left group"
                >
                  <span
                    className={`text-sm md:text-base font-semibold transition-colors duration-200 pr-4 ${
                      isOpen
                        ? "text-white"
                        : "text-white/70 group-hover:text-white"
                    }`}
                  >
                    {faq.q}
                  </span>

                  {/* Toggle icon */}
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "border-white bg-white text-[#111] rotate-45"
                        : "border-white/20 text-white/40 group-hover:border-white/40"
                    }`}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 5v14M5 12h14"
                      />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-white/50 text-sm md:text-[15px] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
