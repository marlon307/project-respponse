import React, { ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header';
import Modal from '../Modal/Modal';
import style from '../../Sass/style.module.scss';

type TLayout = {
  children: ReactNode;
};

function Layout({ children }: TLayout) {
  return (
    <>
      <Header />
      <main className={ style.main }>
        { children }
      </main>
      <Footer />
      <Modal />
    </>
  );
}

export default Layout;
