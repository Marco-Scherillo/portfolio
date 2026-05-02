import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="rounded-[2rem] border border-white/10 bg-slate-900/95 p-10 shadow-2xl shadow-slate-950/40"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-sky-400">Work</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Projects</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
            A mix of coursework, personal builds, and collaborative projects — from parallel computing in C to
            full-stack web apps.
          </p>
        </div>
        <a
          href="https://github.com/Marco-Scherillo"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-sm text-sky-400 hover:text-sky-300 transition"
        >
          More on GitHub →
        </a>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="FORTRAN-95 Interpreter"
          description="Built a lexical analyzer, syntax parser (using EBNF), and execution engine for handling control flow and variable assignments."
          tech={["C++", "Parsing", "EBNF", "Compilers"]}
          github="https://github.com/Marco-Scherillo/interpreter"
        />
        <ProjectCard
          title="A* Search Pathfinding"
          description="Designed and implemented a pathfinding algorithm to solve a 4×4 matrix puzzle, efficiently identifying the shortest path to the goal state."
          tech={["C", "A*", "Heuristics", "Data Structures"]}
          github="https://github.com/Marco-Scherillo/Intesive-Programing-in-Linux-Projects"
        />
        <ProjectCard
          title="Stock Data Scraper"
          description="Python-based scraper for retrieving and analyzing top-performing stocks, backed by MongoDB Atlas and presented through a dynamic Apache/PHP website."
          tech={["Python", "MongoDB Atlas", "Apache", "PHP"]}
        />
        <ProjectCard
          title="Pokémon Battle Simulator"
          description="Collaborated to design and implement a turn-based Pokémon battle feature using TDD throughout. Deployed on an Amazon EC2 instance."
          tech={["TypeScript", "React", "Node.js", "AWS EC2"]}
          github="https://github.com/Marco-Scherillo/covey-mon"
        />
        <ProjectCard
          title="RESTful Shopping Cart API"
          description="FastAPI-powered shopping cart with product management and cart operations via a clean REST interface."
          tech={["Python", "FastAPI", "REST", "Backend"]}
          github="https://github.com/Marco-Scherillo/Shopping-cart-Api"
        />
        <ProjectCard
          title="Flight Data Analysis"
          description="Processed 22 years of U.S. flight data using a Hadoop MapReduce cluster of 10 Amazon EC2 instances to surface airline performance trends."
          tech={["Java", "Hadoop", "MapReduce", "Amazon EC2"]}
          github="https://github.com/Marco-Scherillo/Flight-project"
        />
        <ProjectCard
          title="Deck Scanner"
          description="Android app built with CameraX and OCR to scan trading cards, track collections, and store data locally — developed in an Agile team setting."
          tech={["Android", "Kotlin", "CameraX", "OCR"]}
          github="https://github.com/Marco-Scherillo/DeckMaster"
        />
        <ProjectCard
          title="MPI Matrix Multiplication"
          description="Parallel matrix multiplication using MPI with distributed computation across multiple nodes."
          tech={["C", "MPI", "Parallel Computing"]}
        />
        <ProjectCard
          title="Pthreads Pi Approximation"
          description="Multithreaded C program approximating Pi via Monte Carlo simulation, benchmarking performance across thread counts."
          tech={["C", "Pthreads", "Concurrency"]}
        />
      </div>
    </section>
  );
}
