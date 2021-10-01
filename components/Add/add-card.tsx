import React from 'react';
import Svg from '../../assets/Svg';
import BtnAdd from '../Buttons/BtnAdd';
import { Input } from '../ComponentsForm';
import style from './style.module.scss';

function addcard() {
  return (
    <section className={ style.sectionadd }>
      <h1>
        <Svg icoName="card" />
        Adicionar Cartão de Crédito
      </h1>
      <form>
        <div className="inputs">
          <Input
            id="namecard"
            type="text"
            name="namecard"
            placeHolder="Nome do cartão de credito"
            autoComplete="cc-name"
          />
          <Input
            id="cardvalidate"
            type="text"
            name="cardvalidate"
            placeHolder="Data de validade"
            autoComplete="cc-exp"
          />
          <Input
            id="numbercard"
            type="text"
            name="numbercard"
            placeHolder="Numero do cartão"
            autoComplete="cc-number"
          />
          <Input
            id="codev"
            type="text"
            name="codev"
            placeHolder="Codigo de segurança"
            autoComplete="off"
          />
        </div>
        <BtnAdd eventBtn={ () => { } } />
      </form>
    </section>
  );
}

export default addcard;
