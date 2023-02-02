/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      spacing: {
        "page-x": "24rem",
        "page-y": "4rem",
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
        item: "#001029",
      },
    },
  },
  plugins: [],
};
