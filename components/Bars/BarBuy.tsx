import React, { useState, useEffect } from 'react';
import calcAllValuesArray from '../../hooks/useCalcs';
import { StateBagType } from '../../types/bag';
import { BuyFinishBtn } from '../Buttons';
import style from './style.module.scss';

type TBarBuy = {
  stateBag: {
    bagItems: StateBagType['bagItems'];
    checkout: StateBagType['checkout'];
  }
};

function BarBuy({ stateBag }: TBarBuy) {
  const { bagItems, checkout } = stateBag;

  // const { formatPay, shipping, cupomAplicate } = stateBag.checkout.formatPay;
  const [openInfo, setOpenInfo] = useState(false);
  const [valueBag, setValueBag] = useState(0);

  function openBarMenu(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setOpenInfo(!openInfo);
  }

  useEffect(() => {
    const calc = checkout.shipping.valueShipping
      + calcAllValuesArray(bagItems) - checkout.cupomAplicate.descountCupom;
    setValueBag(calc);
  }, [bagItems, stateBag.checkout]);

  return (
    <section className={ style.buybar } data-active={ openInfo }>
      <div className={ style.container }>
        <div className={ style.calc }>
          <div>
            <span>Frete:</span>
            <span>
              { stateBag.checkout?.shipping.valueShipping.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }) }
            </span>
          </div>
          <div>
            <span>Descontos:</span>
            <span>
              { stateBag.checkout?.cupomAplicate.descountCupom.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }) }
            </span>
          </div>
          <div>
            <span title="Forma de pagamento">
              { stateBag.checkout?.formatPay.formatPayment }
              :
            </span>
            <span>{ `${stateBag.checkout?.formatPay.division}x` }</span>
          </div>
        </div>
        <div className={ style.calcfinish }>
          <div>
            <span>Valor Total:</span>
            <span>
              { valueBag.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }) }
            </span>
          </div>
          <BuyFinishBtn dataBag={ stateBag } />
        </div>
      </div>
      <button
        className={ style.expand }
        type="button"
        aria-label="Mais Informações"
        onClick={ openBarMenu }
      />
    </section>
  );
}

export default BarBuy;
