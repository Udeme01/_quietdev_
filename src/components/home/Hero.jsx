import { SocialButton } from "../common/Button";
import { HeroButtons } from "../ui/HeroButtons";
import portraitImg from "/myself/useDp.png";

const Hero = () => {
  return (
    <section className="bg-transparent px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center py-12 min-h-[80vh]">
          {/* ── LEFT — Text content ── */}
          <div className="flex flex-col justify-end order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg tracking-widest text-white/70 font-medium">
                I&apos;m <span className="text-green-700">Udeme Emmanuel</span>{" "}
                aKa theQuietdev
              </span>
            </div>

            {/* Name */}
            {/* text-[clamp(3rem,10vw,8rem)] */}
            <h1 className="text-[clamp(3rem,14vw,4rem)] font-black leading-14 tracking-wider text-white mb-4 font-bebas">
              Building <span className="text-green-700">products</span> that
              <span className="text-green-700"> businesses rely on.</span>
            </h1>

            {/* Divider */}
            <section className="flex items-center mb-6 gap-4">
              <div className="w-20 h-0.5 bg-white/20 rounded-full" />
              <p className="text-xl tracking-widest text-white/70">
                Software Engineer | Product Builder
              </p>
            </section>

            {/* Tagline */}
            <p className="text-white tracking-wide text-sm sm:text-[15px] leading-relaxed max-w-sm mb-10">
              I build software from the ground up—from product strategy and user
              experience to frontend, backend, AI, and cloud deployment. My goal
              is simple: create products that are useful, reliable, and built to
              last.
            </p>

            <HeroButtons />

            {/* Socials */}
            <SocialButton />
          </div>

          {/* ── RIGHT — Portrait ── */}
          <div className="relative order-1 lg:order-2 flex flex-col justify-center lg:justify-end items-center text-center">
            {/* Image card */}
            <div className="relative w-70 sm:w-96 lg:w-full lg:max-w-[700px]">
              {/* Portrait */}
              <div className="rounded-2xl overflow-hidden w-full">
                <img
                  src={portraitImg}
                  alt="Udeme Emmanuel"
                  className="w-full h-full object-cover transition duration-300"
                />
              </div>
            </div>

            <div className="my-3 text-white rounded-2xl py-2 text-left">
              <p className="font-thin text-xs tracking-widest uppercase">
                currently
              </p>
              <h2 className="text-sm ">
                Software Engineer @ ACE Leadership Hub
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
