import logo from "../../../src/img/logo.png";
import { Link } from "react-router-dom";
import { ROUTES } from "../../data/routes";

const DesktopNav = () => {
  return (
    <>
      <div className="hidden font-winkySans lg:flex lg:items-center lg:justify-between lg:container lg:mx-auto pb-8 px-4 py-4">
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
                  className="lg:mx-10 last:mr-0 lg:mt-1 hover:opacity-50"
                >
                  <Link to={href}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          className="outline bg-black text-white dark:border-white rounded-xl px-4 py-3 hover:bg-black hover:text-white lg:hover:scale-110 lg:transition-all lg:duration-500 lg:ease-in-out"
          href="mailto:quietdevstudio@gmail.com"
        >
          Hire Me
        </a>
      </div>
    </>
  );
};

export default DesktopNav;
