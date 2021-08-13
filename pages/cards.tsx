import React from 'react';
import CardPay from '../components/Cards/CardPay/CardPay';
import style from './styles/styleAccount.module.scss';

function cards() {
  return (
    <div className={ style.cards }>
      <button type="button">Adicionar Cartão</button>
      <div className={ style.sectioncards }>
        <CardPay />
        <CardPay />
        <CardPay />
      </div>
    </div>
  );
}

export default cards;
