const withPWA = require("next-pwa")({
    dest: "public",
});

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ["res.cloudinary.com"],
    }
};

module.exports = withPWA(nextConfig);
