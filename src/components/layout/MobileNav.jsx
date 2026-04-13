import { Sling as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import logo from "../../../src/img/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../data/routes";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  // ✅ Moved out of render into useEffect
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ✅ Auto-close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <section className="lg:hidden flex justify-between items-center px-6 md:px-12 lg:px-24 py-4 bg-[#0f0f0f] border-b border-white/[0.07]">
      {/* Logo */}
      <Link to="/">
        <img
          className="w-8 h-8 rounded-full border border-white/20"
          src={logo}
          alt="Udeme Emmanuel"
        />
      </Link>

      {/* Availability badge */}
      <div className="flex items-center gap-2 border border-white/10 bg-white/4 px-3 py-1.5 rounded-full">
        <span className="relative flex w-1.5 h-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
        </span>
        <span className="text-[10px] font-medium text-white/50">
          Available for work
        </span>
      </div>

      {/* Hamburger — z-index keeps it above the overlay */}
      <button className="relative z-101">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          size={20}
          color="white"
        />
      </button>

      {/* Fullscreen overlay menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="fixed z-100 inset-0 bg-[#0f0f0f] flex flex-col justify-between pt-24 pb-8 px-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {/* Nav links */}
            <ul className="flex flex-col">
              {ROUTES.map(({ id, title, href }, idx) => {
                const isActive = pathname === href;
                return (
                  <motion.li
                    key={id}
                    className="border-b border-white/[0.07]"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + idx * 0.07, duration: 0.3 }}
                  >
                    <Link
                      to={href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between py-5 transition-colors ${
                        isActive
                          ? "text-white"
                          : "text-white/40 hover:text-white"
                      }`}
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <span className="text-lg font-semibold tracking-tight">
                        {title}
                      </span>
                      {/* Active indicator dot */}
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      )}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            {/* Bottom CTA — ✅ no nested button inside anchor */}
            <motion.a
              href="mailto:emmanueludeme.fe@gmail.com"
              className="block w-full text-center bg-white text-[#0f0f0f] font-bold text-sm tracking-wide py-4 rounded-full hover:bg-white/90 transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.3 }}
            >
              Hire Me →
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MobileNav;
