import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

export const Theme = () => {
  const [darkMode, setDarkMode] = useState(false);

  // this runs whenever our "darkMode" state changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  //   useEffect(() => {
  //     if (localStorage.getItem("theme") === "dark") {
  //       setDarkMode(true);
  //       localStorage.setItem("theme", "dark");
  //     } else {
  //       setDarkMode(false);
  //       localStorage.setItem("theme", "light");
  //     }
  //   }, []);

  const toggleThemeMode = () => {
    setDarkMode((prevstate) => !prevstate);
  };

  return (
    <>
      <div className="flex align-center justify-center absolute top-[18px] right-16 cursor-pointer text-neutral-100">
        <button
          onClick={toggleThemeMode}
          className="relative w-14 h-7 flex items-center dark:bg-neutral-100 bg-neutral-900 cursor-pointer rounded-full pl-2"
        >
          <FontAwesomeIcon icon={faMoon} className="text-white" />
          <div
            className="absolute bg-white dark:bg-neutral-900 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
            style={darkMode ? { left: "2px" } : { right: "2px" }}
          ></div>
          <FontAwesomeIcon
            icon={faSun}
            className="ml-auto text-yellow-500 pr-1"
          />
        </button>
      </div>
    </>
  );
};
