import React, { useState, useEffect } from 'react';
import { CookieValueTypes } from 'cookies-next/lib/types';
import calcAllValuesArray from '../../hooks/useCalcs';
import { StateBagType, TypeAddBagInfos } from '../../@types/bag';
import { BuyFinishBtn } from '../Buttons';
import style from './style.module.scss';

type TBarBuy = {
  listProducts: TypeAddBagInfos[]
  stateBag?: {
    bagItems: [];
    checkout: StateBagType['checkout'];
  }
  token: CookieValueTypes;
};

function BarBuy({ listProducts, stateBag, token }: TBarBuy) {
  // const { formatPay, shipping, cupomAplicate } = stateBag.checkout.formatPay;
  const [openInfo, setOpenInfo] = useState(false);
  const [valueBag, setValueBag] = useState(0);

  function openBarMenu(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setOpenInfo(!openInfo);
  }

  useEffect(() => {
    // const calc = checkout.shipping.valueShipping
    //   + calcAllValuesArray(stateBag) - checkout.cupomAplicate.descountCupom;
    setValueBag(calcAllValuesArray(listProducts));
  }, [listProducts/* , stateBag.checkout */]);

  return (
    <section className={ style.buybar } data-active={ openInfo }>
      <div className={ style.container }>
        <div className={ style.calc }>
          <div>
            <span>Frete:</span>
            <span>
              { stateBag?.checkout?.shipping.valueShipping.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }) }
            </span>
          </div>
          <div>
            <span>Descontos:</span>
            <span>
              { stateBag?.checkout?.cupomAplicate.descountCupom.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }) }
            </span>
          </div>
          <div>
            <span title="Forma de pagamento">
              { stateBag?.checkout?.formatPay.formatPayment }
              :
            </span>
            <span>{ `${stateBag?.checkout?.formatPay.division}x` }</span>
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
          <BuyFinishBtn listProducts={ listProducts } token={ token } />
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

BarBuy.defaultProps = {
  stateBag: {
    bagItems: [],
    checkout: {
      formatPay: {
        formatPayment: 'Forma de pagamento',
        division: 0,
      },
      cupomAplicate: {
        descountCupom: 0,
      },
      shipping: {
        valueShipping: 0,
      },
    },
  },
};
