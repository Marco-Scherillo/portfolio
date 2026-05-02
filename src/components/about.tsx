export default function About() {
  return (
    <section id="about" className="mt-20 rounded-[2rem] border border-slate-200/20 bg-white p-10 shadow-xl shadow-slate-950/10 sm:p-12">
      <div className="grid gap-10 lg:grid-cols-[1.35fr_0.85fr] lg:items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-sky-500">About me</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
            Curious by nature, engineering by choice.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
            <p>
              I got into computer science because I wanted to understand how things work at every layer — not just
              use them. That curiosity pushed me through NJIT's CS program and into an internship where I shipped
              production features for hundreds of users across a full agile cycle.
            </p>
            <p>
              What I've learned is that the hardest part of software isn't writing code — it's understanding the
              problem clearly enough to write the <em>right</em> code. I gravitate toward work that requires
              thinking at multiple levels: data modeling, architecture, and the small details that make a product
              feel solid.
            </p>
          </div>
        </div>

        <div className="space-y-5 rounded-3xl border border-slate-200/80 bg-slate-50 p-6 text-slate-700 shadow-sm">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Background</p>
            <p className="mt-3 text-base leading-7">
              CS degree from NJIT, a software engineering internship at Merck Pharmaceuticals, and projects spanning
              distributed computing, mobile development, and the web.
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Currently exploring</p>
            <ul className="mt-3 space-y-2 text-base leading-7 list-disc list-inside">
              <li>Spring Boot & backend architecture</li>
              <li>System design and distributed systems</li>
              <li>Developer tooling and open source</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
