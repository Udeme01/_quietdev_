import { AnchorButton, SocialButton } from "../common/Button";
import portraitImg from "/myself/profile02.jpeg";

const Hero = () => {
  return (
    <section className="bg-transparent h-screen px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center h-[80vh] lg:min-h-screen">
          {/* ── LEFT — Text content ── */}
          <div className="flex flex-col justify-end lg:pb-10 order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg tracking-widest text-white/70 font-semibold">
                I'm
              </span>
            </div>

            {/* Name */}
            <h1 className="text-[clamp(3rem,10vw,8rem)] font-black leading-[0.85] tracking-wider text-white mb-4 font-bebas">
              Udeme Emmanuel
            </h1>

            {/* Divider */}
            <section className="flex items-center mb-6 gap-4">
              <div className="w-20 h-0.5 bg-white/20 rounded-full" />
              <p className="text-2xl tracking-widest text-white/70">
                Lead Frontend Engineer
              </p>
            </section>

            {/* Tagline */}
            <p className="text-white/60 tracking-wide text-sm sm:text-[15px] leading-relaxed max-w-sm mb-10">
              {/* I build fast, beautiful websites and interfaces that people
              actually enjoy using. Based in Nigeria — working worldwide. */}
              I build websites and custom tools that actually work for your
              business. No templates, no glitches—just solid code that handles
              the heavy lifting so you don't have to.
            </p>

            {/* Socials */}
            <SocialButton />
          </div>

          {/* ── RIGHT — Portrait ── */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end items-end">
            {/* Subtle glow behind image */}
            <div className="absolute bottom-0 right-0 w-72 h-72 lg:w-96 lg:h-96 bg-white/4 rounded-full blur-3xl pointer-events-none" />

            {/* Image card */}
            <div className="relative w-70 sm:w-85 lg:w-full lg:max-w-115">
              {/* Portrait */}
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-square hidden lg:block">
                <img
                  src={portraitImg}
                  alt="Udeme Emmanuel"
                  className="w-full h-full object-cover grayscale hover:grayscale transition duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
