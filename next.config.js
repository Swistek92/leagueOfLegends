/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ddragon.leagueoflegends.com", "avatars.githubusercontent.com"],
  },
  env: {
    ALL_CHEMPIONS: "All",
  },
};

module.exports = nextConfig;
