import { useContext } from "react";
import { navBarData, email } from "../data/data";
import { MyPortfolioContext } from "../store/Portfolio-store";

export default function Footer() {
  const { handleContent } = useContext(MyPortfolioContext);

  return (
    <footer className="relative bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Logo */}
          <div className="text-xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
            KV
          </div>

          {/* Quick Nav */}
          <ul className="flex items-center gap-6 text-sm font-medium text-gray-400">
            {navBarData.map((data) => {
              const slug = data.title.toLowerCase().replace(/\s+/g, "-");
              return (
                <li key={data.id}>
                  <a
                    href={`#${slug}`}
                    onClick={() => handleContent(data.title)}
                    className="transition-colors duration-300 hover:text-sky-400 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                  >
                    {data.title}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Social Links */}
          <div className="flex gap-3">
            {email.map((data) => (
              <a
                key={data.id}
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110 transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              >
                <img className="w-4 h-4" src={data.icons} alt="" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} Kyan Villarin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
