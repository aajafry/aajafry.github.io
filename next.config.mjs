/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
