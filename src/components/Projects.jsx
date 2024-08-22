import { projects } from '../data/projects';
import { FaGithub } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';

const Project = () => {
  return (
    <div className="order-2 mt-10 md:mx-6 lg:mx-12 text-white">
      <h2 className="text-3xl font-bold pt-8 text-center lg:text-left mb-4 lg:pl-[60px]">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 animate-slideIn">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline flex items-center"
                  >
                    <FaGithub className="text-2xl text-white " />
                    {/* <span className="sr-only">GitHub</span> */}
                  </a>
                )}
                {project.deployed && (
                  <a
                    href={project.deployed}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline flex items-center"
                  >
                    <FaGlobe className="text-2xl text-blue-400" />
                    {/* <span className="sr-only">Deployed</span> */}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
