import React from 'react';
import { BtnRedirect } from '../components/Buttons';
import HeadSEO from '../components/Head/HeadSEO';

import style from '../Sass/style.module.scss';

function NotFound500() {
  return (
    <>
      <HeadSEO title="Erro 500" description="Não encontramos o que você está procurando." />
      <div className={ style.notfound }>
        <h1>500</h1>
        <h3>Ops! Algo deu errado.</h3>
        <BtnRedirect
          path="/"
          titleBtn="Página inicial"
        />
      </div>
    </>
  );
}

export default NotFound500;
