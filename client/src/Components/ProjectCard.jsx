import React from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
export default function ProjectCard({
  title,
  description,
  imageSrc,
  features,
  techStack,
  githubLink,
  liveLink,
  screenshots,
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-6">
        <div className="flex items-center mb-2">
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        <p className="text-black  text-xl font-medium mb-2">{description}</p>
        <div className="h-0.5 w-full bg-gray-400 rounded-full mb-4" />
        <div className="mb-4 ">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Features</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Project UI</h4>
          <div className="scrollContainer flex px-2 relative gap-4 bg-gray-100 border border-gray-200 py-3 overflow-x-auto flex-row h-64 rounded-lg w-full">
            {Array.from({ length: screenshots }).map((_, index) => (
              <React.Fragment key={index}>
                <img
                  className="rounded-md h-full w-auto object-cover"
                  src={`./img/${title.replace(/\s+/g, "")}/${index + 1}.png`}
                  alt={`${title} screenshot ${index + 1}`}
                />
                {index < screenshots - 1 && (
                  <div className="h-full min-w-1 bg-gray-300 text-gray-300 text-[1px] rounded-full">i</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="mt-6 flex space-x-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
          >
            <FaExternalLinkAlt className="mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}

