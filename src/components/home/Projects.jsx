// import React from "react";
import Sectionheader from "../common/Sectionheader";
import ProjectCard from "../projects/ProjectCard";
import { PROJECTS } from "../../data/projects";

const Projects = () => {
  return (
    <section className="bg-transparent px-6">
      <div className="lg:max-w-350 mx-auto">
        <Sectionheader
          headerTitle="Projects I've shipped."
          headerBrief="Products that I've shipped and loved working on. Each card links to the live project."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
