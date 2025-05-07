// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Your existing theme extensions (if any) from shadcn/ui setup
      // For example, colors, borderRadius, keyframes, animation might be here
      // if you followed the shadcn/ui setup for CSS Variables.
      // If not, this might be simpler:
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // Often added by shadcn/ui
    require("daisyui")             // Add DaisyUI here
  ],
  // Optional: DaisyUI specific configurations
  daisyui: {
    themes: ["light", "dark", "cupcake"], // You can specify themes
    darkTheme: "dark", // Default dark theme
    base: true, // Applies base styles
    styled: true, // Applies DaisyUI component styles
    utils: true, // Adds DaisyUI utility classes
    prefix: "", // Prefix for DaisyUI classes (e.g., "dui-btn") - usually empty
    logs: true, // Show logs in terminal
  },
};
export default config;
