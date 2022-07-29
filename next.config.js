/**
 * @type {import('next').NextConfig}
 * */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const prod = process.env.NODE_ENV === 'development';

module.exports = withPWA({
  pwa: {
    disable: prod,
    dest: 'public',
    runtimeCaching,
    register: true,
    sw: 'sw.js',
  },
  images: {
    domains: ['i.imgur.com'],
    deviceSizes: [280, 350, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [70, 96, 100, 128, 130, 256, 384, 1080, 1920],
  },
  i18n: {
    locales: ['pt-br'],
    defaultLocale: 'pt-br',
  },
  env: {
    VALIDATION_EMAIL: process.env.VALIDATION_EMAIL,
    VALIDATION_PSW: process.env.VALIDATION_PSW,
    LOCAL_API_HOST: process.env.LOCAL_API_HOST,
    LOCAL_API_HOST_2: process.env.LOCAL_API_HOST_2,
  },
  swcMinify: true,
  reactStrictMode: true,
});
