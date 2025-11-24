import type { Config } from "tailwindcss";

const config: Config = {
  // Tailwind'in hangi dosyalarda class'ları arayacağı
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  // Dark mode desteği (class-based)
  darkMode: "class",
  
  // Tema özelleştirmeleri
  theme: {
    extend: {
      colors: {
        // CSS değişkenleri kullanacağız (dark mode için)
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  
  plugins: [],
};

export default config;

