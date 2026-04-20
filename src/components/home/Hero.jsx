import { AnchorButton, SocialButton } from "../common/Button";
import portraitImg from "/myself/portrait.jpg";

const Hero = () => {
  return (
    <section className="bg-transparent py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-350 mx-auto">
        {/* <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-20 pb-20"> */}
        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end min-h-[85vh]">
          {/* ── LEFT — Text content ── */}
          <div className="flex flex-col justify-end lg:pb-10 order-2 lg:order-1">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-white/30 font-semibold">
                Available for work
              </span>
            </div>

            {/* Name */}
            <h1 className="text-[clamp(3rem,12vw,8rem)] font-black uppercase leading-[0.85] text-white mb-6 font-bebas">
              Udeme
              <br />
              <span className="text-white/25">Emmanuel</span>
            </h1>

            {/* Divider */}
            <div className="w-16 h-0.5 bg-white/20 mb-6 rounded-full" />

            {/* Role tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Custom Web Design",
                "Business Dashboards",
                "Secure Platforms",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="text-[11px] uppercase tracking-[0.15em] text-white/40 font-semibold px-3 py-1.5 rounded-full border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Tagline */}
            <p className="text-white/40 text-sm sm:text-[15px] leading-relaxed max-w-sm mb-10">
              {/* I build fast, beautiful websites and interfaces that people
              actually enjoy using. Based in Nigeria — working worldwide. */}
              I build websites and custom tools that actually work for your
              business. No templates, no glitches—just solid code that handles
              the heavy lifting so you don't have to. Need a site? DM me.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <AnchorButton href="https://wa.me/2347046780531?text=Hi%20Udeme,%20I'm%20interested%20in%20building%20a%20website!">
                Send a DM!
              </AnchorButton>
              <a
                href="/resume/emma.resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-white/40 hover:text-white transition-colors underline underline-offset-4"
              >
                Resume / CV
              </a>
            </div>

            {/* Socials */}
            <SocialButton />
          </div>

          {/* ── RIGHT — Portrait ── */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end items-end">
            {/* Subtle glow behind image */}
            <div className="absolute bottom-0 right-0 w-72 h-72 lg:w-96 lg:h-96 bg-white/4 rounded-full blur-3xl pointer-events-none" />

            {/* Image card */}
            <div className="relative w-70 sm:w-85 lg:w-full lg:max-w-115">
              {/* Floating label — top left */}
              <div className="absolute -top-4 -left-4 z-10 bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-2.5">
                <p className="text-[10px] text-white/30 uppercase tracking-widest mb-0.5">
                  Based in
                </p>
                <p className="text-white text-xs font-semibold">Nigeria 🇳🇬</p>
              </div>

              {/* Floating stat — bottom right */}
              <div className="absolute -bottom-4 -right-4 z-10 bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-2.5">
                <p className="text-[10px] text-white/30 uppercase tracking-widest mb-0.5">
                  Projects
                </p>
                <p className="text-white text-xs font-semibold">5+ shipped</p>
              </div>

              {/* Portrait */}
              {/* <div className="rounded-2xl overflow-hidden border border-white/10 aspect-3/4">
                <img
                  src={portraitImg}
                  alt="Udeme Emmanuel"
                  className="w-full h-full object-cover object-top"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
