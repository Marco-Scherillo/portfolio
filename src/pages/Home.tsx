import type { MouseEvent } from "react";
import Projects from "../components/Projects";
import About from "../components/about";
import { FaGithub, FaLinkedin, FaPenNib, FaEnvelope } from "react-icons/fa";
import njitSeal from "../assets/New_Jersey_IT_seal.svg.png";
import { Link } from "react-router-dom";

const scrollToSection = (sectionId: string, event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  const section = document.getElementById(sectionId);
  section?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-slate-900/95" />
      <div className="pointer-events-none absolute -left-40 top-24 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="inline-flex mb-8 items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/20"
        >
          <FaPenNib size={14} />
          Blog
        </Link>

        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.9fr_1.1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm text-sky-200 ring-1 ring-white/10">
                <span className="font-semibold">NJIT Graduate • Software Engineer</span>
              </div>

              <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Marco Scherillo
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                I build polished full-stack products, thoughtful web experiences, and production-ready systems using React,
                TypeScript, and modern software engineering practices.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#about"
                  onClick={(event) => scrollToSection("about", event)}
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
                >
                  About me
                </a>
                <a
                  href="#projects"
                  onClick={(event) => scrollToSection("projects", event)}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-300 hover:bg-white/10"
                >
                  View projects
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-slate-100">
                <a
                  href="https://github.com/Marco-Scherillo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 transition hover:bg-white/10"
                >
                  <FaGithub size={18} />
                  <span className="ml-2 text-sm">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/marco-scherillo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 transition hover:bg-white/10"
                >
                  <FaLinkedin size={18} />
                  <span className="ml-2 text-sm">LinkedIn</span>
                </a>
                <a
                  href="mailto:marcoscherillo98@gmail.com"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 transition hover:bg-white/10"
                >
                  <FaEnvelope size={18} />
                  <span className="ml-2 text-sm">Email</span>
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/30">
              <div className="flex items-center gap-4">
                <img
                  src={njitSeal}
                  alt="NJIT Seal"
                  className="h-14 w-14 rounded-2xl border border-white/10 bg-white/10 object-contain"
                />
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-sky-300">Computer Science</p>
                  <p className="mt-2 text-2xl font-semibold text-white">NJIT</p>
                </div>
              </div>

              <div className="mt-8 space-y-4 text-slate-300">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Focus</p>
                  <p className="mt-2 text-base">Full-stack development, scalable systems, and polished user experiences.</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Experience</p>
                  <p className="mt-2 text-base">Interned in full-stack development and delivered product-ready solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <About />

        <div className="mt-20 rounded-[2rem] border border-slate-200/20 bg-white/90 p-8 shadow-xl shadow-slate-950/10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-slate-950">Skills</h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                A strong toolkit for frontend, backend, and systems work with a focus on reliable code and fast iteration.
              </p>
            </div>
            <div className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "React",
                "TypeScript",
                "Java",
                "Python",
                "SQL",
                "Kotlin",
                "Node.js",
                "REST APIs",
                "Tailwind CSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center justify-center rounded-full border border-slate-200/80 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 rounded-[2rem] border border-white/10 bg-slate-900/95 p-10 text-slate-100 shadow-2xl shadow-slate-950/40">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Let’s connect</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready to build something meaningful together?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              I’m open to internships, full-time opportunities, and collaborations where thoughtful engineering meets strong product design.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="mailto:hello@marcoscherillo.dev"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
              >
                Say hello
              </a>
              <a
                href="https://www.linkedin.com/in/marco-scherillo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <Projects />
        </div>
      </div>
    </main>
  );
}
