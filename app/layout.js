"use client";

import { Providers } from './providers';
import './globals.css';

export const metadata = {
  title: 'Youssef - Professional Web Development',
  description: 'We create professional digital experiences for businesses',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
