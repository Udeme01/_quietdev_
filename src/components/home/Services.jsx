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
    label: "UX/UI Design",
    tag: "DESIGN",
    description:
      "User Experience Design and User Interface Design are some of the most important skill-sets that help make an app or web-app stand out from the crowd. I ensure your designs are intuitive, compelling, and memorable — that makes all the difference.",
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
    label: "Website Development",
    tag: "WEBFLOW",
    description:
      "I design and build fast, scalable, and conversion-focused websites using Webflow. From Figma to live site, I ensure clean structure, responsive design, and easy updates, so your website not only looks great but works for your business.",
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
    label: "Website Development",
    tag: "FRAMER",
    description:
      "I create interactive, visually stunning websites with Framer, perfect for startups and brands that want bold design, smooth animations, and flexibility. With Framer, I bring ideas to life quickly, blending creativity with performance.",
  },
];

export function WhatIDo() {
  return (
    <section className="bg-transparent py-20 px-6 md:px-12 lg:px-24">
      <div className="lg:container mx-auto">
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
