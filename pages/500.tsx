import React from 'react';
import { BtnRedirect } from 'components/Buttons';
import style from './style.module.scss';

function notFound500() {
  return (
    <div className={ style.notfound }>
      <h1>500</h1>
      <h3>Ops! Algo deu errado.</h3>
      <BtnRedirect
        path="/"
        titleBtn="Página inicial"
      />
    </div>
  );
}

export default notFound500;
