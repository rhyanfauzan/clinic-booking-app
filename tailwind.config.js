/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html', // Include the main HTML file
    './src/**/*.vue', // Include Vue files in src directory
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
    // Add more paths as needed for other file types or directories containing Tailwind classes
  ],
  theme: {
    extend: {
      // You can extend Tailwind's default theme here if necessary
    },
  },
  plugins: [
    // You can include Tailwind plugins here if needed
    require('flowbite/plugin'),
  ],
};
