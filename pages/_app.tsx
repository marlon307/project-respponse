import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Modal from '../components/Modal/Modal';
import style from '../Sass/style.module.scss';
import '../Sass/globals.scss';

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
