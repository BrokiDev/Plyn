/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'gradient': 'gradient 5s ease infinite',
      },
      backgroundImage: {
        'gradient-rainbow': 'linear-gradient(45deg, #3B82F6, #9333EA, #F43F5E, #F59E0B, #10B981)',
      },
    },
  },
  plugins: [],
};
