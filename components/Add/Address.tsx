import React, { FormEvent, useState } from 'react';
import { useSWRConfig } from 'swr';
import { api2 } from '../../service/api';
import BtnIco from '../Buttons/BtnIco';
import { Input } from '../ComponentsForm';
import style from './style.module.scss';

type TAddress = {
  execFunction: () => void;
};

function Address({ execFunction }: TAddress) {
  const { cache, mutate } = useSWRConfig();
  const [isLoading, setisLoading] = useState(false);

  async function handleAddAddress(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    // Verificar se todas as chaves estão preenchidas
    const checkValue = Object.keys(data)
      .every((key) => /^[0-9a-zA-Z]/.test(String(data[key])));

    if (checkValue) {
      setisLoading(true);

      const res = await api2.post('/address', formData)
        .catch(({ response }) => response);

      if (res.data.status === 201) {
        const addressList = cache.get('/address');
        mutate(
          '/address',
          [...addressList, {
            id: res.data.address,
            ...data,
          }],
          false,
        );
      }
      setisLoading(false);
      execFunction!();
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
            name="namedest"
            placeholder="Nome do destinatário *"
            autocomplete="name"
            msgError="Insira o Nome do destinatário."
          />
          <Input
            id="zipcode"
            type="text"
            name="zipcode"
            placeholder="CEP *"
            autocomplete="postal-code"
            msgError="Insira um CEP válido."
            max={ 8 }
          // patt="^([\d]{5})\.*([\d]{3})"
          // format="$1-$2"
          />
          <Input
            id="street"
            type="text"
            name="street"
            placeholder="Rua *"
            autocomplete="street-address"
            msgError="Insira o nome da Rua."
          />
          <Input
            id="district"
            type="text"
            name="district"
            placeholder="Bairro *"
            autocomplete="address-level3"
            msgError="Insira o nome do Bairro."
          />
          <Input
            id="number"
            type="text"
            name="number"
            placeholder="N° *"
            msgError="Insira o número da Casa."
          />
          <Input
            id="state"
            type="text"
            name="state"
            placeholder="UF *"
            autocomplete="shipping address-level1"
            msgError="Insira o Estado (UF)."
            max={ 2 }
          />
          <Input
            id="city"
            type="text"
            name="city"
            placeholder="Cidade *"
            autocomplete="shipping shipping address-level2"
            msgError="Insira a Cidade."
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
