import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import logo from "../../../src/img/logo.png";
import { ROUTES } from "../../data";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
// import { Theme } from "../../features/ThemeChange";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // disable scrolling when nav-menu isOpen;
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }

  return (
    <>
      <div className="flex justify-between align-center font-inter font-regular leading-tight fixed left-0 right-0 top-0 pt-2 px-4 pr-2 shadow-md bg-white lg:container lg:mx-auto lg:hidden dark:bg-neutral-900">
        <a href="#" className="flex flex-col justify-center align-center w-fit">
          <img
            className="w-7 rounded-full cursor-pointer"
            src={logo}
            alt="logo"
          />
        </a>
        {/* <Theme /> */}
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className="bg-white opacity-80 fixed top-[3.5rem] right-0 bottom-0 left-0 dark:bg-neutral-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul>
                {ROUTES.map((listItem, idx) => {
                  const { id, title, href } = listItem;
                  return (
                    <motion.li
                      className="border-b border-slate-300 first:border-t first:border-slate-300 relative p-8"
                      key={id}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1 + idx / 10,
                      }}
                    >
                      <Link
                        to={href}
                        className="cursor-pointer w-full absolute top-0 right-0 bottom-0 left-0 pl-4 pt-5"
                      >
                        {title}
                      </Link>
                    </motion.li>
                  );
                })}
                <motion.button
                  type="button"
                  className="btnHire mt-4 absolute right-4 left-4 dark:bg-neutral-100 dark:text-neutral-900"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <a href="mailto:quietdevstudio@gmail.com">Hire Me</a>
                </motion.button>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default MobileNav;
