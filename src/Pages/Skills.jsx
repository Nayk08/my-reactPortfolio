import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";
import Section from "../components/Section";
import { myTechSkills, skillCategories } from "../data/dataTechSkills";

export default function TechSkills() {
  const [zoomedSkill, setZoomedSkill] = useState(null);

  // Close the zoomed icon with Escape
  useEffect(() => {
    if (!zoomedSkill) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") setZoomedSkill(null);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [zoomedSkill]);

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technologies I work with"
      description="The languages, frameworks and tools I use to build web and desktop applications."
    >
      <div className="grid gap-10 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div key={category}>
            <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
              {category}
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
              {myTechSkills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <li key={skill.id}>
                    <button
                      onClick={() => setZoomedSkill(skill)}
                      className="flex h-full w-full cursor-zoom-in items-center gap-2.5 rounded-xl border border-white/5 bg-white/2 p-2.5 text-left sm:gap-3 sm:p-3 transition-colors hover:border-white/15 hover:bg-white/4"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-lg sm:h-10 sm:w-10 sm:text-xl">
                        <skill.icon style={{ color: skill.color }} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-medium text-zinc-100">
                          {skill.title}
                        </span>
                        <span className="block text-xs text-zinc-500">
                          {skill.status}
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Zoomed Icon Overlay */}
      {zoomedSkill &&
        createPortal(
          <div
            onClick={() => setZoomedSkill(null)}
            className="fixed inset-0 z-60 flex cursor-zoom-out flex-col items-center justify-center gap-6 bg-black/80 p-4 backdrop-blur-sm animate-fade-in"
          >
            <button
              onClick={() => setZoomedSkill(null)}
              aria-label="Close zoomed icon"
              className="fixed top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800/80 text-zinc-200 transition-colors hover:bg-zinc-700 hover:text-white"
            >
              <FiX />
            </button>

            <zoomedSkill.icon
              onClick={(e) => e.stopPropagation()}
              style={{ color: zoomedSkill.color }}
              className="h-40 w-40 cursor-default animate-zoom-in sm:h-56 sm:w-56"
            />

            <p className="rounded-full bg-zinc-900/70 px-4 py-1.5 text-sm text-zinc-400">
              {zoomedSkill.title} · {zoomedSkill.status} — Press Esc or click
              outside to close
            </p>
          </div>,
          document.getElementById("modal-root")
        )}
    </Section>
  );
}
