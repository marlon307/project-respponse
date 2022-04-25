import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../redux';
import '../Sass/globals.scss';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={ store }>
      <Layout>
        <Component { ...pageProps } />
      </Layout>
    </Provider>
  );
}

export default MyApp;
