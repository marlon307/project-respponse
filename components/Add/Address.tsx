import React, { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { api2 } from '../../service/api';
import BtnIco from '../Buttons/BtnIco';
import { Input } from '../ComponentsForm';
import useAddress from '../../hooks/useAddress';
import style from './style.module.scss';

type TAddress = {
  execFunction: () => void;
};

interface IRequestAddress {
  logradouro?: string;
  bairro?: string;
  uf?: string;
  localidade?: string;
}

function Address({ execFunction }: TAddress) {
  const [isLoading, setisLoading] = useState(false);
  const [address, setAdrres] = useState<IRequestAddress>({});
  const { addressList, mutate } = useAddress(false);

  async function handleAddAddress(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    // Verificar se todas as chaves estão preenchidas
    const checkValue = Object.keys(data)
      .every((key) => /^[0-9a-zA-Z]/.test(String(data[key])));

    if (checkValue) {
      setisLoading(true);

      const responseData = await api2.post('/address', formData)
        .catch(({ response }) => response);

      if (responseData.data.status === 201) {
        mutate([...addressList, {
          id: responseData.data.id,
          ...data,
        }]);
        execFunction!();
      }
      setisLoading(false);
    }
  }

  async function getAddress({ target }: ChangeEvent<HTMLInputElement>) {
    const zipCode = target.value.replaceAll('-', '');
    if (zipCode.length === 8) {
      const response = await api2.get(`https://viacep.com.br/ws/${zipCode}/json/`);
      setAdrres(response.data);
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
        <form onSubmit={ handleAddAddress }>
          <Input
            id="namedest"
            type="text"
            name="name_delivery"
            placeholder="Nome Sobrenome"
            text="Nome do destinatário"
            autoComplete="name"
            msgError="Insira o Nome do destinatário."
          />
          <Input
            id="zipcode"
            type="text"
            name="zipcode"
            placeholder="00000000"
            text="CEP"
            autoComplete="postal-code"
            msgError="Insira um CEP válido."
            maxLength={ 8 }
            onChange={ getAddress! }
          />
          <Input
            id="street"
            type="text"
            name="street"
            text="Logradouro"
            placeholder="Rua"
            autoComplete="street-address"
            msgError="Insira o nome da Rua."
            defaultValue={ address.logradouro }
          />
          <Input
            id="district"
            type="text"
            name="district"
            text="Bairro"
            placeholder="Bairro"
            autoComplete="address-level3"
            msgError="Insira o nome do Bairro."
            defaultValue={ address.bairro }
          />
          <Input
            id="number"
            type="text"
            text="Número"
            name="number_home"
            placeholder="N°"
            msgError="Insira o número da Casa."
          />
          <Input
            id="state"
            type="text"
            name="state"
            text="Estado"
            placeholder="UF"
            autoComplete="shipping address-level1"
            msgError="Insira o Estado (UF)."
            max={ 2 }
            defaultValue={ address.uf }
          />
          <Input
            id="city"
            type="text"
            text="Cidade"
            name="city"
            placeholder="Cidade"
            autoComplete="shipping shipping address-level2"
            msgError="Insira a Cidade."
            defaultValue={ address.localidade }
          />
          <BtnIco
            textBtn="Adicionar"
            actionLiberate={ isLoading }
          />
        </form>
      </div>
    </section>
  );
}

export default Address;
