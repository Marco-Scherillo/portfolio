type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <div
      className="
    group
    rounded-xl
    border border-gray-200
   bg-white
    p-6
    shadow-sm
    transition
    hover:-translate-y-1
    hover:shadow-lg
    "
    >
      <h3 className="text-xl font-semibold tracking-tight mb-2">{title}</h3>

      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        )}

        {demo && (
          <>
            {" · "}
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Live Demo
            </a>
          </>
        )}
      </div>
    </div>
  );
}
