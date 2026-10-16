import { useRef, useState } from "react";
import {
  FiArrowRight,
  FiCalendar,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";
import Section from "../components/Section";
import ProjectModal from "../components/ProjectModal";
import { projects } from "../data/data";

const statusStyles = {
  Finished: "bg-emerald-400/10 text-emerald-300 ring-emerald-400/20",
  "In Progress": "bg-sky-400/10 text-sky-300 ring-sky-400/20",
  Postponed: "bg-amber-400/10 text-amber-300 ring-amber-400/20",
};

const MAX_TECH = 6;

export default function Projects() {
  const modalRef = useRef();
  const [selectedProject, setSelectedProject] = useState(null);

  function openProject(project) {
    setSelectedProject(project);
    modalRef.current?.open();
  }

  // Newest first; the latest project gets the full-width featured card
  const ordered = [...projects].reverse();

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      description="Web and desktop systems I've built, from solo projects to team capstones."
    >
      <ProjectModal ref={modalRef} project={selectedProject} />

      <div className="grid gap-6 md:grid-cols-2">
        {ordered.map((project, index) => {
          const featured = index === 0;
          const team = (project.Contributor ?? []).filter(
            (name) => name !== "Kyan Villarin"
          );
          const tech = project.technologyUsed ?? [];

          return (
            <article
              key={project.id}
              className={`group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/2 transition-colors hover:border-white/15 ${
                featured ? "md:col-span-2 lg:flex-row" : ""
              }`}
            >
              <button
                onClick={() => openProject(project)}
                aria-label={`View ${project.title} details`}
                className={`aspect-video shrink-0 overflow-hidden bg-zinc-900 ${
                  featured ? "lg:aspect-auto lg:w-3/5" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt=""
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>

              <div className="flex flex-1 flex-col p-6 lg:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    {project.title}
                  </h3>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${
                      statusStyles[project.status]
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {project.timeline && (
                  <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-zinc-500">
                    <FiCalendar /> {project.timeline}
                  </p>
                )}

                <p
                  className={`mt-3 text-sm leading-relaxed text-zinc-400 ${
                    featured ? "line-clamp-5 lg:line-clamp-none" : "line-clamp-3"
                  }`}
                >
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {/* Extra tags only show on the wide featured card */}
                  {tech.slice(0, featured ? tech.length : MAX_TECH).map((t, i) => (
                    <li
                      key={t}
                      className={`rounded-md bg-white/5 px-2 py-1 text-xs text-zinc-300 ${
                        i >= MAX_TECH ? "hidden lg:block" : ""
                      }`}
                    >
                      {t}
                    </li>
                  ))}
                  {tech.length > MAX_TECH && (
                    <li
                      className={`px-1 py-1 text-xs text-zinc-500 ${
                        featured ? "lg:hidden" : ""
                      }`}
                    >
                      +{tech.length - MAX_TECH} more
                    </li>
                  )}
                </ul>

                {team.length > 0 && (
                  <p className="mt-4 text-xs text-zinc-500">
                    Team project with {team.join(", ")}
                  </p>
                )}

                <div className="mt-auto grid grid-cols-2 gap-2 pt-6 sm:flex sm:flex-wrap sm:items-center">
                  <button
                    onClick={() => openProject(project)}
                    className="col-span-2 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
                  >
                    View details <FiArrowRight />
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-white sm:border-transparent ${
                      project.websiteUrl ? "" : "col-span-2"
                    }`}
                  >
                    <FiGithub /> Code
                  </a>
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-white sm:border-transparent"
                    >
                      <FiExternalLink /> Live site
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
