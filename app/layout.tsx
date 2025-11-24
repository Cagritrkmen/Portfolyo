import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Google Fonts'tan Inter fontunu yükle
// subsets: ["latin"] → Sadece Latin karakterleri yükle (daha hızlı)
const inter = Inter({ subsets: ["latin"] });

// SEO için metadata (arama motorları için)
export const metadata: Metadata = {
  title: "Portfolio - Senior Frontend & UI/UX Developer",
  description: "Professional portfolio showcasing frontend development and UI/UX design expertise",
};

// Root Layout - Tüm sayfalar bu layout'u kullanır
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning → Dark mode için gerekli */}
      <body className={inter.className}>
        {/* inter.className → Inter fontunu uygula */}
        {children}
        {/* children → Her sayfa buraya render edilir */}
      </body>
    </html>
  );
}

