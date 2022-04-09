import React, { useState, useCallback } from 'react';
import Svg from '../../assets/Svg';
import BtnAdd from '../Buttons/BtnAdd';
import { Input } from '../ComponentsForm';
import style from './style.module.scss';

function Address() {
  const [addressForm, setAddressForm] = useState({
    namedest: '',
    zipcode: '',
    street: '',
    district: '',
    number: '',
    state: '',
    city: '',
  });

  const hadleChange = useCallback((target: { name: string; value: string; }) => {
    const { name, value } = target;
    setAddressForm((state) => ({
      ...state,
      [name]: value,
    }));
  }, []);

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
            ivalue={ addressForm.namedest }
            inputValue={ hadleChange }
            msgError="Insira o Nome do destinatário."
          />
          <Input
            id="zipcode"
            type="text"
            name="zipcode"
            placeHolder="CEP"
            autoComplete="postal-code"
            ivalue={ addressForm.zipcode }
            inputValue={ hadleChange }
            msgError="Insira um CEP válido."
          />
          <Input
            id="street"
            type="text"
            name="street"
            placeHolder="Rua"
            autoComplete="street-address"
            ivalue={ addressForm.street }
            inputValue={ hadleChange }
            msgError="Insira o nome da Rua."
          />
          <Input
            id="district"
            type="text"
            name="district"
            placeHolder="Bairro"
            autoComplete="address-level3"
            ivalue={ addressForm.district }
            inputValue={ hadleChange }
            msgError="Insira o nome do Bairro."
          />
          <Input
            id="number"
            type="text"
            name="number"
            placeHolder="N°"
            ivalue={ addressForm.number }
            inputValue={ hadleChange }
            msgError="Insira o número da Casa."
          />
          <Input
            id="state"
            type="text"
            name="state"
            placeHolder="UF"
            autoComplete="shipping address-level1"
            ivalue={ addressForm.state }
            inputValue={ hadleChange }
            msgError="Insira o Estado (UF)."
          />
          <Input
            id="city"
            type="text"
            name="city"
            placeHolder="Cidade"
            autoComplete="shipping shipping address-level2"
            ivalue={ addressForm.city }
            inputValue={ hadleChange }
            msgError="Insira a Cidade."
          />
        </div>
        <BtnAdd eventBtn={ () => { } } />
      </form>
    </section>
  );
}

export default Address;
