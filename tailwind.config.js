/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",       // For Next.js or structured apps
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",      // Next.js default
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Reusable components
    "./src/**/*.{js,ts,jsx,tsx,mdx}",        // Covers apps using src/ folder
  ],
  theme: {
    extend: {}, // For custom theme additions
  },
  plugins: [],// Add Tailwind plugins here if needed
  variants:{
    extend:{
      display:["focus-group"]
    }
  }
}
