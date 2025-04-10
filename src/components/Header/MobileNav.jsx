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
      <div className="flex justify-between align-center font-winkySans font-regular leading-tight w-full shadow bg-white px-6 pl-8  py-4 lg:container lg:mx-auto lg:hidden">
        <a href="#" className="flex flex-col justify-center align-center w-fit">
          <img
            className="w-9 rounded-full cursor-pointer border border-red-600"
            src={logo}
            alt="logo"
          />
        </a>
        {/* <Theme /> */}
        <button className="relative">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            size={20}
            color="red"
          />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className="bg-white opacity-80 fixed top-[5rem] right-0 bottom-0 left-0 dark:bg-neutral-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="">
                {ROUTES.map((listItem, idx) => {
                  const { id, title, href } = listItem;
                  return (
                    <motion.li
                      className="first:border-t first:border-red-300 relative p-10 hover:bg-red-50"
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
                        className="cursor-pointer w-full absolute border-b border-red-300 top-0 right-0 bottom-0 left-0 py-7 px-8 tracking-wider"
                      >
                        {title}
                      </Link>
                    </motion.li>
                  );
                })}
                <motion.a
                href="mailto:quietdevstudio@gmail.com"
                  className="bg-black text-red-400 p-5 mt-4 absolute right-4 left-4 bottom-4 text-center dark:bg-neutral-100 dark:text-neutral-900 hover:bg-red-400 hover:text-white"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <button type="button" className="text-xl tracking-wider">Hire Me</button>
                </motion.a>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default MobileNav;
