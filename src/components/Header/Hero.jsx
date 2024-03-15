// import profile from "../../../src/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <>
      <section className="leading-6 font-inter font-regular">
        <div className="px-4 py-16 text-left sm:bg-slate-400 md:bg-slate-700 lg:bg-red-300 lg:container lg:mx-auto">
          {/* <p className="p-2 text-sm bg-slate-200 mb-2 w-fit">
            Udeme Emmanuel | Frontend Developer
          </p> */}
          {/* <img
            className="rounded-full mx-auto w-full mb-6"
            src={profile}
            alt="profile"
          /> */}
          <h1 className="text-3xl mb-3 font-regular">Frontend Developer</h1>
          <p className="lg:w-1/2 leading-7">
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
            <div>
              <a href="www.linkedin.com/in/emmanuel-udeme">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-2xl pr-4 mt-4"
                />
              </a>
              <a href="https://github.com/Udeme01">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-2xl pr-4 mt-4"
                />
              </a>
              <a href="https://www.instagram.com/quietdev_udy">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-2xl pr-4 mt-4"
                />
              </a>
            </div>
          </section>
          <button
            type="button"
            className="border border-black py-2 px-4 mt-4 bg-slate-100 hover:bg-slate-200 hover:border-none"
          >
            Hire Me
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
