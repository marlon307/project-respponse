import React, { useMemo, useState } from 'react';
import calcAllValuesArray from 'hooks/useCalcs';
import { BuyFinishBtn } from '../Buttons';
import type {
  Pay, Shipping, StateBagType, TypeAddBagInfos,
} from '../../@types/bag';
import style from './style.module.scss';

interface TBarBuy {
  listProducts: TypeAddBagInfos[]
  shipping: Shipping;
  addresId: number;
  paymentMethod: Pay;
  setItallment: (p: Pay) => void
  stateBag?: {
    bagItems: [];
    checkout: StateBagType['checkout'];
  }
}

type PI = {
  [key: number]: number
};
const installmentsMP: PI = {
  1: 0,
  2: 7.64,
  3: 9.23,
  4: 10.86,
  5: 12.31,
  6: 13.65,
  7: 14.72,
  8: 16.23,
  9: 17.69,
  10: 18.65,
  11: 20.12,
  12: 21.61,
};

function BarBuy({
  listProducts, stateBag, shipping, addresId, paymentMethod, setItallment,
}: TBarBuy) {
  const [openInfo, setOpenInfo] = useState(false);

  const calcValue = useMemo(() => {
    const valueBag = calcAllValuesArray(listProducts);
    return valueBag + shipping.price
      + ((valueBag + shipping.price)
        * (installmentsMP[paymentMethod.installments] / 100));
  }, [shipping.price, listProducts, paymentMethod]);

  function openBarMenu(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setOpenInfo(!openInfo);
  }

  return (
    <section className={ style.buybar } data-active={ openInfo }>
      <div className={ style.container }>
        <div className={ style.calc }>
          <div>
            <span>Frete:</span>
            <span>
              { shipping.price.toLocaleString('pt-br', {
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
              { paymentMethod.method || 'Forma de pagamento' }
              :
            </span>
            <span>{ `${paymentMethod.installments ?? 1}x` }</span>
          </div>
        </div>
        <div className={ style.calcfinish }>
          <div>
            <span>Valor Total:</span>
            <span>
              { calcValue?.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }) }
            </span>
          </div>
          <BuyFinishBtn
            listProducts={ listProducts }
            shipping={ shipping }
            addresId={ addresId }
            price={ calcValue }
            paymentMethod={ paymentMethod }
            setItallment={ setItallment }
          />
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
