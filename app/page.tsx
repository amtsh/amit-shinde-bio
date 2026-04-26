const projects = [
  {
    name: 'Pravah',
    blurb: 'A focused product experience with calm information architecture and polished interactions.',
    tags: ['Product', 'Craft', 'Frontend'],
  },
  {
    name: 'Tidy Roll',
    blurb: 'A clean utility-first project that keeps routine work lightweight and easy to navigate.',
    tags: ['Workflow', 'TypeScript', 'UI'],
  },
  {
    name: 'Subscribed',
    blurb: 'A simple, readable experience for organizing recurring content and staying on top of it.',
    tags: ['Subscriptions', 'Next.js', 'Design'],
  },
  {
    name: 'Poke Recipe Book',
    blurb: 'An organized collection of practical patterns and recipes for shipping better experiences.',
    tags: ['Reference', 'Systems', 'Patterns'],
  },
];

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-6 px-4 py-5 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-glow backdrop-blur-sm">
        <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
            <div className="absolute inset-0 bg-grain opacity-60" />
            <div className="relative flex h-full flex-col justify-between gap-10">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-white/70">
                  Developer bio
                </span>
                <span className="text-sm text-white/45">Stockholm, Sweden</span>
              </div>

              <div className="space-y-6">
                <p className="max-w-xl text-sm leading-6 text-white/60">
                  Software Engineer at Spotify building calm, precise products with Next.js, TypeScript, and Tailwind CSS.
                </p>
                <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                  Amit Shinde
                </h1>
                <p className="max-w-xl text-base leading-7 text-white/70 sm:text-lg">
                  I design and ship clean interfaces with strong hierarchy, purposeful motion, and careful attention to detail.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">Software Engineer at Spotify</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">Next.js</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">TypeScript</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">Tailwind CSS</span>
              </div>
            </div>
          </div>

          <div className="relative p-6 sm:p-8 lg:p-10">
            <div className="flex h-full min-h-[22rem] flex-col justify-between rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 sm:p-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-white/40">
                <span>Profile</span>
                <span>Selected work</span>
              </div>

              <div className="relative mx-auto flex aspect-[4/5] w-full max-w-sm items-end justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.17),transparent_35%),linear-gradient(180deg,#ffb4c8_0%,#ff7c5f_38%,#2a0f14_100%)] shadow-2xl">
                <div className="absolute left-1/2 top-14 h-44 w-44 -translate-x-1/2 rounded-full bg-[#ffd2b8]/95 blur-[1px]" />
                <div className="absolute left-1/2 top-28 h-52 w-52 -translate-x-1/2 rounded-[45%_45%_38%_38%/42%_42%_58%_58%] bg-[#1d1013]/95 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]" />
                <div className="absolute left-1/2 top-44 h-64 w-[92%] -translate-x-1/2 rounded-t-[40%] bg-gradient-to-b from-[#3a2027] via-[#241116] to-[#17090b]" />
                <div className="absolute bottom-12 left-1/2 h-52 w-[88%] -translate-x-1/2 rounded-[45%_45%_18%_18%] bg-gradient-to-b from-[#7f1f29] to-[#3a1015]" />
                <div className="absolute bottom-6 left-1/2 h-20 w-[82%] -translate-x-1/2 rounded-[50%] bg-[#2a1216] blur-sm" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,transparent_0%,transparent_48%,rgba(0,0,0,0.18)_100%)]" />
                <div className="absolute bottom-4 left-4 right-4 rounded-full bg-black/20 px-3 py-2 text-center text-[11px] uppercase tracking-[0.25em] text-white/70 backdrop-blur-md">
                  Clean, high-contrast, editorial layout
                </div>
              </div>

              <div className="grid gap-3 text-sm text-white/60 sm:grid-cols-3">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-white/20 hover:bg-white/10"
                  >
                    <span>{link.label}</span>
                    <span className="transition group-hover:translate-x-0.5">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-white/40">About</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Product-minded engineering, focused on clarity.
          </h2>
          <p className="mt-4 max-w-prose text-base leading-7 text-white/65">
            I like building interfaces that feel immediate, structured, and dependable. My work spans product surfaces, internal tools, and small details that make complex systems feel simple.
          </p>
        </div>

        <div id="stack" className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm uppercase tracking-[0.28em] text-white/40">Stack</p>
            <span className="text-sm text-white/45">Next.js / TypeScript / Tailwind CSS</span>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Design systems', 'Frontend architecture'].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/80">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-white/40">Projects</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Selected work</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-white/50">
            A concise view of the projects I’ve been working on recently.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="group rounded-[1.5rem] border border-white/10 bg-black/20 p-5 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/35">0{index + 1}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{project.name}</h3>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60 transition group-hover:border-white/20">
                  Featured
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-white/65">{project.blurb}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/55">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="flex flex-col gap-3 border-t border-white/10 py-4 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
        <p>Stockholm, Sweden.</p>
      </footer>
    </main>
  );
}
