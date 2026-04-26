import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Amit Shinde — Indie Developer',
  description: 'A mobile-first profile site with a high-polish dark layout inspired by a minimalist Apple-style design.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
