/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: "/home",
      destination: "/home.html",
    },
  ],
}

module.exports = nextConfig
