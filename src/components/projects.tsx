import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  links: {
    github: string;
    live: string;
  };
}

const projects: Project[] = [
  {
    title: "Transsacto",
    description: "A Full Stack secure banking application.",
    techStack: ["NextJS", "ReactJS", "Tailwind CSS"],
    links: {
      github: "https://github.com/Simran903/bank-app",
      live: "https://transsacto.vercel.app/",
    },
  },
  {
    title: "Cineverse",
    description:
      "A Web Based movie and TV show discovery platform",
    techStack: ["API", "ReactJS", "Redux", "SCSS"],
    links: {
      github: "https://github.com/Simran903/Cineverse",
      live: "https://cineverse-online.netlify.app/",
    },
  },
];

const Projects: React.FC = () => {
  return (
    <div id="projects" className="text-white mx-auto px-6 sm:px-12 lg:px-24 max-w-4xl flex flex-col justify-center">
      <h1 className="text-4xl font-bold mb-10">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-surface-a10 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex space-x-4 mb-4 text-lg">
              <a
                href={project.links.github}
                aria-label="GitHub Link"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-a10 transition"
              >
                <FaGithub />
              </a>
              <a
                href={project.links.live}
                aria-label="Live Link"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-a10 transition"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-primary-a10/10 text-primary-a10 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;