import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Amit Shinde — Indie Developer',
  description: 'A minimalist, mobile-first profile site inspired by a polished dark Apple-style layout.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
