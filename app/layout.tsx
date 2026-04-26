import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Amit Shinde — Software Engineer at Spotify',
  description: 'A polished developer bio website for Amit Shinde, based in Stockholm, Sweden.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
