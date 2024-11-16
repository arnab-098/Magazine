/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/Magazine",
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
