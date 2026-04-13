// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────

const testimonials = [
  {
    name: "David Bradley",
    role: "Chief Technologist",
    company: "SubRx",
    initials: "DB",
    color: "from-blue-500 to-indigo-600",
    quote:
      "It was our first time taking a B2B website from Figma to Webflow, and Victor nailed our project. His communication was clear and consistent throughout the entire process, and the final result exceeded expectations.",
  },
  {
    name: "Nicolas Villa",
    role: "Founder & CEO",
    company: "Stayvera Inc.",
    initials: "NV",
    color: "from-emerald-500 to-teal-600",
    quote:
      "I had an excellent experience working with Victor for the Stayvera website! The communication was outstanding, he always kept me informed every step of the way. The final result was beyond my expectations.",
  },
  {
    name: "Sarah Chen",
    role: "Head of Product",
    company: "Launchpad",
    initials: "SC",
    color: "from-rose-500 to-pink-600",
    quote:
      "Victor transformed our outdated site into something our team is genuinely proud of. The attention to detail and speed of delivery were unmatched. Highly recommend for any startup looking to scale fast.",
  },
];

export function WhatClientsSay() {
  return (
    <section className="bg-transparent py-20 px-6 md:px-12 lg:px-24">
      <div className="lg:container mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase text-white leading-tight mb-4 font-bebas"
            style={{
              letterSpacing: "-0.02em",
            }}
          >
            I've Helped 5+ <span className="text-white/20">Companies</span>
            <br />
            Design, Ship,
            <br />
            <span className="relative inline-block">
              and Raise.
              <span className="absolute -bottom-2 left-0 w-full h-0.75 bg-white/30 rounded-full" />
            </span>
          </h2>
          <p className="text-white/40 text-base md:text-lg mt-6 font-light">
            Hear it from founders who've raised, and shipped with us.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-white/4 border border-white/10 rounded-2xl p-6 md:p-7 flex flex-col gap-5 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 group"
            >
              {/* Quote mark */}
              <span className="text-6xl font-serif text-white/10 leading-none -mt-2 select-none">
                "
              </span>

              {/* Quote */}
              <p className="text-white/50 text-sm md:text-[15px] leading-relaxed flex-1 -mt-4">
                {t.quote}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-white/10" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-linear-to-br ${t.color} flex items-center justify-center text-white text-xs font-black shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">
                    {t.name}
                  </p>
                  <p className="text-white/40 text-xs">
                    {t.role} · {t.company}
                  </p>
                </div>
                {/* Stars */}
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, si) => (
                    <svg
                      key={si}
                      className="w-3 h-3 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
