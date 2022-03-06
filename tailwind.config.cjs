// tailwind.config.cjs
module.exports = {
  content: [
    './public/**/*.html',    
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        lightDark: "#111213"
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        centuryGothic: ["Century Gothic", "sans-serif"]
      }
    },
  },
  plugins: [],
}
