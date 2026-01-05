import Projects from "./components/Projects";
import About from "./components/about";

function App() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "3rem 1rem",
      }}
    >
      {/* ===== HEADER SECTION ===== */}
      <section>
        <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>
          Marco Scherillo
        </h1>

        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 400,
            color: "#555",
          }}
        >
          Computer Science Graduate from NJIT
        </h2>
          {/* ===== About SECTION ===== */}
        <About />

        <div style={{ marginTop: "2rem" }}>
          <a
            href="https://github.com/Marco-Scherillo"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {" · "}
          <a
            href="https://linkedin.com/in/marco-scherillo-7a7428158"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <Projects />
    </main>
  );
}

export default App;