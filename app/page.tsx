import type { ReactNode } from 'react';

const projects = [
  {
    name: 'Pixelforge',
    meta: 'Latest launch',
    description:
      'A calm design system for moving from sketches to polished interfaces with fewer distractions.',
  },
  {
    name: 'Lumen CLI',
    meta: 'Tooling',
    description:
      'A compact command surface for shipping fast without losing clarity, rhythm, or control.',
  },
  {
    name: 'Tideline',
    meta: 'Productivity',
    description:
      'A small, high-utility dashboard for keeping recurring work visible and easy to manage.',
  },
  {
    name: 'Northwind',
    meta: 'Mobile app',
    description:
      'A polished mobile companion built around notes, progress, and low-friction daily review.',
  },
];

const talks = [
  {
    title: 'Building Pixelforge',
    description:
      'A live breakdown of the interface rhythm, constraints, and design choices behind the product.',
    length: '12 min',
  },
  {
    title: 'Shipping solo in public',
    description:
      'A concise demo on pacing work, staying focused, and making each screen feel finished.',
    length: '8 min',
  },
];

const featuredIn = [
  { name: 'Hacker News', label: 'Discussion', tone: 'Launch' },
  { name: 'Product Hunt', label: 'Launch', tone: 'Latest launch' },
  { name: 'The Verge', label: 'Feature', tone: 'Profile' },
];

const socialLinks = [
  { label: 'Website', href: '#' },
  { label: 'X', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'LinkedIn', href: '#' },
];

function SectionHeader({ title, eyebrow }: { title: string; eyebrow: string }) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <p className="text-[0.68rem] font-medium uppercase tracking-[0.34em] text-white/34">{eyebrow}</p>
        <h2 className="mt-2 text-[1.35rem] font-semibold tracking-[-0.06em] text-white sm:text-[1.5rem]">
          {title}
        </h2>
      </div>
      <a
        href="#"
        className="inline-flex h-8 items-center rounded-full border border-white/10 bg-white/5 px-3 text-[0.72rem] font-medium tracking-[-0.01em] text-white/74 transition hover:border-white/20 hover:bg-white/10"
      >
        Show all
      </a>
    </div>
  );
}

function SocialIcon({ children }: { children: ReactNode }) {
  return (
    <a
      href="#"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/72 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
    >
      {children}
    </a>
  );
}

function WebsiteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.75 2.6 4.25 5.65 4.25 9S14.75 18.4 12 21c-2.75-2.6-4.25-5.65-4.25-9S9.25 5.6 12 3Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l7.7 9.6L4.5 20H7l6.3-7.5L19 20h1.5l-8.1-10L19.5 4H17l-5.8 6.9-4.7-6.9H4Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.66c-2.78.61-3.37-1.18-3.37-1.18-.46-1.17-1.12-1.48-1.12-1.48-.92-.62.07-.61.07-.61 1 .08 1.53 1.04 1.53 1.04.89 1.52 2.34 1.08 2.91.83.09-.65.36-1.08.65-1.33-2.21-.25-4.53-1.11-4.53-4.93 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.29.1-2.68 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.56 1.39.21 2.42.1 2.68.64.7 1.03 1.59 1.03 2.68 0 3.83-2.33 4.68-4.55 4.93.37.32.71.95.71 1.92v2.85c0 .26.18.57.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <path d="M8 10v6" />
      <path d="M8 6.8v.2" />
      <path d="M12 16v-2.9c0-1.6 1-2.7 2.4-2.7 1.4 0 2.2.9 2.2 2.7V16" />
    </svg>
  );
}

