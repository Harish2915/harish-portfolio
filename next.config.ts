import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/home", destination: "/" },
      { source: "/about", destination: "/" },
      { source: "/skills", destination: "/" },
      { source: "/projects", destination: "/" },
      { source: "/experience", destination: "/" },
      { source: "/education", destination: "/" },
      { source: "/contact", destination: "/" },
    ];
  },
};

export default nextConfig;
