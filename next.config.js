const withPWA = require('next-pwa');

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['pt-br'],
    defaultLocale: 'pt-br',
  },
  images: {
    deviceSizes: [280, 375, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV !== 'production',
    register: true,
    scope: '/',
    sw: 'sw.js',
  },
});
