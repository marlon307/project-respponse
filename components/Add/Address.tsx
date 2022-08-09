import React, { useState, useCallback } from 'react';
import useAddress from '../../hooks/useAddress';
import { api2 } from '../../service/api';
import BtnIco from '../Buttons/BtnIco';
import { Input } from '../ComponentsForm';
import style from './style.module.scss';

function Address({ token }: IToken) {
  const { mutate, listAddress } = useAddress(token);
  const [isLoading, setisLoading] = useState(false);
  const [addressForm, setAddressForm] = useState<ITAddress>({
    namedest: '',
    zipcode: '',
    street: '',
    district: '',
    number: '',
    state: '',
    city: '',
  });

  const hadleChange = useCallback((target: HTMLInputElement) => {
    const {
      name, value, dataset, pattern,
    } = target;

    setAddressForm((state) => ({
      ...state,
      [name]: dataset?.format
        ? value.replace(new RegExp(pattern), dataset.format)
        : value,
    }));
  }, []);

  async function handleAddAddress() {
    // addressForm[key]
    // Verificar se todas as chaves estão preenchidas
    const checkValue = Object.keys(addressForm)
      .every((key) => /^[0-9a-zA-Z]/.test(addressForm[key]));

    if (checkValue) {
      setisLoading(true);
      const body = {
        name_delivery: addressForm.namedest,
        city: addressForm.city,
        district: addressForm.district,
        uf: addressForm.state,
        cep: addressForm.zipcode,
        road: addressForm.street,
        number_home: addressForm.number,
      };

      const { data } = await api2.post('/add_address', body, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }).catch(({ response }) => response);
      if (data.status === 201) {
        mutate({
          address: [...listAddress.address, {
            id: data.address,
            ...body,
          }],
        }, false);
      }
      setisLoading(false);
    }
  }

  return (
    <section className={ style.sectionadd }>
      <div className={ style.content }>
        <h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 11.5 7.3 11.8a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8Zm0 17.6c-2.1-2-6-6.3-6-9.6a6 6 0 1 1 12 0c0 3.3-3.9 7.7-6 9.6ZM12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
          </svg>
          Adicionar endereço
        </h1>
        <form>
          <div className="inputs">
            <Input
              id="namedest"
              type="text"
              name="namedest"
              placeHolder="Nome do destinatário *"
              autoComplete="name"
              ivalue={ addressForm.namedest }
              inputValue={ hadleChange }
              msgError="Insira o Nome do destinatário."
            />
            <Input
              id="zipcode"
              type="text"
              name="zipcode"
              placeHolder="CEP *"
              autoComplete="postal-code"
              ivalue={ addressForm.zipcode }
              inputValue={ hadleChange }
              msgError="Insira um CEP válido."
              max={ 9 }
              patt="^([\d]{5})\.*([\d]{3})"
              format="$1-$2"
            />
            <Input
              id="street"
              type="text"
              name="street"
              placeHolder="Rua *"
              autoComplete="street-address"
              ivalue={ addressForm.street }
              inputValue={ hadleChange }
              msgError="Insira o nome da Rua."
            />
            <Input
              id="district"
              type="text"
              name="district"
              placeHolder="Bairro *"
              autoComplete="address-level3"
              ivalue={ addressForm.district }
              inputValue={ hadleChange }
              msgError="Insira o nome do Bairro."
            />
            <Input
              id="number"
              type="text"
              name="number"
              placeHolder="N° *"
              ivalue={ addressForm.number }
              inputValue={ hadleChange }
              msgError="Insira o número da Casa."
            />
            <Input
              id="state"
              type="text"
              name="state"
              placeHolder="UF *"
              autoComplete="shipping address-level1"
              ivalue={ addressForm.state }
              inputValue={ hadleChange }
              msgError="Insira o Estado (UF)."
              max={ 2 }
            />
            <Input
              id="city"
              type="text"
              name="city"
              placeHolder="Cidade *"
              autoComplete="shipping shipping address-level2"
              ivalue={ addressForm.city }
              inputValue={ hadleChange }
              msgError="Insira a Cidade."
            />
          </div>
          <BtnIco
            textBtn="Adicionar"
            action={ handleAddAddress! }
            actionLiberate={ isLoading }
          />
        </form>
      </div>
    </section>
  );
}

export default Address;
