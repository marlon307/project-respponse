import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/Header';
import '../styles/globals.scss';
import '@egjs/react-flicking/dist/flicking.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Respponse</title>
        <link rel="icon" href="/favico.ico" />
        <link rel="canonical" href="https://respponse.com" />
        <meta name="description" content="Respponse loja de roupas e acessórios para o dia a dia, tudo de melhor qualidade para você." />
        <link rel="apple-touch-icon" href="/favico.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favico.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="application-name" content="Respponse" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Respponse" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="apple-touch-icon" href="/favico.ico" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover" />
      </Head>
      <Header />
      <Component { ...pageProps } />
    </>
  );
}

export default MyApp;
