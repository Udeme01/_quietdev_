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

        <a className={ctaButtonStyle} href="mailto:quietdevstudio@gmail.com">
          Hire Me
        </a>
      </div>
    </>
  );
};

export default DesktopNav;
