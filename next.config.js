/**
 * @type {import('next').NextConfig}
 * */
 const withPWA = require('next-pwa');
 const runtimeCaching = require('next-pwa/cache');
 
 const headers = async () => {
   return [
     {
       source: '/(.*)',
       headers: [
         {
           key: 'X-Content-Type-Options',
           value: 'nosniff'
         },
         {
           key: 'X-Frame-Options',
           value: 'SAMEORIGIN'
         },
         {
           key: 'X-XSS-Protection',
           value: '1; mode=block'
         }
       ],
     },
   ]
 }
 
 module.exports = withPWA({
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
   },
   pwa: {
     dest: 'public',
     runtimeCaching,
     disable: process.env.NODE_ENV !== 'production',
     register: true,
     sw: 'sw.js',
   },
   buildExcludes: [/middleware-manifest.json$/],
   headers,
   serverRuntimeConfig: {
     PROJECT_ROOT: __dirname,
   },
 });
 