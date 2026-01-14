import Section from "../components/Section.jsx";
import Button from "../components/Button.jsx";
import { Myabout, email } from "../data/data.js";
import img from "../assets/kyan.png";

import { useContext } from "react";
import { MyPortfolioContext } from "../store/Portfolio-store.jsx";
export default function AboutMe() {
  const { handleContent } = useContext(MyPortfolioContext);

  return (
    <Section className="flex flex-col items-center space-y-12 py-16 px-4 sm:px-6 lg:px-0">
      {/* Profile Image with Enhanced Gradient Glow */}
      <div className="flex flex-col items-center space-y-8">
        {/* Animated gradient background */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full blur-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-500 animate-gradient-shift"></div>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-30 animate-pulse-slow"></div>

          {/* Profile Image with hover effects */}
          <img
            src={img}
            alt="Kyan Villarin"
            className="
              relative
              w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56
              rounded-full
              border-4 border-white/20
              shadow-2xl
              object-cover
              transition-all duration-500
              group-hover:scale-110
              group-hover:border-white/40
              group-hover:shadow-3xl
              z-10
            "
          />

          {/* Floating dots decoration */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-500 rounded-full animate-bounce"></div>
          <div
            className="absolute -bottom-2 -left-2 w-3 h-3 bg-indigo-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          {email.map((data) => (
            <a
              key={data.id}
              href={data.link}
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300 hover:scale-110 transform"
            >
              <img className="w-5 h-5 text-gray-300" src={data.icons} alt="" />
            </a>
          ))}
        </div>

        {/* Buttons with improved styling */}
        <div className="flex flex-col justify-center sm:flex-row gap-4 w-full max-w-md">
          <Button
            onClick={() => handleContent("Skills")}
            variant="primary"
            className="flex-1 py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="flex items-center justify-center gap-2">
              View Skills
              <span className="text-lg">→</span>
            </span>
          </Button>
          <Button
            onClick={() => handleContent("Projects")}
            variant="outline"
            className="flex-1 py-3 px-6 border-2 border-gray-600 hover:border-purple-500 text-gray-300 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
          >
            View Projects
            <span className="text-lg">→</span>
          </Button>
        </div>
      </div>

      {/* Enhanced Text Container with Glass Effect */}
      <div className="max-w-3xl w-full rounded-2xl p-8 sm:p-10 text-center transform transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 shadow-2xl">
        {/* Animated accent bar */}
        <div className="relative h-1 w-32 mx-auto mb-8 overflow-hidden rounded-full bg-gray-700">
          <div className="absolute h-full w-1/3 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-shimmer"></div>
        </div>

        {/* Headings with gradient text */}
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
            Kyan Villarin
          </span>
        </h1>

        <div className="inline-flex items-center justify-center mt-3 px-4 py-1 rounded-full bg-gray-800/50 border border-gray-700">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2"></div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-300">
            Junior Web Developer
          </h2>
        </div>

        {/* Description with icons */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Myabout.map((data) => (
            <div
              key={data.id}
              className="flex items-center justify-center gap-3 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors duration-300"
            >
              <div className="text-2xl">{data.icon}</div>
              <p className="text-gray-300">{data.description}</p>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <p className="mt-8 text-gray-400 text-sm sm:text-base leading-relaxed italic border-l-4 border-purple-500 pl-4 py-2 text-left">
          Passionate about creating beautiful, functional web experiences.
          Currently mastering modern frontend technologies and best practices.
        </p>

        {/* Tech stack hint */}
      </div>
    </Section>
  );
}
