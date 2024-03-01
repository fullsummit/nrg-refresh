/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-cta": `radial-gradient(circle, rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url('${process.env.NEXT_PUBLIC_BASEPATH}/optimized/nrg-1024px.webp');`,
        "map": `radial-gradient(circle, rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url('${process.env.NEXT_PUBLIC_BASEPATH}/optimized/map-1024px.webp');`,
      },
    },
  },
  plugins: [],
};
