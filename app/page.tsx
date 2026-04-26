const socialLinks = [
  { label: 'Website', href: '#', icon: WebsiteIcon },
  { label: 'X', href: '#', icon: XIcon },
  { label: 'GitHub', href: '#', icon: GitHubIcon },
  { label: 'LinkedIn', href: '#', icon: LinkedInIcon },
];

const projects = [
  {
    name: 'Pixelforge',
    summary: 'A focused system for shaping visual workflows with fewer distractions and sharper feedback loops.',
    meta: 'Design tools · 2025',
  },
  {
    name: 'Lumen CLI',
    summary: 'A tiny command line surface for moving from idea to output with calm, opinionated defaults.',
    meta: 'Developer tooling · 2024',
  },
  {
    name: 'Tideline',
    summary: 'A minimal personal dashboard that makes recurring tasks feel light instead of noisy.',
    meta: 'Productivity · 2024',
  },
  {
    name: 'Northwind',
    summary: 'A polished mobile companion for tracking progress, notes, and a clean day-to-day flow.',
    meta: 'Mobile app · 2023',
  },
];

const talks = [
  {
    title: 'Building Pixelforge',
    detail: 'A live walkthrough of the design decisions, interface rhythm, and system constraints behind the product.',
    length: '12 min',
  },
  {
    title: 'Shipping solo in public',
    detail: 'A concise demo on pacing work, keeping the UI quiet, and making each screen feel finished.',
    length: '8 min',
  },
];

const media = [
  { name: 'Hacker News', note: 'Featured discussion', tone: 'Community' },
  { name: 'Product Hunt', note: 'Launch coverage', tone: 'Launch' },
  { name: 'The Verge', note: 'Profile mention', tone: 'Press' },
];

function SectionTitle({ eyebrow, title, blurb }: { eyebrow: string; title: string; blurb: string }) {
  return (
    <div className="space-y-3">
      <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-white/38">{eyebrow}</p>
      <h2 className="max-w-[12ch] text-[clamp(2rem,9vw,2.9rem)] font-semibold tracking-[-0.08em] leading-[0.94] text-white">
        {title}
      </h2>
      <p className="max-w-[32ch] text-sm leading-6 text-white/56">{blurb}</p>
    </div>
  );
}

function IconButton({ label, href, children }: { label: string; href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:border-white/18 hover:bg-white/10 hover:text-white"
    >
      {children}
    </a>
  );
}

function WebsiteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.75 2.6 4.25 5.65 4.25 9s-1.5 6.4-4.25 9c-2.75-2.6-4.25-5.65-4.25-9S9.25 5.6 12 3Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l7.6 9.7L4.5 20H7l6.2-7.4L19 20h1.5l-8-10L19.5 4H17l-5.9 7-4.8-7H4Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.66c-2.78.61-3.37-1.18-3.37-1.18-.46-1.17-1.12-1.48-1.12-1.48-.92-.62.07-.61.07-.61 1 .08 1.53 1.04 1.53 1.04.89 1.52 2.34 1.08 2.91.83.09-.65.36-1.08.65-1.33-2.21-.25-4.53-1.11-4.53-4.93 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.29.1-2.68 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.56 1.39.21 2.42.1 2.68.64.7 1.03 1.59 1.03 2.68 0 3.83-2.33 4.68-4.55 4.93.37.32.71.95.71 1.92v2.85c0 .26.18.57.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9v9" />
      <path d="M6 5.5v.2" />
      <path d="M10 18v-4.9c0-1.7 1-2.8 2.5-2.8 1.4 0 2.2.9 2.2 2.8V18" />
      <path d="M10 13.1V18" />
      <rect x="4" y="4" width="16" height="16" rx="4" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[460px] flex-col px-4 pb-10 pt-4 sm:px-5">
        <section className="space-y-4">
          <div className="relative overflow-hidden rounded-[1.1rem] border border-white/10 bg-[linear-gradient(180deg,#1b1b1b_0%,#111111_48%,#090909_100%)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent_38%),radial-gradient(circle_at_100%_0%,rgba(96,165,250,0.20),transparent_24%),radial-gradient(circle_at_0%_100%,rgba(255,255,255,0.07),transparent_24%)]" />
            <div className="relative flex min-h-[490px] flex-col justify-between p-4 sm:p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-white/72">
                  Stockholm, Sweden
                </div>
                <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-white/72">
                  Indie Developer
                </div>
              </div>

              <div className="space-y-6">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-[1.1rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02)_50%,rgba(0,0,0,0.28)_100%)]">
                  <div className="flex h-full flex-col justify-end p-5">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm font-semibold tracking-[-0.04em] text-white">
                        AS
                      </div>
                      <div>
                        <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/42">Profile</p>
                        <p className="text-sm text-white/72">Amit Shinde</p>
                      </div>
                    </div>
                    <h1 className="max-w-[7ch] text-[clamp(3.6rem,13vw,5rem)] font-semibold tracking-[-0.1em] leading-[0.9] text-white">
                      Amit Shinde
                    </h1>
                    <p className="mt-3 max-w-[22ch] text-base leading-7 text-white/62">
                      Minimal product experiences, polished with quiet detail.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {socialLinks.map((item) => (
                    <IconButton key={item.label} label={item.label} href={item.href}>
                      <item.icon />
                    </IconButton>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 space-y-4">
          <SectionTitle
            eyebrow="Featured projects"
            title="Featured projects"
            blurb="A compact list of work that feels deliberate, modern, and easy to scan on mobile."
          />

          <div className="space-y-3">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="rounded-[0.95rem] border border-white/10 bg-[#111111] px-4 py-4"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/6 text-[0.75rem] font-medium text-white/56">
                    0{index + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-[1.12rem] font-medium tracking-[-0.04em] text-white">
                          {project.name}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-white/56">{project.summary}</p>
                      </div>
                      <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-white/52">
                        See website
                      </span>
                    </div>
                    <p className="mt-3 text-[0.72rem] uppercase tracking-[0.28em] text-white/32">{project.meta}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <SectionTitle
            eyebrow="Talks & demos"
            title="Talks & demos"
            blurb="Short, polished video cards that keep the focus on the work and the speaking cadence."
          />

          <div className="space-y-3">
            {talks.map((talk, index) => (
              <article key={talk.title} className="overflow-hidden rounded-[0.95rem] border border-white/10 bg-[#111111]">
                <div className="grid grid-cols-[112px_1fr] gap-4 p-3">
                  <div className="relative overflow-hidden rounded-[0.8rem] border border-white/10 bg-[linear-gradient(160deg,rgba(96,165,250,0.42),rgba(17,17,17,0.15)_55%,rgba(255,255,255,0.06))]">
                    <div className="flex h-full min-h-[100px] items-end p-3">
                      <div className="rounded-full border border-white/12 bg-black/28 px-2 py-1 text-[0.64rem] uppercase tracking-[0.22em] text-white/70">
                        Play
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 pr-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/34">Talk {index + 1}</p>
                        <h3 className="mt-2 text-[1.03rem] font-medium tracking-[-0.04em] text-white">{talk.title}</h3>
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-white/52">
                        Visit channel
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/56">{talk.detail}</p>
                    <p className="mt-3 text-[0.72rem] uppercase tracking-[0.28em] text-white/30">{talk.length}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 space-y-4 pb-8">
          <SectionTitle
            eyebrow="Media"
            title="Media"
            blurb="A clean grid of press mentions and community features rendered like small editorial cards."
          />

          <div className="grid gap-3 sm:grid-cols-3">
            {media.map((item) => (
              <article key={item.name} className="rounded-[0.95rem] border border-white/10 bg-[#111111] p-4">
                <div className="flex h-20 items-end rounded-[0.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-white/70" />
                </div>
                <p className="mt-4 text-[0.68rem] uppercase tracking-[0.28em] text-white/32">{item.tone}</p>
                <h3 className="mt-2 text-[1rem] font-medium tracking-[-0.04em] text-white">{item.name}</h3>
                <p className="mt-2 text-sm leading-6 text-white/52">{item.note}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
