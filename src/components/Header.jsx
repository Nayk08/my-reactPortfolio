import { useState, useContext } from "react";
import { navBarData } from "../data/data";
import { MyPortfolioContext } from "../store/Portfolio-store";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { handleContent, content: currentPage } = useContext(MyPortfolioContext);
  

  return (
    <header className="sticky top-0 z-50 bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold text-sky-400">KV</div>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm font-medium text-gray-200">
              {navBarData.map((data) => {
                const slug = data.title.toLowerCase().replace(/\s+/g, "-");
                const isActive = currentPage === data.title;

                return (
                  <li key={data.id} onClick={() => handleContent(data.title)}>
                    <a
                      href={`#${slug}`}
                      className={`
                        relative
                        pb-1.5
                        transition duration-300
                        rounded-sm
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900
                        ${
                          isActive
                            ? "text-sky-400 font-semibold"
                            : "text-gray-300"
                        }
                        hover:text-sky-400
                        after:absolute after:left-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-sky-400
                        after:transition-all after:duration-300
                        ${
                          isActive
                            ? "after:w-full"
                            : "after:w-0 hover:after:w-full"
                        }
                      `}
                    >
                      {data.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="md:hidden text-gray-200 text-2xl rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col gap-4 text-center text-gray-200">
              {navBarData.map((data) => {
                const slug = data.title.toLowerCase().replace(/\s+/g, "-");
                const isActive = currentPage === data.title;

                return (
                  <li
                    key={data.id}
                    onClick={() => {
                      handleContent(data.title);
                      setIsOpen(false);
                    }}
                  >
                    <a
                      href={`#${slug}`}
                      className={`
                        block py-3 px-4 rounded-md transition duration-300
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400
                        ${
                          isActive
                            ? "text-sky-400 bg-sky-400/10 border-l-4 border-sky-400"
                            : "text-gray-300 hover:text-sky-400 hover:bg-slate-800"
                        }
                      `}
                    >
                      {data.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
