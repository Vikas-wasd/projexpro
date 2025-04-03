/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}", // Include Next.js pages
      "./components/**/*.{js,ts,jsx,tsx}", // Include your components
      "./app/**/*.{js,ts,jsx,tsx}", // Support Next.js App Router (if using)
      "./src/**/*.{js,ts,jsx,tsx}", // Ensure all relevant directories are included
    ],
    theme: {
      extend: {
        colors: {
          foreground: "#1a1a1a", // Custom color for cards & backgrounds
          "muted-foreground": "#9CA3AF", // Light text for descriptions
        },
      },
    },
    plugins: [
      require("@tailwindcss/forms"), // If using Tailwind Forms for styling inputs
      require("tailwind-scrollbar"), // Custom scrollbar styling
    ],
  };
  