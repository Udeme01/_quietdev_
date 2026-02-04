import React from "react";

const Sectionheader = ({ headerTitle, headerBrief, headerSubtitle }) => {
  return (
    <div className="mb-20">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px w-16 bg-black/80 dark:bg-white"></div>
        <span className="text-black/60 dark:text-white text-sm font-medium tracking-wider uppercase">
          {headerSubtitle}
        </span>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-black/90 dark:text-white mb-6 tracking-tight">
        {headerTitle}
      </h1>
      <p className="text-black/60 dark:text-white/60 text-lg max-w-2xl leading-relaxed">
        {headerBrief}
      </p>
    </div>
  );
};

export default Sectionheader;
