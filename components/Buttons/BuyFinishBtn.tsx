import React from 'react';
import cx from 'classnames';
import style from './style.module.scss';

const BuyFinishBtn = function BuyFinishBtn() {
  return (
    <button type="button" className={ cx('button1', style.buyFinish) }>
      Finalizar Compra
    </button>
  );
};

export default BuyFinishBtn;
