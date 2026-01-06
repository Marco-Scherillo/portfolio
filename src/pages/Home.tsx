import Projects from "../components/Projects";
import About from "../components/about";
import { FaGithub, FaLinkedin, FaPenNib } from "react-icons/fa";
import njitSeal from "../assets/New_Jersey_IT_seal.svg.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
<main className="relative min-h-screen overflow-hidden bg-linear-to-br from-gray-50 via-white to-gray-100">
      {/* ===== LINK TO BLOG ===== */}
      <Link
        to="/blog"
        className="
    absolute top-6 left-6
    flex items-center gap-2
    rounded-full
    bg-white/70
    px-4 py-1.5
    text-sm font-medium
    text-gray-700
    backdrop-blur
    hover:bg-white
    hover:text-black
    transition
  "
      >
        <FaPenNib size={14} />
        Blog
      </Link>

      {/* ===== SOFT GLOW BACKGROUND ===== */}
      <div
        className="
        pointer-events-none
        absolute -top-40 -left-40
        h-[500px] w-[500px]
        rounded-full
        bg-linear-to-br from-blue-400/20 to-purple-400/20
        blur-3xl
      "
      />

      <div className="relative max-w-[900px] mx-auto px-4 py-16">
        {/* ===== SIDE ACCENTS ===== */}
<div className="hidden lg:block absolute left-8 top-32 h-[60%] w-px bg-gray-200" />
<div className="hidden lg:block absolute right-8 top-32 h-[60%] w-px bg-gray-200" />

<div
  className="
    hidden lg:block
    absolute left-4 top-1/2
    -translate-y-1/2
    -rotate-90
    text-xs tracking-widest text-gray-400
  "
>
  COMPUTER SCIENCE
</div>

        {/* ===== HERO / HEADER ===== */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={njitSeal}
              alt="NJIT Seal"
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
            />

            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
              Marco Scherillo
            </h1>
          </div>

          <About />

          {/* ===== SOCIAL LINKS ===== */}
          <div className="mt-8 flex items-center gap-6">
            <a
              href="https://github.com/Marco-Scherillo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-black transition"
            >
              <FaGithub size={28} />
            </a>

            <a
              href="https://linkedin.com/in/marco-scherillo-7a7428158"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-[#0A66C2] transition"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </section>

        {/* ===== DIVIDER ===== */}
        <div className="h-px w-full bg-gray-200 mb-20" />

        {/* ===== PROJECTS ===== */}
        <Projects />
      </div>
    </main>
  );
}
