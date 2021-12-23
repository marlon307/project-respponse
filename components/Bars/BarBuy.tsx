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
    }>
  }
}

const BarBuy = function BarBuy() {
  const { bagItems } = useSelector(({ user }: TObjectUserBag) => user);
  const [openInfo, setOpenInfo] = useState(false);
  const [valueBag, setValueBag] = useState('');

  function openBarMenu(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setOpenInfo(!openInfo);
  }

  useEffect(() => {
    setValueBag(calcAllValuesArray(bagItems));
  }, [bagItems]);

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
            <span>{ valueBag }</span>
          </div>
          <BuyFinishBtn />
        </div>
      </div>
      <a href="/" onClick={ openBarMenu }> </a>
    </section>
  );
};

export default BarBuy;
