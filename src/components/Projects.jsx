import { projects } from "../data/projects";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="order-2 mt-10 md:mx-6 lg:mx-12 text-white">
        <h2 className="text-3xl font-bold pt-8 text-center lg:text-right mb-4 lg:pr-[70px]">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 animate-slideIn">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 p-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-[100%]  lg:h-[250px] h-[200px]  rounded-lg  object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold bg-gradient-to-tr from-blue-500 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-center lg:text-left">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  {project.github && (
                    <Link
                      to={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline flex items-center"
                    >
                      <FaGithub className="text-2xl text-white " />
                    </Link>
                  )}
                  {project.deployed && (
                    <Link
                      to={project.deployed}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:underline flex items-center"
                    >
                      <FaGlobe className="text-2xl text-blue-400" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-full h-[1px] my-[50px]">
        <div className="absolute inset-0 z-50 h-full bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
      </div>
    </>
  );
};

export default Projects;
