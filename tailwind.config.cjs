/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      spacing: {
        "page-x": "2rem",
        "page-x-md": "8rem",
        "page-x-lg": "12rem",
        "page-x-xl": "18rem",
        "page-y": "1rem",
        "page-y-md": "2rem",
        "page-y-lg": "3rem",
        "page-y-xl": "4rem",
        section: "3rem",
        "section-item": "2rem",
      },
      fontFamily: {
        poppins: ["Poppins"],
        inter: ["Inter"],
      },
      colors: {
        primary: "#3B87FF",
        light: "#FFFFFF",
        medium: "#7E8696",
        dark: "#000814",
        item: "#A3C7FF",
        "item-dark": "#001029",
      },
    },
  },
  plugins: [],
};
