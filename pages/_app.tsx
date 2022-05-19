import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../redux';
import '../Sass/globals.scss';
import style from '../Sass/style.module.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Modal from '../components/Modal/Modal';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={ store }>
      <Header />
      <main className={ style.main }>
        <Component { ...pageProps } />
      </main>
      <Footer />
      <Modal />
    </Provider>
  );
}

export default MyApp;
