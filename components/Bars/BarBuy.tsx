import React, { useState } from 'react';
import cx from 'classnames';
import { BuyFinishBtn } from '../Buttons';
import style from './styleBarBuy.module.scss';

function BarBuy() {
  const [openInfo, setOpenInfo] = useState(false);

  function openBarMenu(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setOpenInfo(!openInfo);
  }

  return (
    <section className={
      cx(style.buybar, { [style.open]: openInfo })
    }
    >
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
      <a href="/" onClick={ openBarMenu }> </a>
    </section>
  );
}

export default BarBuy;
