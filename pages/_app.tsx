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
      </Head>
      <Header />
      <Component { ...pageProps } />
    </>
  );
}

export default MyApp;
