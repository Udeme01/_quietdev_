import { ROUTES } from "../../data";
import logo from "../../../src/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <section className="font-inter text-sm">
        <a
          href="#"
          className="flex flex-col justify-center align-center w-full"
        >
          <img
            className="w-6 rounded-full cursor-pointer m-4"
            src={logo}
            alt="logo"
          />
        </a>
        <ul>
          {ROUTES.map((listItem) => {
            const { id, title, href } = listItem;
            return (
              <li
                className="border-b border-slate-300 first:border-t first:border-slate-300 p-4 pl-0"
                key={id}
              >
                <a className="cursor-pointer w-full pl-4 pt-5 -z-0" href={href}>
                  {title}
                </a>
              </li>
            );
          })}
          <div className="border-b border-slate-300 p-1 flex justify-end align-center">
            <a href="www.linkedin.com/in/emmanuel-udeme">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-2xl pr-6 my-5"
              />
            </a>
            <a href="https://github.com/Udeme01">
              <FontAwesomeIcon icon={faGithub} className="text-2xl pr-6 my-5" />
            </a>
            <a href="https://www.instagram.com/quietdev_udy">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-2xl pr-4 my-5"
              />
            </a>
          </div>
          <p className="p-4 font-light">Udeme Emmanuel</p>
        </ul>
      </section>
    </>
  );
};

export default Footer;
