import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import Head from 'next/head';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Response</title>
        <link rel="icon" href="/favico.ico" />
      </Head>
      <Header />
      <Component { ...pageProps } />
    </>
  );
}

export default MyApp;
