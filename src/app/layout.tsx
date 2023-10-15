import Providers from '@/lib/Providers';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Final Assignment',
  description: 'Created by Abdullah Al Mubin',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <main className=" min-h-screen">{children}</main>
        </body>
      </html>
    </Providers>
  );
}
