// import React from "react";
import PropTypes from "prop-types";

const Sectionheader = ({ headerTitle, headerBrief }) => {
  return (
    <div className="mb-10">
      <h1
        className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-none mb-1 font-bebas"
        style={{
          letterSpacing: "-0.02em",
        }}
      >
        {headerTitle}
      </h1>
      <p className="text-black/60 dark:text-white/60 text-sm max-w-2xl leading-relaxed">
        {headerBrief}
      </p>
    </div>
  );
};

Sectionheader.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  headerBrief: PropTypes.string.isRequired,
};

export default Sectionheader;
