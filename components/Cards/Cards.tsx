import React from 'react';
import { CardPay } from '.';

function Cards() {
  return (
    <>
      <CardPay
        name="Nome Teste..."
        cardValidate="01/29"
        endNumber="... ... 1234"
        flag="MasterCard"
        removable
      />
      <CardPay
        name="Nome Teste..."
        cardValidate="01/24"
        endNumber="... ... 1234"
        flag="Visa"
        removable
      />
      <CardPay
        name="Nome Teste..."
        cardValidate="01/28"
        endNumber="... ... 1234"
        flag="Elo"
        removable
      />
    </>
  );
}

export default Cards;
