/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-custom-bg': 'url(/backg-logo.webp)',
        'bg-custom2-bg': 'url(/bgTristezaMobile.webp)',
        'bg-custom3-bg': 'url(/BgQuadro.webp)',
      },
    },
  },
  plugins: [],
} 