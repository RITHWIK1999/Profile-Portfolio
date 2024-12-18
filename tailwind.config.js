/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-blue': '#170634', 
        'my-bluedark':'#11091c'
      }
    },
  },
  plugins: [],

}

