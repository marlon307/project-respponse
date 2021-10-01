import React from 'react';
import Svg from '../../assets/Svg';
import BtnAdd from '../Buttons/BtnAdd';
import { Input } from '../ComponentsForm';
import style from './style.module.scss';

function addaderess() {
  return (
    <section className={ style.sectionadd }>
      <h1>
        <Svg icoName="map" />
        Adicionar endereço
      </h1>
      <form>
        <div className="inputs">
          <Input
            id="namedest"
            type="text"
            name="namedest"
            placeHolder="Nome do destinatário"
            autoComplete="name"
          />
          <Input
            id="zipcode"
            type="text"
            name="zipcode"
            placeHolder="CEP"
            autoComplete="postal-code"
          />
          <Input
            id="street"
            type="text"
            name="street"
            placeHolder="Rua"
            autoComplete="street-address"
          />
          <Input
            id="district"
            type="text"
            name="district"
            placeHolder="Bairro"
            autoComplete="address-level3"
          />
          <Input
            id="number"
            type="text"
            name="number"
            placeHolder="N°"
          />
          <Input
            id="state"
            type="text"
            name="state"
            placeHolder="UF"
            autoComplete="shipping address-level1"
          />
          <Input
            id="city"
            type="text"
            name="city"
            placeHolder="Cidade"
            autoComplete="shipping shipping address-level2"
          />
        </div>
        <BtnAdd eventBtn={ () => { } } />
      </form>
    </section>
  );
}

export default addaderess;
