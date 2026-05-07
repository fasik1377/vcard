import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? "/vcard" : undefined,
  assetPrefix: isGitHubPages ? "/vcard/" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
