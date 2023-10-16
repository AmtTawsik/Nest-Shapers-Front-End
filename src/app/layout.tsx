'use client';

import Footer from '@/components/ui/Footer/Footer';
import Providers from '@/lib/Providers';
import './globals.css';

// export const metadata: Metadata = {
//   title: 'Final Assignment',
//   description: 'Created by Abdullah Al Mubin',
// };

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
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
