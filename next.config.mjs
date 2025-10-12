/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Le decimos explícitamente a Next.js que no queremos nada de Turbo
    turbo: undefined,
  },
};

module.exports = nextConfig;