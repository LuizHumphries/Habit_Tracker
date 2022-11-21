/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    linearBorderGradients: {
      directions: {
        // defaults to these values
        t: "to top",
        tr: "to top right",
        r: "to right",
        br: "to bottom right",
        b: "to bottom",
        bl: "to bottom left",
        l: "to left",
        tl: "to top left",
      },
      colors: {
        // defaults to {}
        "red-red": ["#fb7185", "#881337", "#fb7185"],
      },
      background: {
        slate: "rgb(17 24 39)",
      },
      border: {
        // defaults to these values (optional)
        1: "1px",
        2: "2px",
        4: "4px",
      },
    },
    fontFamily: {
      sans: ["Poppins"],
    },

    extend: {},
  },
  variants: {
    linearBorderGradients: ["responsive", "hover", "dark"],
  },
  plugins: [require("tailwindcss-border-gradient-radius")],
};
