import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../redux';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';
import Modal from '../components/Modal/Modal';
import '../Sass/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={ store }>
      <Header />
      <Component { ...pageProps } />
      <Footer />
      <Modal />
    </Provider>
  );
}

export default MyApp;
