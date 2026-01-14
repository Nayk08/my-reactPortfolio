import Section from "../components/Section";
import { myTechSkills } from "../data/dataTechSkills";

export default function TechSkills() {
  return (
    <Section
      grid={1}
      className="flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8"
      bgClass="bg-gray-900"
      bgGradient="from-gray-800/60 via-gray-700/40 to-gray-900"
    >
      {/* TECH SKILLS SECTION */}
      <div className="w-full max-w-6xl">
        {/* Tech Skills Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Tech Skills
          </h2>
          <p className="text-gray-300 mt-4 text-lg">
            Technologies and tools I work with
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Tech Skills Grid - Fixed spacing */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 w-full">
          {myTechSkills.map((skill) => (
            <div
              key={skill.id}
              className="group relative bg-gray-800/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700/40 hover:border-red-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/10 flex flex-col items-center justify-center min-h-[180px]"
            >
              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/0 via-transparent to-orange-900/0 group-hover:from-red-900/5 group-hover:to-orange-900/5 rounded-xl sm:rounded-2xl transition-all duration-500"></div>

              {/* Skill Icon */}
              <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 mb-3 sm:mb-4 flex items-center justify-center">
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Skill Title */}
              <h3 className="text-base sm:text-lg font-semibold text-gray-100 text-center mb-1 sm:mb-2 group-hover:text-red-300 transition-colors duration-300">
                {skill.title}
              </h3>

              {/* Skill Status with Indicator */}
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-1 sm:mt-2">
                <div
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                    skill.status === "Advanced"
                      ? "bg-green-500"
                      : skill.status === "Intermediate"
                      ? "bg-yellow-500"
                      : skill.status === "Beginner"
                      ? "bg-blue-500"
                      : "bg-gray-500"
                  } ${skill.status === "Advanced" ? "animate-pulse" : ""}`}
                ></div>
                <span className="text-xs sm:text-sm text-gray-400 font-medium">
                  {skill.status}
                </span>
              </div>

              {/* Level Bar */}
              <div className="w-full h-1.5 sm:h-2 bg-gray-700/40 rounded-full mt-2 sm:mt-3 overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    skill.status === "Advanced"
                      ? "bg-gradient-to-r from-green-500 to-emerald-400"
                      : skill.status === "Intermediate"
                      ? "bg-gradient-to-r from-yellow-500 to-amber-400"
                      : skill.status === "Beginner"
                      ? "bg-gradient-to-r from-blue-500 to-cyan-400"
                      : "bg-gradient-to-r from-gray-500 to-gray-400"
                  }`}
                  style={{
                    width:
                      skill.status === "Advanced"
                        ? "90%"
                        : skill.status === "Intermediate"
                        ? "45%"
                        : skill.status === "Beginner"
                        ? "40%"
                        : "30%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700/30">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
            <span className="text-sm sm:text-base text-gray-300">Advanced</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
            <span className="text-sm sm:text-base text-gray-300">
              Intermediate
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-blue-500"></div>
            <span className="text-sm sm:text-base text-gray-300">Beginner</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
