import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
} from "react";
import { createPortal } from "react-dom";

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

  // Guard against no selected project
  if (!project) return null;

  return createPortal(
    <dialog
      ref={dialogRef}
      onCancel={(e) => {
        if (zoomedItem) {
          e.preventDefault();
          setZoomedItem(null);
        }
      }}
      className="
        backdrop:bg-black/70
        fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        rounded-2xl
        w-[90%] max-w-2xl
        max-h-[90vh]
        bg-gray-900 text-gray-100
        p-6
        shadow-2xl
        overflow-y-auto
      "
    >
      {/* Close Button */}
      <button
        onClick={() => dialogRef.current.close()}
        aria-label="Close project details"
        className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
      >
        ✕
      </button>

      {/* Project Info */}
      <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
      <p className="text-gray-300 mb-4">{project.description}</p>

      {/* Project Content */}
      {project.content?.length > 0 ? (
        <div className="grid sm:grid-cols-2 gap-6">
          {project.content.map((item) => (
            <div key={item.id} className="space-y-2">
              <img
                src={item.image}
                alt={item.title}
                onClick={() => setZoomedItem(item)}
                className="w-full h-auto object-cover rounded-lg cursor-zoom-in transition-transform hover:scale-[1.03]"
              />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 italic">
          No additional project content available.
        </p>
      )}

      {/* Zoomed Image Overlay */}
      {zoomedItem && (
        <div
          onClick={() => setZoomedItem(null)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out animate-fade-in"
        >
          {/* Fixed close button */}
          <button
            onClick={() => setZoomedItem(null)}
            aria-label="Close zoomed image"
            className="fixed top-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800/80 text-gray-200 hover:bg-gray-700 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            ✕
          </button>

          <img
            src={zoomedItem.image}
            alt={zoomedItem.title}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-zoom-in cursor-default"
          />

          <p className="text-gray-400 text-sm bg-gray-900/70 px-4 py-1.5 rounded-full">
            {zoomedItem.title} — Press Esc or click outside to close
          </p>
        </div>
      )}
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default ProjectModal;
