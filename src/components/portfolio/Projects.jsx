import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { PROJECTS } from "../../data";

const Projects = () => {
  return (
    <>
      <h1 className="text-3xl text-left font-medium m-4 py-2 font-winkySans text-red-400 lg:container lg:mx-auto lg:pl-4">
        My Projects
      </h1>
      <section className="font-winkySans md:grid md:grid-cols-2 lg:container lg:mx-auto lg:grid-cols-3">
        {PROJECTS.map((proj) => {
          const {
            id,
            projectImg,
            title,
            // description,
            stacks,
            previewLink,
            codeLink,
          } = proj;
          return (
            <div
              key={id}
              className="m-4 mb-8 py-2 rounded-t-2xl text-left leading-8 shadow-md bg-gray-100 overflow-hidden"
            >
              <h1 className="leading-10 font-medium text-xl ml-6">{title}</h1>

              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={projectImg}
                  alt="cards"
                  className="rounded-t-3xl cursor-pointer transition-transform duration-500 p-4 hover:scale-110"
                />
              </div>

              {/* project details */}
              <div className="ml-4 mb-4">
                <div className="details__wrapper">
                  {/* Project Tech Stacks */}
                  <div className="techStacks__wrapper border tracking-wide">
                    <p className="font-light">
                      <span className="font-medium">Tech Stacks: </span>
                      {stacks}
                    </p>
                  </div>
                </div>
                <div className="flex justify-around align-center mt-5 w-full">
                  <a
                    href={previewLink}
                    target="_blank"
                    className="text-red-600 hover:text-red-400 px-2"
                  >
                    <FontAwesomeIcon icon={faLink} />
                    <span className="ml-2 font-medium tracking-wide">
                      Live Preview
                    </span>
                  </a>
                  <a
                    href={codeLink}
                    target="_blank"
                    className="text-red-600 hover:text-red-400 px-2"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    <span className="ml-2 font-medium tracking-wide">
                      View Code
                    </span>
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
