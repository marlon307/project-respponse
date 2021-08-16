import React from 'react';
import { BuyFinishBtn } from '../Buttons';
import style from './styleBarBuy.module.scss';

function BarBuy() {
  return (
    <section className={ style.buybar }>
      <div className={ style.container }>
        <div className={ style.calc }>
          <div>
            <span>Frete:</span>
            <span>R$ 15,00</span>
          </div>
          <div>
            <span>Descontos:</span>
            <span>R$ 0,00</span>
          </div>
          <div>
            <span>Cartão de credito:</span>
            <span>8x R$ 50,00</span>
          </div>
        </div>
        <div className={ style.calcfinish }>
          <div>
            <span>Valor Total:</span>
            <span>R$ 400,00</span>
          </div>
          <BuyFinishBtn />
        </div>
      </div>
    </section>
  );
}

export default BarBuy;
