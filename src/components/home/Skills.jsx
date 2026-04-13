import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { skillCategories } from "../../data/skills";
import { Link } from "react-router-dom";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  const totalSkills = skillCategories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0,
  );

  const stats = [
    { value: totalSkills, label: "Total Skills" },
    { value: skillCategories.length, label: "Categories" },
    { value: "2+", label: "Years Experience" },
    { value: "20+", label: "Projects Shipped" },
  ];

  return (
    <main className="bg-transparent py-20 px-6 md:px-12 lg:px-24">
      <div className="lg:max-w-350 mx-auto">
        {/* <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-24 pb-24"> */}
        {/* ── HEADER ── */}
        <header className="mb-16 sm:mb-20">
          <span
            className="text-[11px] uppercase tracking-[0.3em] text-white/25 font-semibold mb-4 block"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Expertise
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase leading-[0.92] text-white mb-6 font-bebas">
            Skills &
            <br />
            <span className="text-white/25">Technologies</span>
          </h1>
          {/* <p className="text-white/40 text-base sm:text-lg leading-relaxed max-w-xl">
            A rundown of the tools, languages, and frameworks I use to design
            and build things people enjoy using.
          </p> */}
        </header>

        {/* ── STATS ROW ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white/3 border border-white/[0.07] rounded-2xl px-5 py-5"
            >
              <p
                className="text-3xl sm:text-4xl font-black text-white mb-1"
                style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
              >
                {s.value}
              </p>
              <p
                className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-semibold"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* ── FILTER TABS ── */}
        <div
          className="flex flex-wrap gap-2 mb-12"
          role="tablist"
          aria-label="Filter skills by category"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <button
            role="tab"
            aria-selected={activeCategory === "all"}
            onClick={() => setActiveCategory("all")}
            className={`text-xs font-semibold uppercase tracking-[0.15em] px-4 py-2 rounded-full border transition-all duration-200 ${
              activeCategory === "all"
                ? "bg-white text-[#0f0f0f] border-white"
                : "text-white/40 border-white/10 hover:text-white hover:border-white/25"
            }`}
          >
            All
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] px-4 py-2 rounded-full border transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-white text-[#0f0f0f] border-white"
                  : "text-white/40 border-white/10 hover:text-white hover:border-white/25"
              }`}
            >
              <FontAwesomeIcon icon={cat.icon} className="text-[10px]" />
              {cat.title}
            </button>
          ))}
        </div>

        {/* ── SKILL CATEGORIES ── */}
        <div className="space-y-5" role="tabpanel">
          {filteredCategories.map((category) => (
            <section
              key={category.id}
              className="rounded-2xl border border-white/[0.07] bg-white/3 overflow-hidden"
            >
              {/* Category header */}
              <div className="flex items-center gap-4 px-6 py-5 border-b border-white/[0.07]">
                <div className="w-9 h-9 rounded-xl bg-white/6 border border-white/10 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon
                    icon={category.icon}
                    className="text-white/60 text-sm"
                  />
                </div>
                <div>
                  <h2
                    className="text-base font-bold text-white leading-tight"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {category.title}
                  </h2>
                  <p
                    className="text-[11px] text-white/30"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {category.skills.length}{" "}
                    {category.skills.length === 1 ? "skill" : "skills"}
                  </p>
                </div>
              </div>

              {/* Skills grid */}
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 divide-x divide-y divide-white/5">
                {category.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="px-5 py-4 hover:bg-white/4 transition-colors duration-150"
                  >
                    <span
                      className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* ── BOTTOM CTA ── */}
        <section className="mt-24 text-center" aria-label="Call to action">
          <p
            className="text-[11px] uppercase tracking-[0.25em] text-white/25 mb-4 font-semibold"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Ready to build?
          </p>
          <h2
            className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white mb-10 leading-tight"
            style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
          >
            Let's discuss
            <br />
            <span className="text-white/25">your project.</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-white text-[#0f0f0f] font-bold text-sm px-8 py-4 rounded-full hover:bg-white/90 transition-colors"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Get in touch
            <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
          </Link>
        </section>
      </div>
    </main>
  );
};

export default Skills;
