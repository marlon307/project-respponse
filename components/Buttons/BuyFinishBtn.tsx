import React from 'react';
import style from './styleButton.module.scss';

function BuyFinishBtn() {
  return (
    <button type="button" className={ style.buyFinish }>
      Finalizar Compra
    </button>
  );
}

export default BuyFinishBtn;
