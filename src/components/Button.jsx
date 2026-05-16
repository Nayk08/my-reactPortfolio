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
      "text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg",
    outline:
      "border-2 border-gray-600 hover:border-purple-500 text-gray-300 hover:text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
