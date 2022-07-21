import React from 'react';
import type { AppProps } from 'next/app';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Modal from '../components/Modal/Modal';
import style from '../Sass/style.module.scss';
import '../Sass/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className={ style.main }>
        <Component { ...pageProps } />
      </main>
      <Footer />
      <Modal />
    </>
  );
}

export default MyApp;
