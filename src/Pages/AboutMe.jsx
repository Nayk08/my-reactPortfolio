import { FiArrowRight, FiDownload } from "react-icons/fi";
import { socials } from "../data/data.js";
import img from "../assets/Gemini_Generated_Image_qzq4ikqzq4ikqzq4.png";
import resume from "../assets/Resume/Kyan_Villarin_Resume.pdf";

export default function AboutMe() {
  return (
    <section id="about" className="scroll-mt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1fr_auto] md:py-32">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Junior Web Developer
          </p>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Kyan Villarin
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            IT student and aspiring React developer. I build full-stack web
            applications with React, Node.js and PostgreSQL, and I care about
            clean, functional interfaces that are easy to use.
          </p>

          <div className="mt-10 grid gap-3 sm:flex sm:flex-wrap sm:items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
            >
              View projects <FiArrowRight />
            </a>
            <a
              href={resume}
              download="Kyan_Villarin_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
            >
              Download résumé <FiDownload />
            </a>

            <div className="flex justify-center gap-1 sm:ml-3">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="rounded-lg p-3 text-xl text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <img
          src={img}
          alt="Portrait of Kyan Villarin"
          className="order-first h-40 w-40 rounded-2xl object-cover ring-1 ring-white/10 sm:h-56 sm:w-56 md:order-0 md:h-72 md:w-72"
        />
      </div>
    </section>
  );
}
