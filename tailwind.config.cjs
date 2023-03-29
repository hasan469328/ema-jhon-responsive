/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#817cea",
        
"secondary": "#121d91",
        
"accent": "#5dc910",
        
"neutral": "#242D38",
        
"base-100": "#FAF8FC",
        
"info": "#7CA4DE",
        
"success": "#19BEA8",
        
"warning": "#F9D25D",
        
"error": "#EF4D60",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
