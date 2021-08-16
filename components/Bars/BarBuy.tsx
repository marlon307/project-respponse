import React from 'react';
import { BuyFinishBtn } from '../Buttons';
import style from './styleBarBuy.module.scss';

function BarBuy() {
  return (
    <section className={ style.buybar }>
      <div className={ style.container }>
        <div className={ style.calc }>
          <span>Frete: R$ 15,00</span>
          <span>Desconto: R$ 0,00</span>
          <span>8x R$ 50,00</span>
        </div>
        <div className={ style.calcfinish }>
          <span>Valor Total: R$ 400,00</span>
          <BuyFinishBtn />
        </div>
      </div>
    </section>
  );
}

export default BarBuy;
