import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PROJECTS_DATA } from "../data/projectsData";
import Sectionheader from "../components/common/Sectionheader";

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

function SectionHeader({ label, title, accent }) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-5 h-px" style={{ background: accent }} />
        <span
          className="font-mono text-[9px] tracking-[0.3em] uppercase font-bold"
          style={{ color: accent }}
        >
          {label}
        </span>
      </div>
      <h2 className="text-2xl font-black tracking-tight text-black">{title}</h2>
    </div>
  );
}

export default function CaseStudyPage() {
  const { projectId } = useParams();
  const p = PROJECTS_DATA[projectId];
  const [open, setOpen] = useState(null);

  if (!p)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#0A0A0A]">
        <span className="text-5xl font-black text-white">404</span>
        <span className="text-white/50 text-sm">Project not found</span>
        <Link
          to="/portfolio"
          className="font-mono text-[11px] tracking-[0.2em] uppercase"
          style={{ color: "#D4AF37" }}
        >
          ← Back to projects
        </Link>
      </div>
    );

  const ac = p.accentColor || "#000";

  return (
    <div className="bg-white text-black">
      {/* HERO */}
      <section
        className="relative px-8 md:px-12 pt-12 pb-10 overflow-hidden"
        style={{ background: p.heroBg || "#0A0A0A" }}
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <Link
            to="/portfolio"
            className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/30 hover:text-white/70 transition-colors mb-5 inline-block"
          >
            ← Back to projects
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {p.tags?.map((t) => (
              <span
                key={t}
                className="font-mono text-[9px] tracking-[0.18em] uppercase font-bold px-2.5 py-1 border"
                style={{ color: ac, borderColor: `${ac}55` }}
              >
                {t}
              </span>
            ))}
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-white leading-[0.9] tracking-tight mb-3">
            {p.title}
          </h1>
          <p className="text-white/45 text-sm leading-relaxed max-w-xl mb-7">
            {p.subtitle}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-5 mb-5">
            {[
              ["Client", p.client],
              ["Role", p.role],
              ["Duration", p.duration],
              ["Year", p.year],
            ].map(([l, v]) => (
              <div key={l}>
                <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-white/25 mb-1">
                  {l}
                </p>
                <p className="text-white font-bold text-sm">{v}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {p.liveUrl && (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-[0.18em] uppercase font-black px-6 py-3 no-underline"
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
              className="font-mono text-[10px] tracking-[0.18em] uppercase font-bold px-6 py-3 border border-white/15 text-white/40 hover:text-white hover:border-white/40 transition-colors"
            >
              ← All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* 01 OVERVIEW */}
      <section className="px-8 md:px-12 py-10 border-t border-black/6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="01 — Overview"
            title="Project overview & brief"
            accent={ac}
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-black/55 leading-relaxed">
                {p.overview}
              </p>
              {p.overviewExtra && (
                <p className="text-xs text-black/40 leading-relaxed mt-3">
                  {p.overviewExtra}
                </p>
              )}
            </div>
            <div
              className="p-5 bg-black/[0.02]"
              style={{ borderLeft: `3px solid ${ac}` }}
            >
              <p
                className="font-mono text-[9px] tracking-[0.25em] uppercase font-bold mb-3"
                style={{ color: ac }}
              >
                Project goals
              </p>
              {p.goals?.map((g, i) => (
                <div
                  key={i}
                  className="flex gap-2.5 items-start text-xs text-black/55 mb-2.5"
                >
                  <div
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
      <section className="px-8 md:px-12 py-10 border-t border-black/6 bg-[#F8F8F8]">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="02 — Problem"
            title="The problem & challenge"
            accent={ac}
          />
          <div
            className="p-5 bg-white mb-5"
            style={{ borderLeft: `3px solid ${ac}` }}
          >
            <p
              className="text-lg font-black italic leading-snug"
              style={{ fontFamily: "Georgia,serif" }}
            >
              "{p.problemStatement}"
            </p>
          </div>
          <p className="text-sm text-black/55 leading-relaxed mb-6">
            {p.problemDetail}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {p.challenges?.map((c, i) => (
              <div
                key={i}
                className="bg-white border border-black/8 p-5 rounded-lg"
              >
                <div
                  className="text-3xl font-black font-mono mb-2"
                  style={{ color: ac, opacity: 0.12 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="font-bold text-sm mb-1">{c.title}</p>
                <p className="text-xs text-black/45 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 ROLE */}
      <section className="px-8 md:px-12 py-10 border-t border-black/6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="03 — My Role"
            title="Role & responsibilities"
            accent={ac}
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-black/55 leading-relaxed mb-4">
                {p.roleDescription}
              </p>
              {p.responsibilities?.map((r, i) => (
                <div
                  key={i}
                  className="flex gap-2.5 items-center text-xs text-black/55 py-2 border-b border-black/5"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: ac }}
                  />
                  {r}
                </div>
              ))}
            </div>
            <div className="bg-[#0A0A0A] p-6">
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/30 mb-4">
                Tech Stack
              </p>
              {p.techStack?.map((t, i) => (
                <div
                  key={i}
                  className={
                    i < p.techStack.length - 1
                      ? "border-b border-white/6 pb-2.5 mb-2.5"
                      : ""
                  }
                >
                  <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-white/30 mb-0.5">
                    {t.category}
                  </p>
                  <p className="text-white font-bold text-sm">{t.tools}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04 FEATURES */}
      <section className="px-8 md:px-12 py-10 border-t border-black/6 bg-[#F8F8F8]">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="04 — Features"
            title="Key features built"
            accent={ac}
          />
          {p.features?.map((f, i) => (
            <div
              key={i}
              className="bg-white border border-black/8 p-4 flex gap-4 items-start mb-2"
            >
              <div
                className="w-9 h-9 flex items-center justify-center shrink-0 font-mono text-[10px] font-black"
                style={{ background: `${ac}18`, color: ac }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <p className="font-bold text-sm mb-1">{f.title}</p>
                <p className="text-xs text-black/50 leading-relaxed">
                  {f.desc}
                </p>
                {f.tech && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {f.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[8px] tracking-[0.12em] uppercase border px-2 py-0.5"
                        style={{ color: ac, borderColor: `${ac}40` }}
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
      </section>

      {/* 05 CHALLENGES */}
      <section className="px-8 md:px-12 py-10 border-t border-black/6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="05 — Challenges"
            title="Challenges & how I solved them"
            accent={ac}
          />
          {p.challengeSolutions?.map((item, i) => (
            <div key={i} className="bg-white border border-black/8 mb-2">
              <button
                className="w-full flex items-center gap-3 px-4 py-3.5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div
                  className="w-8 h-8 flex items-center justify-center shrink-0 font-mono text-[10px] font-black"
                  style={{ background: `${ac}18`, color: ac }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className="flex-1 font-black text-sm text-black">
                  {item.challenge}
                </span>
                <span className="text-black/25 text-lg">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="border-t border-black/5 px-4 pb-4 pt-3 grid md:grid-cols-2 gap-5">
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.22em] uppercase font-bold text-black/30 mb-2">
                      The challenge
                    </p>
                    <p className="text-xs text-black/55 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                  <div>
                    <p
                      className="font-mono text-[9px] tracking-[0.22em] uppercase font-bold mb-2"
                      style={{ color: ac }}
                    >
                      My solution
                    </p>
                    <p className="text-xs text-black/55 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 06 RESULTS */}
      <section className="px-8 md:px-12 py-10 border-t border-black/6 bg-[#F8F8F8]">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="06 — Results"
            title="Results & outcome"
            accent={ac}
          />
          <p className="text-sm text-black/55 leading-relaxed mb-6">
            {p.resultsContext}
          </p>
          {p.metrics && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {p.metrics.map((m, i) => (
                <div
                  key={i}
                  className="bg-white p-4 text-center"
                  style={{ borderTop: `2px solid ${ac}` }}
                >
                  <div
                    className="text-3xl font-black mb-1"
                    style={{ color: ac, fontFamily: "Georgia,serif" }}
                  >
                    {m.value}
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-black/40">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="grid md:grid-cols-2 gap-3">
            {p.outcomes?.map((o, i) => (
              <div
                key={i}
                className="flex gap-3 items-start bg-white border border-black/8 p-3.5"
              >
                <div
                  className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: `${ac}15` }}
                >
                  <CheckIcon accent={ac} />
                </div>
                <p className="text-xs text-black/60 leading-relaxed">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 LEARNINGS */}
      <section className="px-8 md:px-12 py-10 border-t border-black/6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="07 — Learnings"
            title="What I learned"
            accent={ac}
          />
          <div className="grid md:grid-cols-3 gap-4">
            {p.learnings?.map((l, i) => (
              <div
                key={i}
                className="bg-[#F8F8F8] p-5"
                style={{ borderTop: `2px solid ${ac}` }}
              >
                <p className="font-bold text-sm mb-2">{l.title}</p>
                <p className="text-xs text-black/50 leading-relaxed">
                  {l.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="bg-[#0A0A0A] px-8 md:px-12 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-mono text-[9px] tracking-[0.28em] uppercase text-white/22 mb-1">
            Like what you see?
          </p>
          <h2 className="text-2xl font-black text-white">
            Let's work together.
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {p.liveUrl && (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-[0.18em] uppercase font-black px-6 py-3 no-underline"
              style={{ background: ac, color: p.accentDark ? "#000" : "#fff" }}
            >
              View Live →
            </a>
          )}
          <Link
            to="/portfolio"
            className="font-mono text-[10px] tracking-[0.18em] uppercase font-bold px-6 py-3 border border-white/15 text-white/40 hover:text-white hover:border-white/35 transition-colors"
          >
            ← All Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
