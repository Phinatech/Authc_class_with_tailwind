/** @type {import('tailwindcss').Config} */
// import heroimg from "./src/assets/8.jpeg";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'url("./src/assets/8.jpeg")',
      },
    },
  },
  plugins: [],
};
