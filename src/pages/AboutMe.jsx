import { SendMe } from "../components/common/SendMe";
import experimentImg from "/projectImg/exp.webp";
import responsiveImg from "/projectImg/res.webp";
import helpImg from "/projectImg/help.webp";

const AboutMe = () => {
  return (
    <main className="bg-transparent py-20 px-6 md:px-12 lg:px-24">
      <section className="lg:container mx-auto">
        {/* ── HERO ── */}
        <section className="pt-24 pb-16">
          {/* Eyebrow */}
          <span className="text-[11px] uppercase tracking-[0.3em] text-white/30 font-semibold mb-4 block">
            About Me
          </span>

          {/* Hero heading */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase leading-[0.92] text-white mb-6 font-bebas">
            Not just a developer.
            <br />
            <span className="text-white/25">A craftsman</span>
            <br />
            who ships.
          </h1>

          {/* Intro paragraph */}
          <p className="text-white/50 text-base sm:text-lg leading-relaxed max-w-2xl mt-6">
            I'm <span className="text-white font-medium">Udeme Emmanuel</span>,
            a frontend developer with a sharp eye for design and a genuine
            obsession with crafting experiences that feel effortless. I
            specialise in building seamless, high-quality interfaces that
            captivate users and elevate brands.
          </p>
        </section>

        {/* ── VIDEO ── */}
        <div className="mb-24">
          <div
            className="rounded-2xl overflow-hidden border border-white/8"
            style={{ borderColor: "rgba(255,255,255,0.07)" }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              controls={false}
              className="w-full"
            >
              <source src="https://res.cloudinary.com/djfkvmc4f/video/upload/v1770028614/coder-03_mkuily.mp4" />
            </video>
          </div>
        </div>

        {/* ── CONTENT SECTIONS ── */}
        <div className="space-y-6 mb-24">
          {/* Block 1 — Experience */}
          <div
            className="rounded-2xl bg-white/3 border border-white/8 overflow-hidden"
            style={{ borderColor: "rgba(255,255,255,0.07)" }}
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 shrink-0">
                <img
                  src={experimentImg}
                  alt="Experience"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/25 mb-4 font-semibold">
                  Experience
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-tight text-white mb-4 font-bebas">
                  Almost 2 years in.
                  <br />
                  <span className="text-white/30">And still hungry.</span>
                </h2>
                <p className="text-white/50 text-sm sm:text-base leading-relaxed">
                  In nearly two years, I've had the privilege of working across
                  a wide range of projects — from corporate websites to
                  e-commerce platforms and everything in between. Each project
                  has sharpened my skills, deepened my understanding of what
                  users need, and confirmed one thing: great work comes from
                  caring about the details.
                </p>
              </div>
            </div>
          </div>

          {/* Block 2 — Responsive Design */}
          <div
            className="rounded-2xl bg-white/3 border border-white/8 overflow-hidden"
            style={{ borderColor: "rgba(255,255,255,0.07)" }}
          >
            <div className="flex flex-col lg:flex-row-reverse">
              <div className="lg:w-1/2 shrink-0">
                <img
                  src={responsiveImg}
                  alt="Responsive Design"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/25 mb-4 font-semibold">
                  Responsive Design
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-tight text-white mb-4 font-bebas">
                  Every screen.
                  <br />
                  <span className="text-white/30">Every device.</span>
                </h2>
                <p className="text-white/50 text-sm sm:text-base leading-relaxed">
                  A website that only works on desktop is half a website. I
                  build with fluid grids, flexible images, and precise media
                  queries so every layout responds gracefully — whether
                  someone's on a 4K monitor or a 5-year-old phone. Great design
                  shouldn't be a privilege reserved for big screens.
                </p>
              </div>
            </div>
          </div>

          {/* Block 3 — CTA / SendMe */}
          <div
            className="rounded-2xl bg-white/3 border border-white/8 overflow-hidden"
            style={{ borderColor: "rgba(255,255,255,0.07)" }}
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 shrink-0">
                <img
                  src={helpImg}
                  alt="Let's work together"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/25 mb-4 font-semibold">
                  Work With Me
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-tight text-white mb-4 font-bebas">
                  Got a project
                  <br />
                  <span className="text-white/30">in mind?</span>
                </h2>
                <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-6">
                  Whether you need a full website built from scratch, a Figma
                  design brought to life, or an existing site cleaned up — I'm
                  ready. Let's build something worth showing off.
                </p>
                <SendMe />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
// max-w-5xl mx-auto px-5 sm:px-8
