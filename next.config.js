module.exports = {
  images: {
    domains: ["localhost", "media.graphassets.com"],
    loader: "default"
    // loader: "custom"
  },
  swcMinify: true,
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true
  }
};
