import React from 'react';
import style from './style.module.scss';

function CardInfo() {
  return (
    <div className={ style.info }>
      <div className={ style.primaryline }>
        <span>Oculos</span>
        <span>R$ 199,00</span>
      </div>
      <div className={ style.secondline }>
        <span>Oculos armação em aço</span>
      </div>
      <div className={ style.thirdline }>
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default CardInfo;
