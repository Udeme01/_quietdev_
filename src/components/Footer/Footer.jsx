import { ROUTES } from "../../data";
import logo from "../../../src/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="font-winkySans tracking-wider text-sm mt-8 lg:container lg:mx-auto lg:bg-gray-100 dark:text-neutral-100 dark:bg-neutral-900">
        <div className="lg:flex lg:justify-center lg:w-full lg:align-center">
          <a
            href="#"
            className="flex flex-col justify-around align-center w-fit"
          >
            <img
              className="w-9 rounded-full border border-red-600 cursor-pointer m-4 dark:border-white"
              src={logo}
              alt="logo"
            />
          </a>
          <ul className="lg:flex lg:align-center lg:justify-end lg:w-1/2">
            {ROUTES.map((listItem) => {
              const { id, title, href } = listItem;
              return (
                <li
                  className="border-b border-slate-300 first:border-t first:border-slate-300 relative p-4 pl-0 py-8 lg:border-none lg:outline-none font-medium"
                  key={id}
                >
                  <Link
                    to={href}
                    className="absolute top-0 right-0 bottom-0 left-0 cursor-pointer pl-4 py-6 -z-0"
                    href={href}
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="border-b border-slate-300 p-1 flex justify-end align-center">
          <a href="https://www.linkedin.com/in/emmanuel-udeme/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl pr-6 my-5" />
          </a>
          <a href="https://github.com/Udeme01" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="text-2xl pr-6 my-5" />
          </a>
          <a href="https://www.instagram.com/quietdev_udy" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-2xl pr-4 my-5"
            />
          </a>
          <a href="https://www.twitter.com/quietdev_udy" target="_blank">
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-2xl pr-4 my-5"
            />
          </a>
        </div>
        <p className="p-4 font-light">Udeme Emmanuel</p>
      </section>
    </>
  );
};

export default Footer;
