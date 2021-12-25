import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { BuyFinishBtn } from '../Buttons';
import style from './style.module.scss';
import calcAllValuesArray from '../../hooks/useCalcs';

type TObjectUserBag = {
  user: {
    bagItems: Array<{
      id: number;
      title: string;
      type: string;
      mainImg: string | any;
      price: number;
      oldPrice: number;
      colorName: string;
      color: string;
      size: string;
      quantity: number;
      discount: number
    }>;
    checkout: {
      formatPay: {
        formatPayment: string;
        division: string;
      };
      shipping: {
        shippingCompany: string;
        valueShipping: number;
      };
      cupomAplicate: {
        code: string;
        descountCupom: number;
      };
    };
  }
}

const BarBuy = function BarBuy() {
  const { bagItems, checkout } = useSelector(({ user }: TObjectUserBag) => user);
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
      <a href="/" onClick={ openBarMenu }> </a>
    </section>
  );
};

export default BarBuy;
