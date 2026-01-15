import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ProjectModal = forwardRef(function ProjectModal({ project }, ref) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current?.showModal();
    },
    close() {
      dialogRef.current?.close();
    },
  }));

  // Guard against no selected project
  if (!project) return null;

  return createPortal(
    <dialog
      ref={dialogRef}
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
        className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
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
                className="w-full h-auto object-cover rounded-lg"
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
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default ProjectModal;
