import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Procesadores de Texto para Niños',
  description: 'Una app divertida para aprender sobre procesadores de texto.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-body antialiased bg-background">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
