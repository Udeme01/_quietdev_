import logo from "../../../src/img/logo.png";
import { ROUTES } from "../../data";
import { Link } from "react-router-dom";

const DesktopNav = () => {
  return (
    <>
      <div className="hidden font-winkySans lg:flex lg:items-center lg:justify-between lg:container lg:mx-auto pb-8 px-4 py-4">
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
                <li key={id} className="lg:mx-10 last:mr-0 lg:mt-1 hover:opacity-50">
                  <Link to={href}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          className="border-2 border-black px-4 py-3 hover:bg-black hover:text-red-400"
          href="mailto:quietdevstudio@gmail.com"
        >
          Hire Me
        </a>
      </div>
    </>
  );
};

export default DesktopNav;
