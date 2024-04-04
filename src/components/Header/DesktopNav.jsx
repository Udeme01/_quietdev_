import logo from "../../../src/img/logo.png";
import { ROUTES } from "../../data";
import { Link } from "react-router-dom";

const DesktopNav = () => {
  return (
    <>
      <div className="hidden font-inter lg:flex lg:justify-between lg:container lg:mx-auto lg:px-4">
        <a href="#">
          <img
            className="w-7 rounded-full cursor-pointer lg:hover:opacity-70"
            src={logo}
            alt="logo"
          />
        </a>
        <nav>
          <ul className="lg:flex lg:justify-center lg:align-center">
            {ROUTES.map((listItem) => {
              const { id, title, href } = listItem;
              return (
                <li
                  key={id}
                  className="lg:mx-10 last:mr-0 lg:font-medium lg:mt-1"
                >
                  <Link to={href}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <button
          type="button"
          className="text-white lg:px-4 border bg-black lg:hover:opacity-75"
        >
          <a href="mailto:quietdevstudio@gmail.com">Hire Me</a>
        </button>
      </div>
    </>
  );
};

export default DesktopNav;
