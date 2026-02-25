import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove trailing slashes for consistent URLs
  trailingSlash: false,

  // Redirect www to non-www (or vice versa) for canonical URL enforcement
  async redirects() {
    return [
      // Redirect www to non-www
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "semi-care.de",
          },
        ],
        destination: "https://semi-care.de/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.semi-care.de",
          },
        ],
        destination: "https://semi-care.de/:path*",
        permanent: true,
      },
      { source: "/about", destination: "/uber-uns", permanent: true },
      { source: "/contact", destination: "/kontakt", permanent: true },
    ];
  },
};

export default nextConfig;
