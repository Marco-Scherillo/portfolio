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
    <div className="border border-gray-200 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>

      <p className="text-gray-700 mb-3">
        {description}
      </p>

      <p className="text-sm text-gray-500">
        <strong>Tech:</strong> {tech.join(", ")}
      </p>

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