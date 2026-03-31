import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "upgrade-insecure-requests",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      { source: "/about", destination: "/uber-uns", permanent: true },
      { source: "/contact", destination: "/kontakt", permanent: true },
    ];
  },
};

export default nextConfig;
