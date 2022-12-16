import React, { useMemo, useState } from 'react';
import calcAllValuesArray from '../../hooks/useCalcs';
import { BuyFinishBtn } from '../Buttons';
import type { StateBagType, TypeAddBagInfos } from '../../@types/bag';
import style from './style.module.scss';

interface TBarBuy {
  listProducts: TypeAddBagInfos[]
  shipping: { price: number };
  stateBag?: {
    bagItems: [];
    checkout: StateBagType['checkout'];
  }
}

function BarBuy({ listProducts, stateBag, shipping }: TBarBuy) {
  // const { formatPay, shipping, cupomAplicate } = stateBag.checkout.formatPay;
  const [openInfo, setOpenInfo] = useState(false);
  const calcValue = useMemo(() => {
    const valueBag = calcAllValuesArray(listProducts);

    return valueBag + shipping.price;
  }, [shipping.price, listProducts]);

  function openBarMenu(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setOpenInfo(!openInfo);
  }

  // useEffect(() => {
  //   // const calc = checkout.shipping.valueShipping
  //   //   + calcAllValuesArray(stateBag) - checkout.cupomAplicate.descountCupom;
  //   setValueBag(calcAllValuesArray(listProducts));
  // }, [listProducts/* , stateBag.checkout */]);

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
              { stateBag?.checkout?.formatPay.formatPayment || 'Forma de pagamento' }
              :
            </span>
            <span>{ `${stateBag?.checkout?.formatPay.division ?? 1}x` }</span>
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
          <BuyFinishBtn listProducts={ listProducts } />
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

// BarBuy.defaultProps = {
//   stateBag: {
//     bagItems: [],
//     checkout: {
//       formatPay: {
//         formatPayment: 'Forma de pagamento',
//         division: 0,
//       },
//       cupomAplicate: {
//         descountCupom: 0,
//       },
//       shipping: {
//         valueShipping: 0,
//       },
//     },
//   },
// };
