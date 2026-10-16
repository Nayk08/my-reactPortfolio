import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navBarData } from "../data/data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = navBarData.map((data) => (
    <li key={data.id}>
      <a
        href={`#${data.title.toLowerCase()}`}
        onClick={() => setIsOpen(false)}
        className="block rounded-md px-3 py-2 transition-colors hover:text-white"
      >
        {data.title}
      </a>
    </li>
  ));

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#about" className="font-semibold tracking-tight text-white">
          Kyan Villarin
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-2 text-sm text-zinc-400">
            {links}
          </ul>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="rounded-md p-2 text-xl text-zinc-300 md:hidden"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-white/5 px-6 pb-4 md:hidden">
          <ul className="flex flex-col pt-2 text-zinc-300">{links}</ul>
        </nav>
      )}
    </header>
  );
}
