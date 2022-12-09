import React from 'react';
import { BtnRedirect } from '../components/Buttons';
import HeadSEO from '../components/Head/HeadSEO';
import style from '../Sass/style.module.scss';

export default function NotFound404() {
  return (
    <>
      <HeadSEO title="Erro 404" description="Não encontramos o que você está procurando." />
      <div className={ style.notfound }>
        <h1>404</h1>
        <h3>Ops! Não encontramos o que você está procurando.</h3>
        <BtnRedirect
          path="/"
          titleBtn="Página inicial"
        />
      </div>
    </>
  );
}
