import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIALS } from "../../data/socials";

const Hero = () => {
  const ctaButtonStyle = `bg-black text-white py-3 px-4 hover:border-none dark:bg-black dark:text-white cursor-pointer rounded-xl font-bold tracking-wide hover:bg-transparent hover:text-black hover:outline dark:hover:outline-none dark:hover:bg-white dark:hover:text-black transition-all duration-500`;

  const iconStyle =
    "w-10 h-10 py-2 text-2xl bg-black text-white hover:bg-white hover:outline dark:hover:outline-0 hover:text-black/90 transition-all duration-300 rounded";

  return (
    <>
      <section className="leading-6 font-lato">
        <div className="lg:container mx-auto px-4">
          <section className="px-6 min-h-[70vh] flex items-center justify-center bg-[url('/heroImgs/hero05.webp')] bg-cover bg-no-repeat bg-center text-white bg-blend-overlay bg-black/50 relative">
            <section className="flex items-center justify-center flex-col gap-3 absolute left-0 right-0 top-0 bottom-0 px-4">
              <h1 className="text-[6.5vw] font-black uppercase text-center tracking-wide leading-tight">
                Udeme Emmanuel
              </h1>
              <h2 className="w-full max-w-3xl py-1 text-center text-sm sm:text-md md:text-lg font-bold uppercase leading-tight tracking-wider shrink-0">
                Software Engineer || Front end & App Developer || Photographer
              </h2>
            </section>
          </section>

          <section>
            <div className="mt-7 flex items-center gap-3">
              {SOCIALS.map((socials) => {
                const { id, href, target, icon, rel } = socials;
                return (
                  <a key={id} href={href} target={target} rel={rel}>
                    <FontAwesomeIcon icon={icon} className={iconStyle} />
                  </a>
                );
              })}
            </div>
          </section>

          <section className="w-full flex items-center justify-start gap-4 mt-6">
            <a href="mailto:emmanueludeme.fe@gmail.com" target="_blank">
              <button type="button" className={ctaButtonStyle}>
                Hire Me
              </button>
            </a>
            <a href="#" target="_blank">
              <button type="button" className={ctaButtonStyle}>
                Get a Template
              </button>
            </a>
          </section>
        </div>
      </section>
    </>
  );
};

export default Hero;
