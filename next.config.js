const withPlugins = require("next-compose-plugins");
const withOptimizedImages = require("next-optimized-images");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

// next.js custom configuration goes here
const nextConfig = {
  env: {
    BACKEND_URL: "https://localhost:8080",
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // Will make webpack look for these modules in parent directories
      // 'shared-ui': require.resolve('shared-ui/src'),
      // '@your-project/styleguide': require.resolve('@your-project/styleguide'),
      // ...
    };
    return config;
  },
};

module.exports = withPlugins(
  [withOptimizedImages, withBundleAnalyzer],
  nextConfig
);
