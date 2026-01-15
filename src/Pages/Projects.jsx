import Section from "../components/Section";
import Button from "../components/Button";
import { projects } from "../data/data";
import { useRef , useState } from "react";
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
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-100 mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-6">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologyUsed.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-gray-700/50 text-gray-300 rounded-full text-sm hover:bg-gray-600/70 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}

                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 bg-gray-700/60 hover:bg-gray-600/80 text-gray-100 rounded-lg text-center transition-all duration-300 hover:scale-105"
                    >
                      GitHub
                    </a>
                    <button
                      onClick={() => {
                        setSelectedProject(project); // set project for modal
                        modalRef.current.open(); // open modal
                      }}
                      className="flex-1 py-3 px-4 bg-orange-500 hover:bg-orange-600 text-gray-100 rounded-lg text-center transition-all duration-300 hover:scale-105"
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
