// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    stacks,
    image,
    previewLink,
    category,
    year,
    tags = [],
  } = project;

  return (
    <a
      href={previewLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-3xl border border-white/15 bg-white/[0.02] overflow-hidden transition-all duration-500 hover:border-green-500/20 hover:bg-green-800/[0.04] hover:shadow-[0_0_60px_-15px_rgba(22, 101, 52, 0.5)]"
    >
      {/* Image */}
      <div className="relative h-[200px] sm:h-[280px] md:h-[200px] lg:h-[300px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover
                     transition-transform duration-700 ease-out
                     group-hover:scale-110"
        />

        {/* subtle gradient so badges/edges stay readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

        {/* Badges */}
        {category && (
          <span className="absolute top-4 left-4 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white/80 border border-white/10">
            {category}
          </span>
        )}
        {year && (
          <span className="absolute top-4 right-4 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-[11px] font-medium text-white/80 border border-white/10">
            {year}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl sm:text-2xl font-semibold text-white">
            {title}
          </h3>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="text-white/40 mt-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
          />
        </div>

        <p className="mt-3 text-sm sm:text-base text-white/50 leading-relaxed">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {stacks.map((stack) => (
            <span
              key={stack}
              className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[8px] font-medium tracking-[0.18em] text-white/50 uppercase"
            >
              {stack}
            </span>
          ))}
        </div>

        {tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
              >
                {tag.toUpperCase()}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    stacks: PropTypes.string,
    image: PropTypes.string.isRequired,
    previewLink: PropTypes.string.isRequired,
    category: PropTypes.string,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectCard;
