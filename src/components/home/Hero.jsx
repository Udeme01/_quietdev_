import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIALS } from "../../data/socials";

const Hero = () => {
  return (
    <>
      <section className="leading-6 font-QuickSand font-regular">
        <div className="px-4 py-8 text-left lg:container lg:mx-auto">
          <section className="px-6 min-h-[70vh] flex items-center justify-center bg-[url('/heroImgs/hero05.webp')] bg-cover bg-no-repeat bg-center text-white bg-blend-overlay bg-black/60 relative">
            <section className="flex items-center justify-center flex-col gap-3 absolute left-0 right-0 top-0 bottom-0 px-4">
              <h1 className="text-[6.5vw] font-bold uppercase text-center tracking-wide leading-tight">
                Udeme Emmanuel
              </h1>
              <h2 className="w-full max-w-3xl py-1 text-center text-sm sm:text-md md:text-lg font-medium uppercase leading-tight tracking-wider shrink-0">
                Software Engineer || Front end & App Developer || Photographer
              </h2>
            </section>
          </section>

          <section>
            <div className="my-2">
              {SOCIALS.map((socials) => {
                const { id, href, target, icon, rel } = socials;
                return (
                  <a key={id} href={href} target={target} rel={rel}>
                    <FontAwesomeIcon
                      icon={icon}
                      className="text-2xl mr-5 mt-4 text-red-400 hover:text-red-600 lg:hover:scale-125 lg:transition-all lg:duration-500 lg:ease-in-out"
                    />
                  </a>
                );
              })}
            </div>
          </section>

          <section className="w-full flex items-center justify-start gap-4 mt-6">
            <a href="mailto:quietdevstudio@gmail.com" target="_blank">
              <button
                type="button"
                className="bg-black outline text-white py-3 px-4 hover:border-none dark:bg-black dark:text-white hover:text-white cursor-pointer lg:hover:scale-110 lg:transition-all lg:duration-500 lg:ease-in-out rounded-xl"
              >
                Hire Me
              </button>
            </a>
            <a href="#" target="_blank">
              <button
                type="button"
                className="bg-black outline text-white py-3 px-4 hover:border-none dark:bg-black dark:text-white hover:text-white cursor-pointer lg:hover:scale-110 lg:transition-all lg:duration-500 lg:ease-in-out rounded-xl"
              >
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
