// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
// }

// plugins: [require("daisyui")],




/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },

  fontSize: {
    xl: "20px",
    sm: "14px",
    "13xl": "32px",
    xs: "12px",
    base: "16px",
    "37xl": "56px",
    "5xl": "24px",
    "21xl": "40px",
    "3xs": "10px",
    "61xl": "80px",
    inherit: "inherit",
  },

  screens: {
    'xs' : '350px',
    
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1253px',
    // => @media (min-width: 1253px) { ... }
  },


  plugins: [require("daisyui")],
}

