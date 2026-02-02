import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIALS } from "../../data";

const Hero = () => {
  return (
    <>
      <section className="leading-6 font-QuickSand font-regular">
        <div className="px-4 py-8 text-left lg:container lg:mx-auto">
          {/* <h1 className="text-3xl mb-3 font-regular text-red-400 md:text-5xl">
            <span className="text-xs font-winkySans block bg-black text-red-400 w-fit px-2 py-1 tracking-widest dark:bg-neutral-900">
              Web3 Dev
            </span>
            Frontend Developer
          </h1> */}
          {/* <p className="leading-7 tracking-wide font-light md:text-lg md:leading-8 lg:w-9/12">
            I am Udeme Emmanuel, your go-to Frontend Developer, passionate about
            crafting user-friendly interfaces that captivate and engage. With a
            knack for translating concepts into pixel-perfect designs, I bring
            concepts to life with sleek designs and smooth interactions.
            Let&apos;s work together to create interfaces that prioritize user
            satisfaction and make a lasting impact.Elevate your online presence
            with seamless, responsive web solutions tailored to your unique
            needs.
          </p> */}

          <section className="px-6 min-h-[70vh] flex items-center justify-center bg-[url('/heroImgs/hero05.webp')] bg-cover bg-no-repeat bg-center text-white bg-blend-overlay bg-black/60">
            <section className="flex items-center justify-center flex-col gap-2">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold uppercase tracking-wider">
                Udeme Emmanuel
              </h1>
              <h2 className="w-full text-center text-lg sm:text-xl font-medium uppercase">
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
                      className="text-2xl mr-5 mt-4 text-red-400 hover:text-red-600"
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
                className="bg-black text-red-400 py-3 px-4 hover:border-none dark:bg-neutral-100 dark:text-neutral-900 hover:bg-red-400 hover:text-white"
              >
                Hire Me
              </button>
            </a>
            <a href="#" target="_blank">
              <button
                type="button"
                className="bg-black text-red-400 py-3 px-4 hover:border-none dark:bg-neutral-100 dark:text-neutral-900 hover:bg-red-400 hover:text-white"
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
