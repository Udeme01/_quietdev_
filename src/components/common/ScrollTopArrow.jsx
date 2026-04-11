import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollTopArrow = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="lg:col-span-2">
      <button
        onClick={scrollToTop}
        className="w-12 h-12 flex items-center justify-center bg-white text-neutral-900 hover:bg-neutral-200 transition-all duration-300 rounded ml-auto"
        aria-label="Back to top"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  );
};

export default ScrollTopArrow;
