import { ROUTES } from "../../data";
import logo from "../../../src/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { SOCIALS } from "../../data";

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
                  className="border-b border-slate-300 first:border-t first:border-slate-300 relative p-4 pl-0 py-8 text-[1.1rem] font-regular tracking-wider lg:border-none lg:outline-none"
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
        </div>
        <p className="p-4 font-light">Udeme Emmanuel</p>
      </section>
    </>
  );
};

export default Footer;
