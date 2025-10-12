/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Le decimos explícitamente a Next.js que no queremos nada de Turbo
    turbo: undefined,
  },
};

export default nextConfig; // <-- ¡ESTE ES EL CAMBIO! Usamos "export default"