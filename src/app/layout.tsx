import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';
import { PT_Sans } from 'next/font/google';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
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
    <html lang="es" className={ptSans.variable}>
      <body className="font-headline antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
