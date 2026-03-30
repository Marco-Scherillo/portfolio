export default function About() {
  return (
    <section id="about" className="mt-20 rounded-[2rem] border border-slate-200/20 bg-white p-10 shadow-xl shadow-slate-950/10 sm:p-12">
      <div className="grid gap-10 lg:grid-cols-[1.35fr_0.85fr] lg:items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-sky-500">About me</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
            Software engineering with a practical, product-first focus.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
            <p>
              I’m a Computer Science graduate from NJIT who enjoys turning complex ideas into polished, useful applications. My experience spans full-stack development, distributed systems, and data-driven tooling.
            </p>
            <p>
              I’ve shipped features across the entire stack, built intuitive user interfaces, and helped teams move faster through clean architecture. Outside of code, I love music and staying active.
            </p>
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-slate-200/80 bg-slate-50 p-6 text-slate-700 shadow-sm">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">What I work on</p>
            <p className="mt-3 text-base leading-7">
              Full-stack apps, responsive interfaces, APIs, and backend systems with a focus on reliability and user experience.
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Strengths</p>
            <ul className="mt-3 space-y-2 text-base leading-7 list-disc list-inside">
              <li>React & TypeScript frontend development</li>
              <li>Backend services and database design</li>
              <li>Clean, maintainable code and agile collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
