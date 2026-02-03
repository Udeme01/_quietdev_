import { ROUTES } from "../../data";
import logo from "../../../src/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { SOCIALS } from "../../data";

const Footer = () => {
  return (
    <>
      <section className="font-winkySans text-sm mt-16 lg:container lg:mx-auto dark:text-neutral-100 dark:bg-neutral-900">
        <div className="lg:flex lg:justify-between lg:w-full lg:align-center">
          <a
            href="#"
            className="flex flex-col justify-around align-center w-fit mx-4 rounded-lg"
          >
            <img
              className="w-9 rounded-full border border-red-600 cursor-pointer m-4 dark:border-white"
              src={logo}
              alt="logo"
            />
          </a>
          <ul className="mx-4 mt-4 lg:flex lg:gap-8 lg:items-center lg:justify-center">
            {ROUTES.map((listItem) => {
              const { id, title, href } = listItem;
              return (
                <li
                  className="relative text-[1.1rem] tracking-wider p-4 pl-0 py-8 border-b lg:border-none lg:outline-none lg:rounded-md lg:p-1 hover:bg-red-50 lg:hover:bg-transparent"
                  key={id}
                >
                  <Link
                    to={href}
                    className="cursor-pointer absolute top-0 right-0 bottom-0 left-0 leading-7 p-4 pl-4 lg:relative lg:hover:opacity-60"
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
                    className="text-2xl mr-5 py-2 text-red-400 hover:text-red-600"
                  />
                </a>
              );
            })}
          </div>
        </div>
        <p className="p-6 font-light tracking-wider">Udeme Emmanuel</p>
      </section>
    </>
  );
};

export default Footer;

//   text-[1.1rem] font-regular
