import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LanguageProvider } from "@/components/providers/LanguageProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Çağrı Türkmen - Frontend & Web Developer Portfolio",
  description: "Frontend & Web Developer specializing in React, Next.js, and TypeScript. Building modern, responsive web applications with clean code and excellent UX. Open to remote/hybrid opportunities.",
  keywords: [
    "Çağrı Türkmen",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "UI/UX Developer",
    "Remote Developer",
    "Portfolio",
    "Frontend Development",
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Çağrı Türkmen" }],
  creator: "Çağrı Türkmen",
  openGraph: {
    title: "Çağrı Türkmen - Frontend & Web Developer",
    description: "Frontend & Web Developer specializing in React, Next.js, and TypeScript. Open to remote/hybrid opportunities.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["tr_TR"],
    siteName: "Çağrı Türkmen Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Çağrı Türkmen - Frontend & Web Developer",
    description: "Frontend & Web Developer specializing in React, Next.js, and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Console için verification code eklenebilir
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

