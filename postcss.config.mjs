/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // Tailwind CSS'i işle
    tailwindcss: {},
    // Tarayıcı uyumluluğu için prefix ekle (-webkit-, -moz- vb.)
    autoprefixer: {},
  },
};

export default config;

