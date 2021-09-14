import React from 'react';
import BtnAdd from '../components/Buttons/BtnAdd';
import { Input } from '../components/ComponentsForm';
import style from './styles/styleAccount.module.scss';

function addaderess() {
  return (
    <section className={ style.section }>
      <h1>Adicionar endereço</h1>
      <form>
        <div className="inputs">
          <Input id="namedest" type="text" name="namedest" placeholder="Nome do destinatário" />
          <Input id="street" type="text" name="street" placeholder="Rua" />
          <Input id="district" type="text" name="district" placeholder="Bairro" />
          <Input id="state" type="text" name="state" placeholder="UF" />
          <Input id="city" type="text" name="city" placeholder="Cidade" />
          <Input id="zipcode" type="text" name="zipcode" placeholder="CEP" />
        </div>
        <BtnAdd eventBtn={ () => { } } />
      </form>
    </section>
  );
}

export default addaderess;
