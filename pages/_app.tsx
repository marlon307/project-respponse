import React, { useEffect } from 'react';
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
  useEffect(() => {
    // store.dispatch(LOGIN_USER({
    //   // name: 'user.name',
    //   // token: 'data.token',
    //   // email: 'user.email',
    //   // logged: false,
    //   // user_id: 'user.id_user',
    // }));
    // console.log(store);
    // console.log('00000');
  }, []);

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
  // const response = await axios({
  //   method: 'get',
  //   url: 'http://localhost:3000/api/bookings/list',
  //   headers: ctx.req ? { cookie: ctx.req.headers.cookie } : undefined
  // })

  const cookie = context.ctx.req ? context.ctx.req.cookies : null;

  // const teste = await api2.get('/');
  // console.log(ctx, teste.data);
  // console.log(cookie);

  return {
    data: cookie?.u_token,
  };
};

export default MyApp;
