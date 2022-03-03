const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const path = require('path');

// https://emailregex.com/
// https://www.w3schools.com/howto/howto_js_password_validation.asp

const NextConfig = { // Next Config
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['pt-br'],
    defaultLocale: 'pt-br',
  },
  images: {
    deviceSizes: [100, 130, 280, 375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 100, 128, 130, 256, 384, 1080, 1920],
  },
  env: {
    VALIDATION_EMAIL: process.env.VALIDATION_EMAIL,
    VALIDATION_PSW: process.env.VALIDATION_PSW,
  },
  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./'));

    return config;
  },
};

module.exports = withPlugins([
  [withPWA, { // Plugins
    pwa: {
      dest: 'public',
      disable: process.env.NODE_ENV !== 'production',
      register: true,
      sw: 'sw.js',
    },
  }],
], NextConfig);
