import React, { ReactNode } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Modal from '../components/Modal/Modal';
import style from '../Sass/style.module.scss';
import '../Sass/globals.scss';

interface Props {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main className={ style.main }>
          { children }
        </main>
        <Footer />
        <Modal />
      </body>
    </html>
  );
}
