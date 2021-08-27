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
        <link rel="alternate" href="http://br.respponse.com/" hrefLang="x-default" />
        <title>Respponse</title>
        <link rel="icon" href="/favico.ico" />
      </Head>
      <Header />
      <Component { ...pageProps } />
    </>
  );
}

export default MyApp;
