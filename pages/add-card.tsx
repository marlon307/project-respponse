import React from 'react';
import BtnAdd from '../components/Buttons/BtnAdd';
import { Input } from '../components/ComponentsForm';
import style from './styles/styleAccount.module.scss';

function addcard() {
  return (
    <section className={ style.addaderess }>
      <h1>Adicionar Cartão de credito</h1>
      <form>
        <div className="inputs">
          <Input id="namecard" type="text" name="namecard" placeholder="Nome do cartão de credito" />
          <Input id="cardvalidate" type="text" name="cardvalidate" placeholder="Data de validade" />
          <Input id="numbercard" type="text" name="numbercard" placeholder="Numero do cartão" />
          <Input id="codev" type="text" name="codev" placeholder="Codigo de segurança" />
        </div>
        <BtnAdd />
      </form>
    </section>
  );
}

export default addcard;
