/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        signupImage: "url('/src/assets/Images/image.png')",
      },
    },
  },
  plugins: [],
}

