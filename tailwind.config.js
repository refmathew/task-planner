export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#1560f6",
        "secondary": "#1e272e",
        "success": "#34d188",
        "danger": "#ff4e66",
        "red": "#ff5e57", 
        "white": "#ffffff",
        "black": "#000000",
        "gray-50": "#f9fafc",
        "gray-100": "#f3f4f7",
        "gray-200": "#e8e9ee",
        "gray-300": "#d8dbe2",
        "gray-400": "#bdc1cc",
        "gray-500": "#9ca0b1",
        "gray-600": "#787e95",
        "gray-700": "#535a78",
        "gray-800": "#0b153e",
        "gray-900": "#3a3b45",
        
      },
      spacing:{
        '2': '.2rem',
        '4': '.4rem',
        '6': '.6rem',
        '8': '.8rem',
        '16': '1.6rem',
        '20': '2rem',
        '24': '2.4rem',
        '32': '3.2rem',
        '64': '6.4rem'
      },
      borderRadius: {
        DEFAULT: '.4rem',
      }
    },
  },
};
