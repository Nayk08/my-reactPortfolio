import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
} from "react";
import { createPortal } from "react-dom";
import { FiCalendar, FiExternalLink, FiGithub, FiX } from "react-icons/fi";

const ProjectModal = forwardRef(function ProjectModal({ project }, ref) {
  const dialogRef = useRef();
  const [zoomedItem, setZoomedItem] = useState(null);

  useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current?.showModal();
    },
    close() {
      setZoomedItem(null);
      dialogRef.current?.close();
    },
  }));

  // Close the zoomed image with Escape
  useEffect(() => {
    if (!zoomedItem) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") setZoomedItem(null);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [zoomedItem]);

  return createPortal(
    <dialog
      ref={dialogRef}
      onCancel={(e) => {
        if (zoomedItem) {
          e.preventDefault();
          setZoomedItem(null);
        }
      }}
      // Clicking the backdrop (the dialog element itself, outside the inner wrapper) closes it
      onClick={(e) =>
        e.target === dialogRef.current && dialogRef.current.close()
      }
      className="
        backdrop:bg-black/70 backdrop:backdrop-blur-sm
        m-auto
        w-[92%] max-w-4xl max-h-[90vh] overflow-hidden
        rounded-2xl border border-white/10
        bg-zinc-950 text-zinc-300
        p-0 shadow-2xl
      "
    >
      {/* The dialog always renders so the ref exists on the first open() */}
      {project && (
        <div className="max-h-[90vh] overflow-y-auto p-6 sm:p-8">
          {/* Close Button */}
          <button
            onClick={() => dialogRef.current.close()}
            aria-label="Close project details"
            className="absolute top-4 right-4 z-10 rounded-full p-2 text-lg text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
          >
            <FiX />
          </button>

          {/* Project Info */}
          <h2 className="pr-10 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {project.title}
          </h2>
          {project.timeline && (
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-zinc-500">
              <FiCalendar /> {project.timeline}
            </p>
          )}
          <p className="mt-3 max-w-3xl leading-relaxed text-zinc-400">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:bg-white/5"
            >
              <FiGithub /> Source code
            </a>
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
              >
                <FiExternalLink /> Live site
              </a>
            )}
          </div>

          {/* Project Content */}
          {project.content?.length > 0 ? (
            <div className="mt-8 grid gap-6 border-t border-white/5 pt-8 sm:grid-cols-2">
              {project.content.map((item) => (
                <figure key={item.id}>
                  <button
                    onClick={() => setZoomedItem(item)}
                    aria-label={`Enlarge ${item.title} screenshot`}
                    className="block w-full cursor-zoom-in overflow-hidden rounded-lg ring-1 ring-white/10"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full transition-transform duration-300 hover:scale-[1.02]"
                    />
                  </button>
                  <figcaption className="mt-3">
                    <h3 className="font-medium text-zinc-100">{item.title}</h3>
                    <p className="mt-1 text-sm text-zinc-500">
                      {item.description}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <p className="mt-8 italic text-zinc-500">
              No additional project content available.
            </p>
          )}
        </div>
      )}

      {/* Zoomed Image Overlay */}
      {zoomedItem && (
        <div
          onClick={() => setZoomedItem(null)}
          className="fixed inset-0 z-50 flex cursor-zoom-out flex-col items-center justify-center gap-4 bg-black/90 p-4 animate-fade-in"
        >
          <button
            onClick={() => setZoomedItem(null)}
            aria-label="Close zoomed image"
            className="fixed top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800/80 text-zinc-200 transition-colors hover:bg-zinc-700 hover:text-white"
          >
            <FiX />
          </button>

          <img
            src={zoomedItem.image}
            alt={zoomedItem.title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[80vh] max-w-full cursor-default rounded-lg object-contain shadow-2xl animate-zoom-in"
          />

          <p className="rounded-full bg-zinc-900/70 px-4 py-1.5 text-sm text-zinc-400">
            {zoomedItem.title} — Press Esc or click outside to close
          </p>
        </div>
      )}
    </dialog>,
    document.getElementById("modal-root"),
  );
});

export default ProjectModal;
