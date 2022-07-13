import React, { useState, useEffect } from 'react';
import calcAllValuesArray from '../../hooks/useCalcs';
import { BuyFinishBtn } from '../Buttons';
import style from './style.module.scss';
import { useAppSelector } from '../../redux/hooks';

function BarBuy() {
  const { bagItems, checkout } = useAppSelector(({ bag }) => bag);
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
    <section className={ style.buybar } data-active={ openInfo }>
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
            <span>{ `${formatPay.division}x` }</span>
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
