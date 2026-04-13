import { useState } from "react";

const videoTestimonials = [
  {
    id: 1,
    name: "Kylie Blake",
    role: "Chief Technologist · SubRx",
    thumbnail:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80",
    duration: "0:47",
    tag: "Recommended by Victor",
  },
  {
    id: 2,
    name: "Alex Huang",
    role: "Founder · Launchpad",
    thumbnail:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    duration: "1:03",
    tag: "Recommended by Victor",
  },
  {
    id: 3,
    name: "Chloe Martin",
    role: "Head of Design · Strata",
    thumbnail:
      "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=400&q=80",
    duration: "0:58",
    tag: "Recommended by Victor",
    featured: true,
  },
  {
    id: 4,
    name: "Omar Diallo",
    role: "CEO · NovaBuild",
    thumbnail:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    duration: "1:12",
    tag: "Recommended by Victor",
  },
  {
    id: 5,
    name: "Priya Nair",
    role: "Founder · Vela",
    thumbnail:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    duration: "0:54",
    tag: "Recommended by Victor",
  },
];

const textTestimonials = [
  {
    name: "David Bradley",
    role: "Chief Technologist",
    company: "SubRx",
    initials: "DB",
    color: "from-blue-600 to-blue-400",
    quote:
      "It was our first time taking a B2B website from Figma to Webflow, and Victor nailed our project. His communication was clear and consistent throughout the entire process, and the final result exceeded expectations.",
  },
  {
    name: "Nicolas Villa",
    role: "Founder & CEO",
    company: "Stayvera Inc.",
    initials: "NV",
    color: "from-emerald-600 to-emerald-400",
    quote:
      "I had an excellent experience working with Victor for the Stayvera website! The communication was outstanding, he always kept me informed every step of the way. The final result was beyond my expectations.",
  },
  {
    name: "Tal Orenba",
    role: "Head of Product",
    company: "Violet Blue",
    initials: "TO",
    color: "from-violet-600 to-violet-400",
    quote:
      "Working with Victor has been such a seamless experience. He revamped my blog page on short notice, demonstrating how if I found a design I liked with core, and even took the time to train my team so we could manage things confidently on our own.",
  },
  {
    name: "Josh Kaplan",
    role: "Growth Hacks CEO",
    company: "",
    initials: "JK",
    color: "from-rose-600 to-rose-400",
    quote:
      "Victor did a great job. He was communicative and able to make all the switches with necessary care and fashion. If you're looking for a web developer who is talented, reliable, and a pleasure to work with, Victor is your guy.",
  },
  {
    name: "Shelley Kemmerer",
    role: "Founder",
    company: "EFM",
    initials: "SK",
    color: "from-amber-600 to-amber-400",
    quote:
      "Victor was very eager to support the requests and delivered them in short time. What truly impressed me was his attention to each and every detail I shared with him, and even the smallest imperfection was resolved. I was very pleased and will hire again.",
  },
  {
    name: "Daniel Delgado",
    role: "Troubleshooter Pro",
    company: "",
    initials: "DD",
    color: "from-cyan-600 to-cyan-400",
    quote:
      "Working with Victor on this project was an extremely positive experience. From the start, he demonstrated great technical expertise when it came to using API flows to implement Memberstack into our Webflow platform.",
  },
];

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function VideoCard({ v, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
      style={{
        marginTop: index === 0 ? 0 : `-${Math.min(index * 8, 32)}px`,
        zIndex: videoTestimonials.length - index,
        boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[9/14] sm:aspect-[9/12] overflow-hidden bg-neutral-900">
        <img
          src={v.thumbnail}
          alt={v.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? "scale-105" : "scale-100"}`}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

        {/* Top badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white/80 text-[10px] font-medium px-2 py-1 rounded-full border border-white/10">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3 h-3 text-white/60"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
            </svg>
            {v.tag}
          </div>
        </div>

        {/* Top right menu */}
        <div className="absolute top-3 right-3">
          <div className="bg-black/50 backdrop-blur-sm text-white/60 w-7 h-7 rounded-full flex items-center justify-center border border-white/10 text-xs font-bold">
            ···
          </div>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 px-4 py-4">
          {/* Progress bar */}
          <div className="w-full h-[2px] bg-white/20 rounded-full mb-3">
            <div
              className="h-full bg-white rounded-full"
              style={{ width: `${20 + index * 15}%` }}
            />
          </div>

          {/* Controls row */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                <PlayIcon />
              </button>
              <span className="text-white/60 text-[11px] font-mono">
                {v.duration}
              </span>
            </div>
            <button className="w-7 h-7 rounded-full bg-white/10 border border-white/20 text-white/70 flex items-center justify-center hover:bg-white/20 transition-colors">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-3.5 h-3.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
            </button>
          </div>

          {/* Name */}
          <p className="text-white text-sm font-semibold leading-tight">
            {v.name}
          </p>
          <p className="text-white/50 text-[11px]">{v.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        {/* ── HERO HEADING ── */}
        <div className="mb-16 sm:mb-20">
          <h1
            className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase leading-[0.92] tracking-tighter text-white mb-5"
            style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}
          >
            I've Helped 20+ <span className="text-white/25">Companies</span>
            <br />
            Design, Ship,
            <br />
            and Raise.
          </h1>
          <p className="text-white/40 text-base sm:text-lg">
            Hear it from founders who've raised, and shipped with us.
          </p>
        </div>

        {/* ── VIDEO STACK SECTION ── */}
        <div className="mb-20 sm:mb-28">
          {/* Mobile: single scrollable stack */}
          <div className="block sm:hidden">
            <div className="flex flex-col gap-4">
              {videoTestimonials.map((v) => (
                <div
                  key={v.id}
                  className="rounded-2xl overflow-hidden cursor-pointer"
                  style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.5)" }}
                >
                  <div className="relative aspect-9/10 overflow-hidden bg-neutral-900">
                    <img
                      src={v.thumbnail}
                      alt={v.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/80" />
                    <div className="absolute top-3 left-3">
                      <div className="flex items-center gap-1 bg-black/50 text-white/80 text-[10px] font-medium px-2 py-1 rounded-full border border-white/10">
                        {v.tag}
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-4">
                      <div className="w-full h-0.5 bg-white/20 rounded-full mb-3">
                        <div
                          className="h-full bg-white rounded-full"
                          style={{ width: "30%" }}
                        />
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                          <PlayIcon />
                        </button>
                        <span className="text-white/60 text-[11px] font-mono">
                          {v.duration}
                        </span>
                      </div>
                      <p className="text-white text-sm font-semibold">
                        {v.name}
                      </p>
                      <p className="text-white/50 text-[11px]">{v.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: two-column stacked layout */}
          <div className="hidden sm:grid grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* Left column — stacked overlapping */}
            <div
              className="relative flex flex-col"
              style={{ paddingBottom: "32px" }}
            >
              {videoTestimonials.slice(0, 3).map((v, i) => (
                <VideoCard key={v.id} v={v} index={i} />
              ))}
            </div>

            {/* Right column — stacked overlapping, offset */}
            <div
              className="relative flex flex-col mt-16"
              style={{ paddingBottom: "32px" }}
            >
              {videoTestimonials.slice(3).map((v, i) => (
                <VideoCard key={v.id} v={v} index={i} />
              ))}
              {/* CTA card at bottom of right */}
              <div
                className="relative rounded-2xl border border-white/10 bg-white/4 p-6 flex flex-col justify-between"
                style={{
                  marginTop: `-${Math.min(2 * 8, 32)}px`,
                  zIndex: 0,
                  minHeight: "180px",
                }}
              >
                <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-2">
                  Your story next
                </p>
                <p className="text-white text-xl font-bold leading-snug mb-4">
                  Ready to build something unforgettable?
                </p>
                <button className="self-start text-sm font-semibold text-white bg-white/10 hover:bg-white hover:text-[#0f0f0f] transition-colors px-5 py-2.5 rounded-full border border-white/20">
                  Let's talk →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-white/20 text-xs uppercase tracking-[0.25em] font-semibold">
            Written Reviews
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* ── TEXT TESTIMONIALS GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {textTestimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-white/3 border border-white/8 rounded-2xl p-5 sm:p-6 flex flex-col gap-4 hover:bg-white/6 hover:border-white/15 transition-all duration-300"
              style={{ borderColor: "rgba(255,255,255,0.07)" }}
            >
              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full bg-linear-to-br ${t.color} flex items-center justify-center text-white text-xs font-black shrink-0`}
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-white text-sm font-semibold leading-tight truncate">
                    {t.name}
                  </p>
                  <p className="text-white/35 text-xs truncate">
                    {t.role}
                    {t.company ? ` · ${t.company}` : ""}
                  </p>
                </div>
                {/* Stars */}
                <div className="ml-auto flex gap-0.5 shrink-0">
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

              {/* Divider */}
              <div
                className="h-px bg-white/8"
                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
              />

              {/* Quote */}
              <p className="text-white/55 text-sm leading-relaxed flex-1">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className="mt-20 sm:mt-28 text-center">
          <p className="text-white/30 text-sm uppercase tracking-[0.2em] mb-4">
            Ready to get started?
          </p>
          <h2
            className="text-4xl sm:text-6xl font-black uppercase text-white mb-8 leading-tight"
            style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}
          >
            Let's build your next project
          </h2>
          <button className="text-sm font-bold text-[#0f0f0f] bg-white hover:bg-white/90 transition-colors px-8 py-4 rounded-full">
            Get in touch →
          </button>
        </div>
      </div>
    </main>
  );
}
