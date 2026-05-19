import Section from "../components/Section";
import Button from "../components/Button";
import { projects } from "../data/data";
import { useRef, useState } from "react";
import ProjectModal from "../components/ProjectModal";

export default function Projects() {
  const modalRef = useRef();
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <>
      <ProjectModal ref={modalRef} project={selectedProject} />
      <Section
        grid={1}
        className="py-16 px-4 sm:px-6 lg:px-8"
        bgClass="bg-gray-900"
        bgGradient="from-gray-800/60 via-gray-700/40 to-gray-900"
      >
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-gray-300 mt-4 text-lg">
            Here are some of the projects I've built to showcase my skills and
            learning journey.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Projects - SINGLE COLUMN with side-by-side cards */}
        <div className="max-w-6xl mx-auto space-y-8">
          {" "}
          {/* Remove grid classes */}
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/40 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/20"
            >
              {/* Project Content - Side by Side Layout */}
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="lg:w-2/5 h-64 lg:h-auto overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content Section */}
                <div className="lg:w-3/5 p-6 lg:p-8">
                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-100 mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Dynamic Status Badge */}
                  <span
                    className={`inline-block px-3 py-1 text-sm font-medium rounded-full mb-4 ${
                      project.status === "Finished"
                        ? "bg-green-500/20 text-green-300"
                        : "bg-yellow-500/20 text-yellow-300"
                    }`}
                  >
                    {project.status}
                  </span>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Contributors */}
                  {project.Contributor && project.Contributor.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                        Contributors
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.Contributor.map((name, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 backdrop-blur-sm hover:bg-blue-500/20 hover:border-blue-400/40 hover:text-blue-200 transition-all duration-300 cursor-default"
                          >
                            {name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                    Technologies Used
                  </h4>
                  {project.technologyUsed &&
                    project.technologyUsed.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologyUsed.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 bg-blue-700/50 text-gray-300 rounded-full text-sm hover:bg-blue-600/70 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                  {/* Action Buttons */}
                  <div className="grid grid-cols-1 sm:flex sm:items-center gap-3 w-full">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 bg-gray-700/60 hover:bg-gray-600/80 text-gray-100 rounded-lg text-center font-medium transition-all duration-300 hover:scale-[1.02] active:scale-95"
                    >
                      GitHub
                    </a>

                    {project.websiteUrl && (
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 px-4 bg-blue-500 hover:bg-blue-600 text-gray-100 rounded-lg text-center font-medium transition-all duration-300 hover:scale-[1.02] active:scale-95"
                      >
                        Website
                      </a>
                    )}

                    <button
                      onClick={() => {
                        setSelectedProject(project);
                        modalRef.current?.open(); // Using optional chaining here is safer
                      }}
                      className="flex-1 py-3 px-4 bg-orange-500 hover:bg-orange-600 text-gray-100 rounded-lg text-center font-medium transition-all duration-300 hover:scale-[1.02] active:scale-95"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
