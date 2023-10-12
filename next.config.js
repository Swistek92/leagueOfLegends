/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ddragon.leagueoflegends.com"],
  },
  env: {
    ALL_CHEMPIONS: "All",
  },
};

module.exports = nextConfig;
