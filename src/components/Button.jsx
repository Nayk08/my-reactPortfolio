export default function Button({
  children,
  onClick,
  className = "",
  variant = "primary",
}) {
  // Base styles every single button will share
  const baseStyles =
    "flex-1 py-3 px-6 rounded-md font-medium transition-all duration-300 transform hover:-translate-y-1 text-center flex items-center justify-center gap-2";

  // Specific variants
  const variants = {
    primary:
      "text-white bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 hover:shadow-lg",
    outline:
      "border-2 border-gray-600 hover:border-sky-500 text-gray-300 hover:text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900`}
    >
      {children}
    </button>
  );
}
