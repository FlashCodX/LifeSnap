const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  assetPrefix: isProd ? "/LifeSnap/" : "",
};

module.exports = nextConfig;