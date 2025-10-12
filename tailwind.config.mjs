/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // AÑADIMOS LA 'LISTA SEGURA' (SAFELIST) PARA GARANTIZAR LAS CLASES DE ANIMACIÓN
  safelist: [
    'opacity-100',
    'translate-y-0',
    'opacity-0',
    'translate-y-10',
  ],
  theme: {
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

// USAMOS LA SINTAXIS CORRECTA 'export default'
export default config;