import logo from "../../../src/img/logo.png";
import { Link } from "react-router-dom";
import { ROUTES } from "../../data/routes";

const DesktopNav = () => {
  const ctaButtonStyle = `bg-black text-white py-3 px-4 hover:border-none dark:bg-black dark:text-white cursor-pointer rounded-xl font-bold tracking-wide hover:bg-transparent hover:text-black hover:outline dark:hover:outline-none dark:hover:bg-white dark:hover:text-black transition-all duration-500`;

  return (
    <>
      <div className="hidden font-lato lg:flex lg:items-center lg:justify-between lg:py-8 lg:container mx-auto px-4">
        <picture>
          <img
            className="w-9 rounded-full border border-red-600"
            src={logo}
            alt="logo"
          />
        </picture>

        <nav>
          <ul className="lg:flex lg:justify-center lg:align-center">
            {ROUTES.map((listItem) => {
              const { id, title, href } = listItem;
              return (
                <li
                  key={id}
                  className="lg:mx-10 last:mr-0 lg:mt-1 hover:opacity-50 font-regular tracking-wide"
                >
                  <Link to={href}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* availability... */}
        <a
          href="mailto:emmanueludeme.fe@gmail.com"
          className="flex items-center justify-center space-x-2 bg-black/30 p-4 rounded-lg"
        >
          <div className="animate-pulse bg-green-300 w-5 h-5 rounded-full relative flex items-center justify-center">
            <span className="animate-pulse bg-green-700 w-3 h-3 rounded-full absolute flex"></span>
          </div>
          <h1 className="text-sm tracking-wide rounded-full text-right font-bold">
            Available to take on new projects! Let’s talk
          </h1>
        </a>
      </div>
    </>
  );
};

export default DesktopNav;
