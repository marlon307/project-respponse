import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../redux';
import Head from '../components/Head/Head';
import Header from '../components/Header';
import '../Sass/globals.scss';
import Modal from '../components/Modal/Modal';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={ store }>
      <Head props={ pageProps } url="urlPg" />
      <Header />
      <Component { ...pageProps } />
      <Modal />
    </Provider>
  );
}

export default MyApp;
