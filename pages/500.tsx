import React from 'react';
import { BtnRedirect } from '../components/Buttons';

import style from '../Sass/style.module.scss';

function NotFound500() {
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

export default NotFound500;
