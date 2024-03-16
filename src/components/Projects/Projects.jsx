import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { PROJECTS } from "../../data";

const Projects = () => {
  return (
    <>
      <h1 className="text-3xl text-left font-medium m-4 mt-16 py-2 font-inter lg:container lg:mx-auto lg:pl-4">
        My Projects
      </h1>
      <section className="font-inter md:grid md:grid-cols-2 lg:container lg:mx-auto lg:grid-cols-3">
        {PROJECTS.map((proj) => {
          const {
            id,
            projectImg,
            title,
            description,
            stacks,
            previewLink,
            codeLink,
          } = proj;
          return (
            <div
              key={id}
              className="m-4 mb-8 pb-2 rounded-t-2xl text-left leading-8 shadow-md"
            >
              <img src={projectImg} alt="cards" className="rounded-t-2xl" />

              {/* project details */}
              <div className="ml-4 mb-4">
                <div className="details__wrapper">
                  <h1 className="leading-10 font-medium text-xl py-2">
                    {title}
                  </h1>
                  <p className="leading-5 font-light">{description}</p>

                  {/* Project Tech Stacks */}
                  <div className="techStacks__wrapper">
                    <p className="font-light my-2">
                      <span className="font-medium">Tech Stacks: </span>
                      {stacks}
                    </p>
                  </div>
                </div>
                <div className="flex justify-around align-center">
                  <a href={previewLink} target="_blank">
                    <FontAwesomeIcon icon={faLink} />
                    <span className="ml-2 font-medium">Live Preview</span>
                  </a>
                  <a href={codeLink} target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                    <span className="ml-2 font-medium">View Code</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Projects;
