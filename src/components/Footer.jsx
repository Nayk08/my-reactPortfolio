import { FiDownload } from "react-icons/fi";
import { socials } from "../data/data";
import resume from "../assets/Resume/Kyan_Villarin_Resume.pdf";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-16 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="text-sm font-medium text-sky-400">Contact</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Let's work together
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-400">
          I'm looking for opportunities to grow as a web developer. The best way
          to reach me is on LinkedIn.
        </p>

        <div className="mx-auto mt-10 grid max-w-sm grid-cols-2 gap-3 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-sm font-medium text-zinc-200 transition-colors hover:bg-white/5"
            >
              <social.icon /> {social.label}
            </a>
          ))}
          <a
            href={resume}
            download="Kyan_Villarin_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
          >
            <FiDownload /> Résumé
          </a>
        </div>
      </div>

      <div className="border-t border-white/5">
        <p className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Kyan Villarin
        </p>
      </div>
    </footer>
  );
}
