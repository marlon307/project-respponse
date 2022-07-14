import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Modal from '../components/Modal/Modal';
// import { LOGIN_USER } from '../redux/actions';
import style from '../Sass/style.module.scss';
import '../Sass/globals.scss';

type TPropsApp = {
  Component: AppProps['Component'];
  pageProps: AppProps['pageProps'];
  data: any
};

function MyApp({ Component, pageProps, data }: TPropsApp) {
  return (
    <Provider store={ store }>
      <Header data={ data } />
      <main className={ style.main }>
        <Component { ...pageProps } />
      </main>
      <Footer />
      <Modal />
    </Provider>
  );
}

MyApp.getInitialProps = async (context: any) => {
  const cookie = context.ctx.req ? context.ctx.req.cookies : null;
  return {
    data: cookie.u_token ? `Bearer ${cookie.u_token}` : undefined,
  };
  // return {
  //   data: `Bearer ${cookie.u_token}`,
  // };
};

export default MyApp;
