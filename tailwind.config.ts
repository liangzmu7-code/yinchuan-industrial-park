import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17202a",
        steel: "#5f6d7a",
        iron: "#2f3a45",
        brick: "#9a4f36",
        copper: "#b97745",
        mist: "#eef2f4",
        paper: "#f8f6f1",
        wheat: "#d8bf82"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(23, 32, 42, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
