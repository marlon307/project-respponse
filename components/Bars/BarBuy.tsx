import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import calcAllValuesArray from 'hooks/useCalcs';
import type { ReduxUser } from 'types/typesUserRedux';
import { BuyFinishBtn } from '../Buttons';
import style from './style.module.scss';

const BarBuy = function BarBuy() {
  const { bagItems, checkout } = useSelector(({ user }: ReduxUser) => user);
  const { formatPay, shipping, cupomAplicate } = checkout;
  const [openInfo, setOpenInfo] = useState(false);
  const [valueBag, setValueBag] = useState(0);

  function openBarMenu(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setOpenInfo(!openInfo);
  }

  useEffect(() => {
    const calc = shipping.valueShipping
      + calcAllValuesArray(bagItems) - cupomAplicate.descountCupom;
    setValueBag(calc);
  }, [bagItems, shipping.valueShipping, cupomAplicate.descountCupom]);

  return (
    <section className={
      cx(style.buybar, { [style.open]: openInfo })
    }
    >
      <div className={ style.container }>
        <div className={ style.calc }>
          <div>
            <span>Frete:</span>
            <span>
              { shipping.valueShipping.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }) }
            </span>
          </div>
          <div>
            <span>Descontos:</span>
            <span>
              { cupomAplicate.descountCupom.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }) }
            </span>
          </div>
          <div>
            <span title="Forma de pagamento">
              { formatPay.formatPayment }
              :
            </span>
            <span>{ formatPay.division }</span>
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
          <BuyFinishBtn />
        </div>
      </div>
      <a href="/" aria-label="Mais Informações" onClick={ openBarMenu }> </a>
    </section>
  );
};

export default BarBuy;
