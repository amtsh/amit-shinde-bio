import LinkStudio from '../components/link-studio';

const projects = [
  {
    name: 'Pravah',
    blurb: 'A calm product surface shaped around momentum, clarity, and polished micro-interactions.',
    tags: ['Product', 'Craft', 'Frontend'],
  },
  {
    name: 'Tidy Roll',
    blurb: 'A utility-minded experience that makes repetitive work feel quiet, obvious, and fast.',
    tags: ['Workflow', 'TypeScript', 'UI'],
  },
  {
    name: 'Subscribed',
    blurb: 'A deliberate system for staying on top of recurring content without adding friction.',
    tags: ['Subscriptions', 'Next.js', 'Design'],
  },
  {
    name: 'Poke Recipe Book',
    blurb: 'A living notebook of practical patterns, ready-to-ship recipes, and repeatable decisions.',
    tags: ['Reference', 'Systems', 'Patterns'],
  },
];

const stack = ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Design systems', 'Frontend architecture'];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(255,255,255,1)_0%,rgba(245,245,241,1)_58%,rgba(237,237,232,1)_100%)] text-zinc-950">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-20 pt-5 sm:px-6 lg:px-8">
        <header className="sticky top-0 z-20 -mx-5 mb-8 border-b border-black/5 bg-[rgba(245,245,241,0.78)] px-5 py-4 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-sm font-medium tracking-[-0.02em] shadow-[0_1px_0_rgba(255,255,255,0.8)]">
                AS
              </div>
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.32em] text-black/45">Amit Shinde</p>
                <p className="text-sm text-black/70">Software Engineer at Spotify</p>
              </div>
            </div>

            <nav className="hidden items-center gap-8 text-sm text-black/55 md:flex">
              <a className="transition hover:text-black" href="#about">
                About
              </a>
              <a className="transition hover:text-black" href="#projects">
                Projects
              </a>
              <a className="transition hover:text-black" href="#stack">
                Stack
              </a>
              <a className="transition hover:text-black" href="#links">
                Links
              </a>
            </nav>
          </div>
        </header>

        <section className="grid gap-8 pb-14 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16 lg:pb-20 lg:pt-12">
          <div className="max-w-4xl">
            <p className="mb-5 text-[0.72rem] uppercase tracking-[0.34em] text-black/40">Stockholm, Sweden</p>
            <h1 className="max-w-4xl text-[clamp(3.7rem,10vw,8.3rem)] font-semibold tracking-[-0.08em] text-balance text-zinc-950">
              Quietly precise software, designed with restraint.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-black/62 sm:text-xl">
              Amit Shinde builds elegant product experiences with a focus on structure, spacing, and the small details that make software feel inevitable.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
              >
                View projects
              </a>
              <a
                href="#links"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:border-black/20 hover:bg-zinc-50"
              >
                Edit links
              </a>
            </div>
          </div>

          <aside className="grid gap-4">
            <div className="rounded-[2rem] border border-black/8 bg-white/75 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.32em] text-black/40">Role</p>
                  <p className="mt-3 text-2xl font-medium tracking-[-0.05em]">Software Engineer at Spotify</p>
                </div>
                <div className="rounded-full border border-black/8 bg-zinc-50 px-3 py-1 text-xs text-black/55">Now</div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-sm text-black/60">
                <div className="rounded-2xl bg-zinc-50 p-3">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-black/35">Base</p>
                  <p className="mt-2 text-black/88">Stockholm</p>
                </div>
                <div className="rounded-2xl bg-zinc-50 p-3">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-black/35">Stack</p>
                  <p className="mt-2 text-black/88">Next.js</p>
                </div>
                <div className="rounded-2xl bg-zinc-50 p-3">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-black/35">Style</p>
                  <p className="mt-2 text-black/88">Minimal</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/8 bg-white/75 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:p-6">
              <p className="text-[0.7rem] uppercase tracking-[0.32em] text-black/40">Selected work</p>
              <div className="mt-4 grid gap-3">
                {projects.slice(0, 2).map((project) => (
                  <div key={project.name} className="flex items-center justify-between gap-4 rounded-2xl border border-black/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,248,246,0.8))] px-4 py-4">
                    <div>
                      <p className="text-base font-medium tracking-[-0.03em]">{project.name}</p>
                      <p className="mt-1 text-sm leading-6 text-black/58">{project.blurb}</p>
                    </div>
                    <span className="text-xs uppercase tracking-[0.24em] text-black/30">0{projects.indexOf(project) + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="grid gap-5 border-y border-black/6 py-8 sm:grid-cols-3 sm:gap-4 lg:py-10">
          <div className="rounded-[1.6rem] border border-black/7 bg-white/70 p-5">
            <p className="text-[0.68rem] uppercase tracking-[0.32em] text-black/36">Approach</p>
            <p className="mt-3 text-lg leading-7 text-black/72">
              Strong hierarchy, soft visual rhythm, and interfaces that are clear without feeling busy.
            </p>
          </div>
          <div className="rounded-[1.6rem] border border-black/7 bg-white/70 p-5">
            <p className="text-[0.68rem] uppercase tracking-[0.32em] text-black/36">Focus</p>
            <p className="mt-3 text-lg leading-7 text-black/72">
              Product surfaces, internal tools, and high-clarity UI systems that ship well.
            </p>
          </div>
          <div className="rounded-[1.6rem] border border-black/7 bg-white/70 p-5">
            <p className="text-[0.68rem] uppercase tracking-[0.32em] text-black/36">Build</p>
            <p className="mt-3 text-lg leading-7 text-black/72">
              Next.js, TypeScript, and Tailwind CSS with enough restraint to stay timeless.
            </p>
          </div>
        </section>

        <section id="about" className="grid gap-8 py-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:py-20">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.34em] text-black/38">About</p>
            <h2 className="mt-4 max-w-md text-4xl font-semibold tracking-[-0.06em] text-zinc-950 sm:text-5xl">
              Product-minded engineering with calm execution.
            </h2>
          </div>
          <div className="rounded-[2rem] border border-black/8 bg-white/75 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.05)] sm:p-8">
            <p className="max-w-3xl text-lg leading-8 text-black/68 sm:text-[1.08rem]">
              I like building software that feels carefully composed: reduced to the essentials, but still warm enough to be approachable. The best product work is often invisible — the result of attention paid to spacing, motion, and the sequence in which information appears.
            </p>
          </div>
        </section>

        <section id="stack" className="grid gap-8 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:py-20">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.34em] text-black/38">Stack</p>
            <h2 className="mt-4 max-w-md text-4xl font-semibold tracking-[-0.06em] text-zinc-950 sm:text-5xl">
              The tools are modern. The feeling stays simple.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-black/8 bg-white/80 px-4 py-2.5 text-sm text-black/74 shadow-[0_1px_0_rgba(255,255,255,0.9)]"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="py-14 lg:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.72rem] uppercase tracking-[0.34em] text-black/38">Projects</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-zinc-950 sm:text-5xl">
                Selected work
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-black/54">
              A concise view of recent projects, presented as quiet editorial cards rather than noisy portfolio tiles.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="group rounded-[2rem] border border-black/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,248,246,0.8))] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-black/30">0{index + 1}</p>
                    <h3 className="mt-4 text-2xl font-medium tracking-[-0.05em] text-zinc-950">{project.name}</h3>
                  </div>
                  <div className="rounded-full border border-black/8 bg-white px-3 py-1 text-xs text-black/42">Featured</div>
                </div>
                <p className="mt-5 max-w-lg text-base leading-7 text-black/62">{project.blurb}</p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-black/8 bg-white px-3 py-1.5 text-xs text-black/52">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="links" className="py-14 lg:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.72rem] uppercase tracking-[0.34em] text-black/38">Links</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-zinc-950 sm:text-5xl">
                Minimal link studio
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-black/54">
              Add a URL, let the site prefetch metadata automatically, then refine the title, description, and image before saving.
            </p>
          </div>

          <div className="mt-8">
            <LinkStudio />
          </div>
        </section>

        <footer className="border-t border-black/6 pt-8 text-sm text-black/46 sm:flex sm:items-center sm:justify-between">
          <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
          <p>Stockholm, Sweden.</p>
        </footer>
      </div>
    </main>
  );
}
