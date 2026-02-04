import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Sectionheader from "../common/Sectionheader";
import { PROJECTS } from "../../data/projects";
import { Link } from "react-router-dom";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="mx-auto py-10 pt-20 px-4 lg:container">
      {/* Header Section */}

      <Sectionheader
        headerTitle="My Projects"
        headerSubtitle="My Portfolio"
        headerBrief=" Explore a collection of creative works spanning e-commerce, corporate
          websites, and innovative digital experiences."
      />

      {/* Asymmetric Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
        {PROJECTS.map((project, index) => (
          <Link
            key={project.id}
            to={project.to}
            className={`
                group relative overflow-hidden rounded-2xl cursor-pointer
                ${project.size === "large" ? "lg:col-span-2 lg:row-span-2" : "lg:col-span-1 lg:row-span-1"}
                ${index === 1 ? "md:row-span-2" : ""}
                ${index === 3 ? "md:col-span-2" : ""}
              `}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Background Image */}
            <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              {/* Category Badge */}
              <div className="flex justify-end">
                <span className="px-4 py-2 bg-white/10 text-black tracking-wider backdrop-blur-md rounded-full text-xs font-semibold border border-white/20 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                  {project.category}
                </span>
              </div>

              {/* Title and Link */}
              <div className="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-4">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight text-white">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-white/70 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 delay-100">
                  <span className="text-sm font-semibold">View Project</span>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="text-sm transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
