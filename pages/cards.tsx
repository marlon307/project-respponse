import React from 'react';
import { CardPay } from '../components/Cards';
import style from './styles/styleAccount.module.scss';

function cards() {
  return (
    <section className={ style.cards }>
      <button type="button">Adicionar Cartão</button>
      <div className={ style.sectioncards }>
        <CardPay name="Nome Teste..." cardValidate="01/29" endNumber="... ... 1234" flag="MasterCard" />
        <CardPay name="Nome Teste..." cardValidate="01/24" endNumber="... ... 1234" flag="Visa" />
        <CardPay name="Nome Teste..." cardValidate="01/28" endNumber="... ... 1234" flag="Elo" />
      </div>
    </section>
  );
}

export default cards;
