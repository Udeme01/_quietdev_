import React from "react";

const Sectionheader = ({ headerTitle, headerBrief, headerSubtitle }) => {
  return (
    <div className="mb-16">
      {/* <div className="flex items-center gap-3 mb-6">
        <div className="h-px w-16 bg-black/80 dark:bg-white"></div>
        <span className="text-black/60 dark:text-white text-xs font-medium tracking-wider uppercase font-bebas">
          {headerSubtitle}
        </span>
      </div> */}
      <h1
        className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-none mb-3 font-bebas"
        style={{
          letterSpacing: "-0.02em",
        }}
      >
        {headerTitle}
      </h1>
      {/* <p className="text-black/60 dark:text-white/60 text-sm max-w-2xl leading-relaxed">
        {headerBrief}
      </p> */}
    </div>
  );
};

export default Sectionheader;
