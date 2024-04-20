/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "astana.citypass.kz",
      },
    ],
  },
};

export default nextConfig;
