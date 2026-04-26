import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

function firstMatch(source: string, patterns: RegExp[]) {
  for (const pattern of patterns) {
    const match = source.match(pattern);
    if (match?.[1]) return match[1].trim();
  }
  return '';
}

function decodeHtmlEntities(value: string) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#x2F;/g, '/');
}

function absolutizeUrl(candidate: string, base: string) {
  try {
    return new URL(candidate, base).toString();
  } catch {
    return candidate;
  }
}

export async function GET(request: Request) {
  const input = new URL(request.url).searchParams.get('url');

  if (!input) {
    return NextResponse.json({ error: 'Missing url' }, { status: 400 });
  }

  let target: URL;
  try {
    target = new URL(input);
  } catch {
    return NextResponse.json({ error: 'Invalid url' }, { status: 400 });
  }

  if (!['http:', 'https:'].includes(target.protocol)) {
    return NextResponse.json({ error: 'Unsupported protocol' }, { status: 400 });
  }

  try {
    const response = await fetch(target.toString(), {
      headers: {
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
      redirect: 'follow',
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Unable to fetch page' }, { status: 502 });
    }

    const html = await response.text();
    const finalUrl = response.url || target.toString();

    const title = decodeHtmlEntities(
      firstMatch(html, [
        /<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["'][^>]*>/i,
        /<meta[^>]+name=["']twitter:title["'][^>]+content=["']([^"']+)["'][^>]*>/i,
        /<title[^>]*>([^<]+)<\/title>/i,
      ]) || finalUrl.replace(/^https?:\/\//, '').replace(/\/.*$/, ''),
    );

    const description = decodeHtmlEntities(
      firstMatch(html, [
        /<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']+)["'][^>]*>/i,
        /<meta[^>]+name=["']twitter:description["'][^>]+content=["']([^"']+)["'][^>]*>/i,
        /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["'][^>]*>/i,
      ]),
    );

    const image = firstMatch(html, [
      /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["'][^>]*>/i,
      /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["'][^>]*>/i,
      /<meta[^>]+name=["']twitter:image:src["'][^>]+content=["']([^"']+)["'][^>]*>/i,
    ]);

    return NextResponse.json({
      title,
      description,
      image: image ? absolutizeUrl(image, finalUrl) : '',
    });
  } catch {
    return NextResponse.json({ error: 'Metadata fetch failed' }, { status: 502 });
  }
}
