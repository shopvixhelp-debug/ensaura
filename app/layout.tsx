import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ensaura - Mindful Living & Artisan Wellness',
  description: 'Discover handcrafted candles and conscious apparel designed for your wellness journey. Sustainable, mindful, and beautifully crafted.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
