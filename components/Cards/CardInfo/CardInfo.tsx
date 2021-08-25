import React from 'react';
import style from './style.module.scss';

function CardInfo() {
  return (
    <div className={ style.info }>
      <div className={ style.primaryline }>
        <h3>Oculos</h3>
        <span>R$ 199,00</span>
      </div>
      <span>Oculos armação em aço</span>
      <div className={ style.secondline }>
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default CardInfo;