function PortraitFrame() {
  return (
    <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,#1a1a1a_0%,#0f0f0f_52%,#090909_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(255,255,255,0.18),transparent_24%),radial-gradient(circle_at_75%_20%,rgba(96,165,250,0.18),transparent_18%),radial-gradient(circle_at_25%_84%,rgba(255,255,255,0.08),transparent_22%)]" />
      <div className="relative aspect-[4/5] min-h-[510px] p-4 sm:p-5">
        <div className="flex h-full flex-col justify-between rounded-[1.1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03)_36%,rgba(0,0,0,0.16)_100%)] p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.3em] text-white/72">
              Amit Shinde
            </div>
            <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.3em] text-white/72">
              Stockholm, Sweden
            </div>
          </div>

          <div className="relative mt-10 flex flex-1 items-end justify-center">
            <div className="absolute inset-x-0 top-5 mx-auto h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.3),rgba(255,255,255,0.06)_42%,transparent_75%)] blur-2xl" />
            <div className="absolute bottom-10 h-[76%] w-[84%] rounded-[40%_40%_14%_14%/26%_26%_14%_14%] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02)_18%,rgba(0,0,0,0.18)_58%,rgba(0,0,0,0.42)_100%)] blur-[0.1px]" />
            <div className="absolute bottom-[12%] h-[56%] w-[64%] rounded-[42%_42%_18%_18%/28%_28%_14%_14%] bg-[radial-gradient(circle_at_50%_22%,rgba(255,255,255,0.42),rgba(255,255,255,0.12)_18%,rgba(255,255,255,0.02)_36%,rgba(0,0,0,0.08)_70%),linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.03)_30%,rgba(0,0,0,0.42)_100%)] opacity-95" />
            <div className="absolute bottom-[17%] h-[44%] w-[72%] rounded-[42%_42%_18%_18%/34%_34%_16%_16%] bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.52))]" />
            <div className="absolute bottom-[20%] h-[15%] w-[22%] rounded-[50%] bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.22),rgba(255,255,255,0.06)_40%,rgba(0,0,0,0.28)_100%)] blur-[0.5px]" />
            <div className="absolute bottom-[24%] h-[9%] w-[48%] rounded-full bg-black/28 blur-sm" />
            <div className="absolute inset-x-4 bottom-4 rounded-[1rem] border border-white/10 bg-black/34 px-4 py-3 backdrop-blur-sm">
              <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/36">Indie Developer</p>
              <p className="mt-1 text-sm text-white/72">Quietly precise software, designed with restraint.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col px-4 pb-10 pt-4 sm:px-5">
        <section>
          <PortraitFrame />
          <div className="mt-4 flex items-center gap-3">
            <SocialIcon>
              <WebsiteIcon />
            </SocialIcon>
            <SocialIcon>
              <XIcon />
            </SocialIcon>
            <SocialIcon>
              <GitHubIcon />
            </SocialIcon>
            <SocialIcon>
              <LinkedInIcon />
            </SocialIcon>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <SectionHeader title="Featured Projects" eyebrow="Featured Projects" />
          <div className="space-y-3">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="rounded-[1rem] border border-white/10 bg-[#0f0f0f] px-4 py-4"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.13),rgba(255,255,255,0.03))] text-[0.72rem] font-medium text-white/56">
                    0{index + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="truncate text-[1.05rem] font-medium tracking-[-0.04em] text-white">
                          {project.name}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-white/56">{project.description}</p>
                      </div>
                      <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-white/56">
                        {project.meta}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-9 space-y-4">
          <SectionHeader title="Talks & demos" eyebrow="Talks & demos" />
          <div className="space-y-3">
            {talks.map((talk, index) => (
              <article key={talk.title} className="overflow-hidden rounded-[1rem] border border-white/10 bg-[#0f0f0f]">
                <div className="grid grid-cols-[110px_1fr] gap-4 p-3.5">
                  <div className="relative overflow-hidden rounded-[0.95rem] border border-white/10 bg-[linear-gradient(160deg,rgba(96,165,250,0.42),rgba(17,17,17,0.18)_52%,rgba(255,255,255,0.06))]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.18),transparent_24%),radial-gradient(circle_at_75%_70%,rgba(255,255,255,0.1),transparent_20%)]" />
                    <div className="relative flex min-h-[108px] items-end p-3">
                      <span className="rounded-full border border-white/12 bg-black/28 px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.22em] text-white/72">
                        Play
                      </span>
                    </div>
                  </div>
                  <div className="min-w-0 pr-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[0.66rem] uppercase tracking-[0.32em] text-white/34">Talk {index + 1}</p>
                        <h3 className="mt-2 text-[1rem] font-medium tracking-[-0.04em] text-white">{talk.title}</h3>
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-white/56">
                        Visit channel
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/56">{talk.description}</p>
                    <p className="mt-3 text-[0.7rem] uppercase tracking-[0.28em] text-white/30">{talk.length}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-9 space-y-4 pb-8">
          <SectionHeader title="Featured in" eyebrow="Featured in" />
          <div className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {featuredIn.map((item, index) => (
              <article
                key={item.name}
                className="min-w-[152px] flex-1 rounded-[1rem] border border-white/10 bg-[#0f0f0f] p-3.5"
              >
                <div className="flex h-24 items-center justify-center rounded-[0.9rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">
                  <div className="text-center">
                    <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/34">{item.tone}</p>
                    <p className="mt-2 text-[1.05rem] font-medium tracking-[-0.05em] text-white">{item.name}</p>
                  </div>
                </div>
                <p className="mt-3 text-[0.68rem] uppercase tracking-[0.28em] text-white/32">{item.label}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-white/58">0{index + 1}</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.64rem] uppercase tracking-[0.22em] text-white/52">
                    Latest launch
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
