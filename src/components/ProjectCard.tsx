import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export default function ProjectCard({ title, description, tech, github, demo }: ProjectCardProps) {
  return (
    <div className="group flex flex-col rounded-2xl border border-white/10 bg-slate-800/50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-white/20 hover:bg-slate-800/80 hover:shadow-lg">
      <h3 className="text-base font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-400">{description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-sky-500/10 px-2.5 py-0.5 text-xs font-medium text-sky-300 ring-1 ring-sky-500/20"
          >
            {t}
          </span>
        ))}
      </div>

      {(github || demo) && (
        <div className="mt-5 flex gap-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <FaGithub size={12} />
              GitHub
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <FaExternalLinkAlt size={10} />
              Live Demo
            </a>
          )}
        </div>
      )}
    </div>
  );
}
