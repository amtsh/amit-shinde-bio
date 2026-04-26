'use client';

import { useEffect, useMemo, useState } from 'react';

type LinkItem = {
  id: string;
  url: string;
  title: string;
  description: string;
  image?: string;
};

type DraftLink = {
  url: string;
  title: string;
  description: string;
  image: string;
};

const storageKey = 'amit-shinde-link-studio';
const defaultLinks: LinkItem[] = [
  {
    id: 'github',
    url: 'https://github.com/',
    title: 'GitHub',
    description: 'Source code, experiments, and shipping history.',
    image: '',
  },
  {
    id: 'spotify',
    url: 'https://open.spotify.com/',
    title: 'Spotify',
    description: 'The place where product craft and engineering meet.',
    image: '',
  },
];

function isValidUrl(value: string) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

export default function LinkStudio() {
  const [links, setLinks] = useState<LinkItem[]>(defaultLinks);
  const [url, setUrl] = useState('');
  const [draft, setDraft] = useState<DraftLink>({ url: '', title: '', description: '', image: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved) as LinkItem[];
      if (Array.isArray(parsed) && parsed.length > 0) {
        setLinks(parsed);
      }
    } catch {
      // ignore invalid local state
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(links));
  }, [links]);

  const visibleLinks = useMemo(() => links, [links]);

  useEffect(() => {
    if (!isValidUrl(url)) {
      setStatus('idle');
      setError('');
      return;
    }

    const controller = new AbortController();
    const timeout = window.setTimeout(async () => {
      try {
        setStatus('loading');
        setError('');
        const response = await fetch(`/api/link-metadata?url=${encodeURIComponent(url)}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error('Unable to fetch metadata');
        }

        const data = (await response.json()) as Partial<DraftLink>;
        setDraft((current) => ({
          url,
          title: data.title?.trim() || new URL(url).hostname.replace(/^www\./, ''),
          description: data.description?.trim() || '',
          image: data.image?.trim() || '',
        }));
        setStatus('ready');
      } catch (fetchError) {
        if (controller.signal.aborted) return;
        setStatus('error');
        setError(fetchError instanceof Error ? fetchError.message : 'Unable to fetch metadata');
        setDraft((current) => ({
          ...current,
          url,
          title: new URL(url).hostname.replace(/^www\./, ''),
          description: '',
          image: '',
        }));
      }
    }, 650);

    return () => {
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, [url]);

  const resetDraft = () => {
    setUrl('');
    setDraft({ url: '', title: '', description: '', image: '' });
    setStatus('idle');
    setError('');
    setEditingId(null);
  };

  const addOrUpdateLink = () => {
    if (!isValidUrl(draft.url)) return;

    const next: LinkItem = {
      id: editingId ?? crypto.randomUUID(),
      url: draft.url,
      title: draft.title.trim() || new URL(draft.url).hostname.replace(/^www\./, ''),
      description: draft.description.trim(),
      image: draft.image.trim(),
    };

    setLinks((current) => {
      const withoutCurrent = current.filter((item) => item.id !== next.id);
      return [next, ...withoutCurrent];
    });
    resetDraft();
  };

  const beginEdit = (item: LinkItem) => {
    setEditingId(item.id);
    setUrl(item.url);
    setDraft({
      url: item.url,
      title: item.title,
      description: item.description,
      image: item.image ?? '',
    });
    setStatus('ready');
    setError('');
  };

  const removeLink = (id: string) => {
    setLinks((current) => current.filter((item) => item.id !== id));
    if (editingId === id) {
      resetDraft();
    }
  };

  return (
    <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-[2rem] border border-black/8 bg-white/85 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.05)] sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.32em] text-black/35">Add link</p>
            <h3 className="mt-3 text-2xl font-medium tracking-[-0.05em] text-zinc-950">Prefetch first, edit second.</h3>
          </div>
          <div className="rounded-full border border-black/8 bg-zinc-50 px-3 py-1 text-xs text-black/45">iOS style</div>
        </div>

        <div className="mt-6 space-y-4">
          <label className="block">
            <span className="mb-2 block text-xs uppercase tracking-[0.28em] text-black/35">URL</span>
            <input
              value={url}
              onChange={(event) => {
                setUrl(event.target.value);
                setDraft((current) => ({ ...current, url: event.target.value }));
              }}
              placeholder="https://example.com"
              className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-[15px] text-zinc-950 outline-none transition placeholder:text-black/28 focus:border-black/20 focus:ring-4 focus:ring-black/5"
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.28em] text-black/35">Title</span>
              <input
                value={draft.title}
                onChange={(event) => setDraft((current) => ({ ...current, title: event.target.value }))}
                placeholder="Fetched automatically"
                className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-[15px] text-zinc-950 outline-none transition placeholder:text-black/28 focus:border-black/20 focus:ring-4 focus:ring-black/5"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.28em] text-black/35">Image</span>
              <input
                value={draft.image}
                onChange={(event) => setDraft((current) => ({ ...current, image: event.target.value }))}
                placeholder="Preview image URL"
                className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-[15px] text-zinc-950 outline-none transition placeholder:text-black/28 focus:border-black/20 focus:ring-4 focus:ring-black/5"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-xs uppercase tracking-[0.28em] text-black/35">Description</span>
            <textarea
              value={draft.description}
              onChange={(event) => setDraft((current) => ({ ...current, description: event.target.value }))}
              placeholder="Metadata prefilled from the page"
              rows={4}
              className="w-full rounded-[1.4rem] border border-black/10 bg-white px-4 py-3 text-[15px] leading-7 text-zinc-950 outline-none transition placeholder:text-black/28 focus:border-black/20 focus:ring-4 focus:ring-black/5"
            />
          </label>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            onClick={addOrUpdateLink}
            disabled={!isValidUrl(draft.url)}
            className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-300"
          >
            {editingId ? 'Save link' : 'Add link'}
          </button>
          <button
            onClick={resetDraft}
            className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-white px-5 text-sm font-medium text-zinc-950 transition hover:border-black/20 hover:bg-zinc-50"
          >
            Clear
          </button>
        </div>

        <div className="mt-5 rounded-[1.4rem] border border-black/8 bg-zinc-50/70 p-4 text-sm text-black/58">
          {status === 'loading' && 'Fetching metadata…'}
          {status === 'ready' && 'Metadata prefilled. Refine anything you want before saving.'}
          {status === 'error' && error}
          {status === 'idle' && 'Paste a URL and the page title, description, and image will be pulled in automatically.'}
        </div>
      </div>

      <div className="rounded-[2rem] border border-black/8 bg-white/85 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.05)] sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.32em] text-black/35">Saved links</p>
            <h3 className="mt-3 text-2xl font-medium tracking-[-0.05em] text-zinc-950">Compact and easy to scan.</h3>
          </div>
          <div className="text-sm text-black/45">{visibleLinks.length} items</div>
        </div>

        <div className="mt-6 space-y-3">
          {visibleLinks.map((item) => (
            <article key={item.id} className="rounded-[1.6rem] border border-black/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,248,246,0.92))] p-4">
              <div className="flex gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-black/8 bg-zinc-100 text-xs text-black/35">
                  {item.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.image} alt="" className="h-full w-full object-cover" />
                  ) : (
                    'Link'
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="truncate text-base font-medium tracking-[-0.03em] text-zinc-950">{item.title}</p>
                      <p className="mt-1 truncate text-sm text-black/45">{item.url}</p>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <button
                        onClick={() => beginEdit(item)}
                        className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs text-black/68 transition hover:border-black/20 hover:bg-zinc-50"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => removeLink(item.id)}
                        className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs text-black/50 transition hover:border-black/20 hover:bg-zinc-50"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <p className="mt-3 max-h-20 overflow-hidden text-sm leading-6 text-black/60">{item.description || 'No description yet.'}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
