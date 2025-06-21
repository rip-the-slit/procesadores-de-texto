import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';
import FloatingStars from '@/components/FloatingStars';

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
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <FloatingStars />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
