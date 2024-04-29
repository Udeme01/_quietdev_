// import profile from "../../../src/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <>
      <section className="leading-6 font-inter font-regular">
        <div className="px-4 py-16 text-left lg:container lg:mx-auto">
          {/* <p className="p-2 text-sm bg-slate-200 mb-2 w-fit">
            Udeme Emmanuel | Frontend Developer
          </p> */}
          {/* <img
            className="rounded-full mx-auto w-full mb-6"
            src={profile}
            alt="profile"
          /> */}
          <h1 className="text-3xl mb-3 font-regular md:text-5xl">
            Frontend Developer
          </h1>
          <p className="leading-7 font-light md:text-lg md:leading-8 lg:w-9/12">
            I am Udeme Emmanuel, your go-to Frontend Developer, passionate about
            crafting user-friendly interfaces that captivate and engage. With a
            knack for translating concepts into pixel-perfect designs, I bring
            concepts to life with sleek designs and smooth interactions.
            Let&apos;s work together to create interfaces that prioritize user
            satisfaction and make a lasting impact.Elevate your online presence
            with seamless, responsive web solutions tailored to your unique
            needs.
          </p>
          <section>
            <div className="my-2">
              <a
                href="https://www.linkedin.com/in/emmanuel-udeme/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-2xl pr-4 mt-4"
                />
              </a>
              <a href="https://github.com/Udeme01" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-2xl pr-4 mt-4"
                />
              </a>
              <a href="https://www.instagram.com/quietdev_udy" target="_blank">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-2xl pr-4 mt-4"
                />
              </a>
              <a href="https://www.twitter.com/quietdev_udy" target="_blank">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-2xl pr-4 mt-4"
                />
              </a>
            </div>
          </section>
          <a href="mailto:quietdevstudio@gmail.com" target="_blank">
            <button
              type="button"
              className="bg-black text-white py-3 px-4 mt-4 hover:border-none dark:bg-neutral-100 dark:text-neutral-900"
            >
              Hire Me
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
