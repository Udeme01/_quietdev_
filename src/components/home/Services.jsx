import { useState } from "react";
import Sectionheader from "../common/Sectionheader";

// ─── WHAT I DO ───────────────────────────────────────────────────────────────

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path
          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Interface Design",
    tag: "UI • UX • Layout",
    description:
      "I design clean and user-friendly interfaces directly during development, ensuring every layout is simple, functional, and built for real users. My focus is on clarity, usability, and delivering a smooth experience without unnecessary complexity.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"
          fill="currentColor"
        />
      </svg>
    ),
    label: "Frontend Development",
    tag: "React • Next.js",
    description:
      "I build fast, responsive, and scalable user interfaces using modern technologies like React and Next.js, with a strong focus on performance and clean architecture, so your website not only looks great but works for your business",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "API Integration",
    tag: "REST API • Fetch/Axios",
    description:
      "I connect applications to real-world data by integrating APIs, handling authentication, and managing dynamic content so products work seamlessly.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Product Development",
    tag: "MVP • Startup",
    description:
      "I turn ideas into functional digital products, focusing on building practical solutions that are ready for real users, not just concepts.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Performance Optimization",
    tag: "SEO • Best Practices",
    description:
      "I improve website speed and structure to ensure better user experience, responsiveness, and overall performance.",
  },
];

export function WhatIDo() {
  return (
    <section className="bg-transparent py-20 px-6 md:px-12 lg:px-24">
      <div className="lg:max-w-350 mx-auto">
        {/* Heading */}

        <Sectionheader headerTitle="What I Do" />

        {/* Services */}
        <div className="flex flex-col gap-0">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative border-t border-white/10 py-10 md:py-12 flex flex-col md:flex-row lg:items-start gap-6 md:gap-10 hover:bg-white/3 transition-all duration-300 cursor-default px-2"
            >
              {/* Icon bubble */}
              <div className="shrink-0 w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#111] transition-all duration-300">
                {s.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    {s.label}
                  </h3>
                  <span className="text-[10px] font-black tracking-[0.2em] px-2.5 py-1 rounded-full border border-white/20 text-white/50 uppercase">
                    {s.tag}
                  </span>
                </div>
                <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-xl">
                  {s.description}
                </p>
              </div>

              {/* Arrow on hover */}
              <div className="hidden md:flex items-center self-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white/40">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
