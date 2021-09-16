import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/Header';
import '../styles/globals.scss';
import '@egjs/react-flicking/dist/flicking.css';
import Footer from '../components/Footer/Footer';
import Modal from '../components/Modal/Modal';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Respponse</title>
        <link rel="icon" href="/favico.ico" />
        <link rel="canonical" href="https://respponse.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="description" content="Respponse loja de roupas e acessórios para o dia a dia, tudo de melhor qualidade para você." />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="application-name" content="Respponse" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Respponse" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="shortcut icon" href="/favico.ico" />
        <link rel="apple-touch-icon" href="/favico.ico" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover" />
        <meta property="og:type" content="Repponse" />
        <meta property="og:title" content="Respponse" />
        <meta property="og:description" content="Respponse" />
        <meta property="og:site_name" content="Respponse" />
        <meta property="og:url" content="https://respponse.com" />
      </Head>
      <Header />
      <main>
        <Component { ...pageProps } />
        <Modal />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
