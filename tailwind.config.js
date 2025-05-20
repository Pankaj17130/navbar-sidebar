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
  },
  theme: {
    extend: {
      height: {
        'carousel-sm': '40vh',
        'carousel-md': '60vh',
        'carousel-lg': '80vh'
      }
    }
  },theme:{
  extend: {
      transitionProperty: {
        'scale': 'transform',
      },
      scale: {
        '105': '1.05',
      }
    }
}
}
