import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import Header from '../components/Header';
import '../styles/globals.scss';
import Footer from '../components/Footer/Footer';
import Modal from '../components/Modal/Modal';
import Loading from '../components/Loading/Loading';
import { useStore } from '../redux/redux-store';
import GetInfos from '../hooks/getInfos';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import Seo from '../components/Head/Head';

const MyApp = function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const [urlPg, setUrlPg] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => setUrlPg(url);

    const routeChangeComplete = (url: string) => {
      setLoading(true);
      setUrlPg(url);
    };

    if (router.pathname) setLoading(true);

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', routeChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', routeChangeComplete);
    };
  }, []);

  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={ store }>
      <GetInfos />
      <Seo props={ pageProps } url={ urlPg } />
      <Header />
      <main>
        {
          loading
            ? (
              <div className="maincontent">
                <Component { ...pageProps } />
              </div>
            )
            : (
              <div className="loading">
                <Loading />
              </div>
            )
        }
        <Modal />
      </main>
      <Footer />
    </Provider>
  );
};

export default MyApp;
