import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'white': '#fffffff2',
      'heading-black': '#37322f',
      'text-black': '#4a4340',
      'light-black': '#605a57', 
      'light-gray': '#fbfaf9',
      'border-color': '#70451a12',
      'background-color': "#FBFAF9",
      'orange': '#e16741',
      'black-background': '#201e1d',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
