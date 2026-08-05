import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JCC Kitengela',
  description: 'Jesus Celebration Centre Kitengela - faith, community, worship, and outreach.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
