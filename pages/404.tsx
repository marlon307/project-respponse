import React from 'react';
import { BtnRedirect } from 'components/Buttons';
import style from './style.module.scss';

function notFound404() {
  return (
    <div className={ style.notfound }>
      <h1>404</h1>
      <h3>Ops! Não encontramos o que você está procurando.</h3>
      <BtnRedirect
        path="/"
        titleBtn="Página inicial"
      />
    </div>
  );
}

export default notFound404;
