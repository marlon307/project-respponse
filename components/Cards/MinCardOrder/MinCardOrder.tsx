import React from 'react';
import style from './styleMinCardOrder.module.scss';

function MinCardOrder() {
  return (
    <a href="/" className={ style.mincardOrder }>
      <span>00003</span>
      <span>12/08/2021</span>
      <span>Enviado</span>
    </a>
  );
}

export default MinCardOrder;
