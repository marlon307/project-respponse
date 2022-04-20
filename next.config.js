/**
 * @type {import('next').NextConfig}
 * */
const withPWA = require('next-pwa');

module.exports = withPWA({
  images: {
    deviceSizes: [280, 375, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [70, 96, 100, 128, 130, 256, 384, 1080, 1920],
  },
  i18n: {
    locales: ['pt-br'],
    defaultLocale: 'pt-br',
  },
  env: {
    VALIDATION_EMAIL: process.env.VALIDATION_EMAIL,
    VALIDATION_PSW: process.env.VALIDATION_PSW,
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV !== 'production',
    register: true,
    sw: 'sw.js',
  },
});
