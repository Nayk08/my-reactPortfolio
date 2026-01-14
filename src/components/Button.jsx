export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        bg-orange-500 
        text-white 
        font-semibold 
        px-6 
        py-2 
        rounded-lg 
        shadow-md 
        hover:bg-orange-600 
        hover:shadow-lg 
        transition 
        duration-300
        focus:outline-none 
        focus:ring-2 
        focus:ring-orange-400 
        focus:ring-offset-2
      "
    >
      {children}
    </button>
  );
}
