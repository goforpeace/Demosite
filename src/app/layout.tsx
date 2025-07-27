import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { FloatingCubes } from '@/components/ui/floating-cubes';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Hygiene Horizon',
  description: 'The Future of Hygiene is Here. Innovative and sustainable sanitary solutions for modern living.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <FloatingCubes />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
