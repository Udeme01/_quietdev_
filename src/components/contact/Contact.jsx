import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div>
      <Header />
      <section className="mx-4 text-center px-4 py-16 pb-8 bg-gray-200 lg:container lg:mx-auto dark:bg-neutral-800 dark:text-neutral-100">
        <div className="lg:w-3/5 lg:mx-auto">
          <h1 className="font-regular text-3xl my-3 md:text-4xl">
            <span className="text-sm block p-1">Let&apos; Chat</span>
            Ready to Embark on a Project?
          </h1>
          <p className="text-center max-w-screen-md mx-auto mt-2 leading-7 font-light md:text-lg md:leading-8">
            Welcome to the realm where requirements hold as much significance as
            the desired outcomes. Whether you&apos;re a fledgling startup
            establishing your online presence or a seasoned enterprise aiming to
            enhance your brand&apos;s visibility and impact, my expertise and
            dedication remain unwavering, ready to tailor solutions that align
            with your specific goals and aspirations. I deliver impactful
            results that drive the success of your project from start to finish.
            Let&apos;s work together to transform your vision into reality with
            a design that truly stands out and makes a meaningful impact.
          </p>
          <form className="mt-10">
            <div>
              <div className="my-4">
                <input
                  className="w-full p-2"
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="First name"
                  required
                />
              </div>
              <div className="my-4">
                <input
                  className="w-full p-2"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <textarea
                  className="w-full p-2"
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Message"
                  required
                />
              </div>
            </div>
            <button
              className="bg-white px-4 py-2 mt-4 text-xl uppercase dark:bg-neutral-900"
              type="submit"
            >
              submit
            </button>
          </form>
        </div>
      </section>

      {/* socials */}
      <section className="text-left my-6 lg:container lg:mx-auto lg:grid lg:grid-cols-3">
        {/* LinkedIn */}
        <div className="font-inter">
          <a href="https://www.linkedin.com/in/emmanuel-udeme/" target="_blank">
            <div className="m-4 p-5 flex justify-start gap-4 bg-gray-200 text-black shadow-md lg:m-0 dark:bg-neutral-800 dark:text-neutral-100">
              <div>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-2xl p-3 bg-black text-white"
                />
              </div>
              <div className="flex justify-center align-center flex-col w-full">
                <h2 className="font-medium">LinkedIn</h2>
                <p className="font-light text-md">
                  Take a look at my linkedin profile.
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* GitHub */}
        <div className="font-inter">
          <a href="https://github.com/Udeme01" target="_blank">
            <div className="m-4 p-5 flex justify-start gap-4 bg-gray-200 text-black shadow-md lg:mr-0 lg:mt-0 dark:bg-neutral-800 dark:text-neutral-100">
              <div>
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-2xl p-3 bg-black text-white"
                />
              </div>
              <div className="flex justify-center align-center flex-col w-full">
                <h2 className="font-medium">GitHub</h2>
                <p className="font-light text-md">
                  What&apos;s history without github? All Time Project&apos;s
                  here.
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Instagram */}
        <div className="font-inter">
          <a href="https://www.instagram.com/quietdev_udy/" target="_blank">
            <div className="m-4 p-5 flex justify-start gap-4 bg-gray-200 text-black shadow-md lg:mr-0 lg:mt-0 dark:bg-neutral-800 dark:text-neutral-100">
              <div>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-2xl p-3 bg-black text-white"
                />
              </div>
              <div className="flex justify-center align-center flex-col w-full">
                <h2 className="font-medium">Instagram</h2>
                <p className="font-light text-md">
                  Follow through the journey, and experience.
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Email */}
        <div className="font-inter">
          <a href="mailto:quietdevstudio@gmail.com" target="_blank">
            <div className="m-4 p-5 flex justify-start gap-4 bg-gray-200 text-black shadow-md lg:ml-0 lg:mb-0 dark:bg-neutral-800 dark:text-neutral-100">
              <div>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-2xl p-3 bg-black text-white"
                />
              </div>
              <div className="flex justify-center align-center flex-col w-full">
                <h2 className="font-medium">Email</h2>
                <p className="font-light text-md">
                  Always available to answer to your emails.
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
