import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PROJECTS_DATA } from "../data/projectsData";

function CheckIcon({ accent }) {
  return (
    <svg
      width="10"
      height="10"
      fill="none"
      stroke={accent}
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export default function CaseStudyPage() {
  const { projectId } = useParams();
  const p = PROJECTS_DATA[projectId];
  const [open, setOpen] = useState(null);
  const ac = p.accentColor || "#ffffff";

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      {/* ── HERO ── */}
      <section className="relative px-5 sm:px-8 md:px-12 pt-24 pb-14 overflow-hidden max-w-6xl mx-auto">
        {/* Back link */}
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-white/30 hover:text-white transition-colors text-xs mb-8 group"
        >
          <svg
            className="w-3 h-3 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 12H5M12 5l-7 7 7 7"
            />
          </svg>
          Back to projects
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {p.tags?.map((t) => (
            <span
              key={t}
              className="text-[10px] font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-full border"
              style={{ color: ac, borderColor: `${ac}40` }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase leading-[0.88] text-white mb-5 font-bebas">
          {p.title}
        </h1>

        {/* Subtitle */}
        <p className="text-white/40 text-base sm:text-lg leading-relaxed max-w-2xl mb-10">
          {p.subtitle}
        </p>

        {/* Meta row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.07] mb-8">
          {[
            ["Client", p.client],
            ["Role", p.role],
            ["Duration", p.duration],
            ["Year", p.year],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/25 font-semibold mb-1">
                {label}
              </p>
              <p className="text-white font-semibold text-sm">{value}</p>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3">
          {p.liveUrl && (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-bold text-xs px-6 py-3 rounded-full transition-opacity hover:opacity-90"
              style={{
                background: ac,
                color: p.accentDark ? "#000" : "#fff",
              }}
            >
              View Live →
            </a>
          )}
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 font-semibold text-xs px-6 py-3 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-colors"
          >
            ← All Projects
          </Link>
        </div>
      </section>

      {/* ── SHARED SECTION WRAPPER ── */}
      {/* 01 OVERVIEW */}
      <section className="px-5 sm:px-8 md:px-12 py-12 border-t border-white/[0.07]">
        <div className="max-w-6xl mx-auto">
          <SectionLabel
            number="01"
            label="Overview"
            title="Project overview & brief"
            accent={ac}
          />
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div>
              <p className="text-white/50 text-sm leading-relaxed">
                {p.overview}
              </p>
              {p.overviewExtra && (
                <p className="text-white/30 text-xs leading-relaxed mt-3">
                  {p.overviewExtra}
                </p>
              )}
            </div>
            <div
              className="rounded-2xl bg-white/3 p-6"
              style={{ borderLeft: `2px solid ${ac}` }}
            >
              <p
                className="text-[10px] uppercase tracking-[0.25em] font-semibold mb-4"
                style={{ color: ac }}
              >
                Project goals
              </p>
              {p.goals?.map((g, i) => (
                <div
                  key={i}
                  className="flex gap-3 items-start text-xs text-white/50 mb-3"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-1 shrink-0"
                    style={{ background: ac }}
                  />
                  {g}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 PROBLEM */}
      <section className="px-5 sm:px-8 md:px-12 py-12 border-t border-white/[0.07] bg-white/2">
        <div className="max-w-6xl mx-auto">
          <SectionLabel
            number="02"
            label="Problem"
            title="The problem & challenge"
            accent={ac}
          />
          <div
            className="rounded-2xl bg-white/3 p-6 mb-6 mt-6"
            style={{ borderLeft: `2px solid ${ac}` }}
          >
            <p className="text-lg font-bold text-white/80 leading-snug tracking-wider font-bebas">
              "{p.problemStatement}"
            </p>
          </div>
          <p className="text-white/50 text-sm leading-relaxed mb-6">
            {p.problemDetail}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {p.challenges?.map((c, i) => (
              <div
                key={i}
                className="bg-white/3 border border-white/[0.07] rounded-2xl p-5"
              >
                <p
                  className="text-3xl font-black mb-2 opacity-10 font-bebas"
                  style={{ color: ac }}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="font-bold text-sm text-white mb-1">{c.title}</p>
                <p className="text-xs text-white/40 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 ROLE */}
      <section className="px-5 sm:px-8 md:px-12 py-12 border-t border-white/[0.07]">
        <div className="max-w-6xl mx-auto">
          <SectionLabel
            number="03"
            label="My Role"
            title="Role & responsibilities"
            accent={ac}
          />
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div>
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                {p.roleDescription}
              </p>
              {p.responsibilities?.map((r, i) => (
                <div
                  key={i}
                  className="flex gap-3 items-center text-xs text-white/50 py-2.5 border-b border-white/6"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: ac }}
                  />
                  {r}
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-white/3 border border-white/[0.07] p-6">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/25 font-semibold mb-5">
                Tech Stack
              </p>
              {p.techStack?.map((t, i) => (
                <div
                  key={i}
                  className={
                    i < p.techStack.length - 1
                      ? "border-b border-white/6 pb-3 mb-3"
                      : ""
                  }
                >
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/25 mb-0.5">
                    {t.category}
                  </p>
                  <p className="text-white font-semibold text-sm">{t.tools}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04 FEATURES */}
      <section className="px-5 sm:px-8 md:px-12 py-12 border-t border-white/[0.07] bg-white/2">
        <div className="max-w-6xl mx-auto">
          <SectionLabel
            number="04"
            label="Features"
            title="Key features built"
            accent={ac}
          />
          <div className="mt-6 space-y-3">
            {p.features?.map((f, i) => (
              <div
                key={i}
                className="flex gap-4 items-start bg-white/3 border border-white/[0.07] rounded-2xl p-5"
              >
                <div
                  className="w-9 h-9 flex items-center justify-center shrink-0 rounded-xl text-[10px] font-black"
                  style={{ background: `${ac}20`, color: ac }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <p className="font-bold text-sm text-white mb-1">{f.title}</p>
                  <p className="text-xs text-white/40 leading-relaxed">
                    {f.desc}
                  </p>
                  {f.tech && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {f.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-semibold uppercase tracking-[0.12em] border px-2 py-0.5 rounded-full"
                          style={{ color: ac, borderColor: `${ac}35` }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 CHALLENGES */}
      <section className="px-5 sm:px-8 md:px-12 py-12 border-t border-white/[0.07]">
        <div className="max-w-6xl mx-auto">
          <SectionLabel
            number="05"
            label="Challenges"
            title="Challenges & how I solved them"
            accent={ac}
          />
          <div className="mt-6 space-y-2">
            {p.challengeSolutions?.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/[0.07] bg-white/3 overflow-hidden"
              >
                <button
                  className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-white/3 transition-colors"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center shrink-0 rounded-lg text-[10px] font-black"
                    style={{ background: `${ac}20`, color: ac }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <span className="flex-1 font-semibold text-sm text-white">
                    {item.challenge}
                  </span>
                  <span className="text-white/25 text-lg leading-none">
                    {open === i ? "−" : "+"}
                  </span>
                </button>
                {open === i && (
                  <div className="border-t border-white/[0.07] px-5 py-5 grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-white/25 font-semibold mb-2">
                        The challenge
                      </p>
                      <p className="text-xs text-white/45 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                    <div>
                      <p
                        className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-2"
                        style={{ color: ac }}
                      >
                        My solution
                      </p>
                      <p className="text-xs text-white/45 leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 RESULTS */}
      <section className="px-5 sm:px-8 md:px-12 py-12 border-t border-white/[0.07] bg-white/2">
        <div className="max-w-6xl mx-auto">
          <SectionLabel
            number="06"
            label="Results"
            title="Results & outcome"
            accent={ac}
          />
          <p className="text-white/50 text-sm leading-relaxed mt-6 mb-6">
            {p.resultsContext}
          </p>
          {p.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {p.metrics.map((m, i) => (
                <div
                  key={i}
                  className="bg-white/3 border border-white/[0.07] rounded-2xl p-5 text-center"
                  style={{ borderTop: `2px solid ${ac}` }}
                >
                  <p className="text-3xl font-black mb-1" style={{ color: ac }}>
                    {m.value}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/30">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          )}
          <div className="grid md:grid-cols-2 gap-3">
            {p.outcomes?.map((o, i) => (
              <div
                key={i}
                className="flex gap-3 items-start bg-white/3 border border-white/[0.07] rounded-xl p-4"
              >
                <div
                  className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 rounded"
                  style={{ background: `${ac}20` }}
                >
                  <CheckIcon accent={ac} />
                </div>
                <p className="text-xs text-white/45 leading-relaxed">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 LEARNINGS */}
      <section className="px-5 sm:px-8 md:px-12 py-12 border-t border-white/[0.07]">
        <div className="max-w-6xl mx-auto">
          <SectionLabel
            number="07"
            label="Learnings"
            title="What I learned"
            accent={ac}
          />
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {p.learnings?.map((l, i) => (
              <div
                key={i}
                className="bg-white/3 border border-white/[0.07] rounded-2xl p-5"
                style={{ borderTop: `2px solid ${ac}` }}
              >
                <p className="font-bold text-sm text-white mb-2">{l.title}</p>
                <p className="text-xs text-white/40 leading-relaxed">
                  {l.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="border-t border-white/[0.07] px-5 sm:px-8 md:px-12 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/25 font-semibold mb-2">
              Like what you see?
            </p>
            <h2 className="text-4xl sm:text-5xl font-black uppercase text-white leading-tight font-bebas">
              Let's work
              <br />
              <span className="text-white/25">together.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {p.liveUrl && (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-bold text-xs px-6 py-3.5 rounded-full transition-opacity hover:opacity-90"
                style={{
                  background: ac,
                  color: p.accentDark ? "#000" : "#fff",
                }}
              >
                View Live →
              </a>
            )}
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 font-semibold text-xs px-6 py-3.5 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-colors"
            >
              ← All Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// ─── SHARED SECTION LABEL COMPONENT ──────────────────────────────────────────
function SectionLabel({ number, label, title, accent }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1.5">
        <div className="w-4 h-px" style={{ background: accent }} />
        <span
          className="text-[10px] font-semibold uppercase tracking-[0.3em]"
          style={{ color: accent }}
        >
          {number} — {label}
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-black uppercase text-white leading-tight font-bebas">
        {title}
      </h2>
    </div>
  );
}
