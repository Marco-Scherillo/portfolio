import Projects from "../components/Projects";
import About from "../components/about";

export default function Home() {
  return (
    <main className="max-w-[900px] mx-auto px-4 py-12">
      {/* ===== HEADER SECTION ===== */}
      <section>
        <h1 className="text-5xl font-bold mb-2">Marco Scherillo</h1>

        <h2 className="text-xl font-normal text-gray-500">
          Computer Science Graduate from NJIT
        </h2>

        <About />

        <div className="mt-8">
          <a
            href="https://github.com/Marco-Scherillo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          {" · "}
          <a
            href="https://linkedin.com/in/marco-scherillo-7a7428158"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <Projects />
    </main>
  );
}
