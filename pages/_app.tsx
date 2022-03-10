import Footer from 'components/Footer/Footer';
import Seo from 'components/Head/Head';
import Header from 'components/Header';
import Loading from 'components/Loading';
import Modal from 'components/Modal/Modal';
import GetInfos from 'hooks/getInfos';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import { Provider } from 'react-redux';
import { useStore } from 'redux/redux-store';
import 'styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const [urlPg, setUrlPg] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => setLoading(false);
    const routeChangeComplete = (url: string) => {
      setLoading(true);
      setUrlPg(url);
    };
    setUrlPg(router.pathname);

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
      <main className="maincontent">
        {
          loading
            ? (
              <Component { ...pageProps } />
            )
            : (
              <div className="loading">
                <Loading />
              </div>
            )
        }
      </main>
      <Modal />
      <Footer />
    </Provider>
  );
}

export default MyApp;
