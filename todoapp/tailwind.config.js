/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'tuatara': {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#353535',
        '950': '#262626',
      },
      'granite-green': {
        '50': '#f7f7f6',
        '100': '#e6e5e1',
        '200': '#cbcac4',
        '300': '#aaa99e',
        '400': '#8a897c',
        '500': '#6d6c5f',
        '600': '#56564b',
        '700': '#47463e',
        '800': '#3b3a34',
        '900': '#33332e',
        '950': '#1b1b18',
      },
      'iron': {
        '50': '#f6f7f8',
        '100': '#e9ecf0',
        '200': '#d2d7df',
        '300': '#bfc6d1',
        '400': '#a0aaba',
        '500': '#8893a9',
        '600': '#778099',
        '700': '#6a718b',
        '800': '#5a5f73',
        '900': '#4b4e5d',
        '950': '#30323b',
    },
    
    }
  },
  plugins: [],
}