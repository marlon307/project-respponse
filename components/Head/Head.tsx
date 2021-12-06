import React from 'react';
import Head from 'next/head';

const Seo = function Seo() {
  return (
    <Head>
      <title>Howlingdawn</title>
      <link rel="icon" href="/favico.ico" />
      <link rel="canonical" href="https://howlingdawn.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <meta name="description" content="Howlingdawn loja de roupas e acessórios para o dia a dia, tudo de melhor qualidade para você." />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#FFFFFF" />
      <meta name="application-name" content="Howlingdawn" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Howlingdawn" />
      <meta name="format-detection" content="telephone=no" />
      <link rel="icon" href="/favico.ico" />
      <link rel="apple-touch-icon" href="/favico.ico" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover" />
      <meta property="og:type" content="Howlingdawn" />
      <meta property="og:title" content="Howlingdawn" />
      <meta property="og:description" content="Howlingdawn" />
      <meta property="og:site_name" content="Howlingdawn" />
      <meta property="og:url" content="https://howlingdawn.com" />
    </Head>
  );
};

export default Seo;
