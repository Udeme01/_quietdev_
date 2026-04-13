import logo from "../../../src/img/logo.png";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../data/routes";

const DesktopNav = () => {
  const { pathname } = useLocation();

  return (
    <section className="hidden lg:flex lg:items-center lg:justify-between py-6 max-w-6xl mx-auto px-8">
      {/* Logo */}
      <Link to="/">
        <img
          className="w-9 h-9 rounded-full border border-white/20 hover:border-white/50 transition-colors duration-200"
          src={logo}
          alt="Udeme Emmanuel"
        />
      </Link>

      {/* Nav links */}
      <nav>
        <ul
          className="flex items-center gap-8"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {ROUTES.map(({ id, title, href }) => {
            const isActive = pathname === href;
            return (
              <li key={id}>
                <Link
                  to={href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 relative group ${
                    isActive ? "text-white" : "text-white/40 hover:text-white"
                  }`}
                >
                  {title}
                  {/* Underline — solid when active, animates in on hover */}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-white transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Availability badge */}
      <a
        href="mailto:emmanueludeme.fe@gmail.com"
        className="flex items-center gap-2.5 border border-white/10 hover:border-white/25 bg-white/4 hover:bg-white/8 transition-all duration-200 px-4 py-2.5 rounded-full"
      >
        <span className="relative flex w-2 h-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        <span className="text-xs font-medium text-white/50 hover:text-white/80 transition-colors">
          Available for new projects
        </span>
      </a>
    </section>
  );
};

export default DesktopNav;
