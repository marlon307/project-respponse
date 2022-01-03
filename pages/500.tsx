import React from 'react';
import style from './style.module.scss';
import { BtnRedirect } from '../components/Buttons';

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
