/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org', 'api.themoviedb.org', 'image.tmdb.org'],
  },
};

module.exports = nextConfig;
