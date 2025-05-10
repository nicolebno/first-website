// tailwind.config.ts

/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Configure paths for Tailwind to scan for classes
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",       // Standard for Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",    // Include if using Pages Router
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Include your components folder(s)
  ],

  // 2. Optional: Extend the base Tailwind theme (colors, fonts, etc.) if needed
  theme: {
    extend: {
      // Example: Add custom fonts or colors usable via Tailwind utilities
      // colors: {
      //   'custom-brand': '#ff5733',
      // },
    },
  },

  // 3. Enable plugins, including DaisyUI
  plugins: [
    require('daisyui'), // This line enables DaisyUI
  ],

  // 4. DaisyUI specific configuration
  daisyui: {
    // Define the themes you want to use or customize
    themes: [
      {
        // Define "wireframe" as an object to provide overrides
        wireframe: {
          // DaisyUI automatically uses the default "wireframe" theme values
          // for any variables you DON'T specify here.

          // --- Add your specific customizations below ---

          // Example Color Overrides: Replace with your desired colors
          // Use hex (#RRGGBB), hsl(H S% L%), or oklch(L C H)
          "primary": "#afb7ff",         // Example: Make primary actions purple (like 'light' theme)
          "secondary": "#1f4ac0",       // Example: Make secondary actions pink (like 'light' theme)
          // "accent": "#fb8b3b",       // this is an extremely ugly orange color
          // "neutral": "#afb7ff",
          "base-100": "#ecefff",        // Example: main background
          // "base-200": "#ff67bb",     // Example: secondary background
          // "base-content": "#1f2937", // Example: Set default text color
          // "info": "#3abff8",
          // "success": "#36d399",
          // "warning": "#fbbd23",
          // "error": "#f87272",

          // Example Style Overrides:
          "--rounded-btn": "0.5rem",    // Example: Make buttons slightly less rounded than wireframe default
          "--rounded-box": "1rem",      // Example: Make cards/boxes more rounded
          // "--btn-text-case": "uppercase", // Example: Make all button text uppercase

          // Add any other theme variables from DaisyUI docs you want to customize
          // Reference: https://daisyui.com/docs/themes/ (Check CSS Variables section)
        },
      },

      // You can still include other standard themes if you want to switch easily
      // Just list their names as strings:
      "light",
      "dark",
      "pastel",
      // "cupcake",
      // etc.
    ],

    // Optional DaisyUI settings (defaults are usually good):
    // darkTheme: "dark",      // Specify which theme to use for dark mode preference
    // base: true,             // Apply base styles
    // styled: true,           // Apply DaisyUI component styles
    // utils: true,            // Add DaisyUI utility classes
    // prefix: "",             // Add a prefix to DaisyUI classes (e.g., "daisyui-btn")
    // logs: true,             // Show DaisyUI logs in the console during development
  },
};