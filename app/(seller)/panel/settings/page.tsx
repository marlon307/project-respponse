'use client';

import React, { useState } from 'react';
import type { FormEvent } from 'react';
import { Input } from 'components/ComponentsForm';
import CardAddress from 'components/Cards/CardAddress/CardAddress';
import BtnIco from 'components/Buttons/BtnIco';
import { api2 } from 'service/api';
import useSellerSettings from 'hooks/useSellerSettings';
import type { PropsSettingsPanel } from 'hooks/useSellerSettings';
import RenderAdderess from 'components/Bag/RenderAdderess';
import ContentModal from 'components/Modal/ContentModal';
import style from './style.module.scss';

function Page() {
  const { dataSeller, mutate } = useSellerSettings();
  const [address, setAddress] = useState(dataSeller?.address as ITAddress);
  const [isOpen, setIsOpen] = useState(false);

  async function handlerSubimit(e: FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    const object = { ...data, address: address || dataSeller?.address } as PropsSettingsPanel;

    if (JSON.stringify(object) !== JSON.stringify(dataSeller)) {
      formData.append('address', String(address?.id || dataSeller?.address.id));
      const resp = await api2.patch('/panel/setings', formData);
      if (resp.data.status === 200) {
        mutate(object);
      }
    }
  }

  function selectAddress(add: ITAddress) {
    setIsOpen(false);
    setAddress(add);
  }

  return (
    <form className={ style.form } onSubmit={ handlerSubimit }>
      <div className={ style.fields }>
        <fieldset>
          <legend>Informações principais da empresa</legend>
          <Input
            text="Nome da Loja"
            name="store_name"
            placeholder="00.000.000/0000-00"
            defaultValue={ dataSeller?.store_name }
            maxLength={ 14 }
            minLength={ 14 }
            required
          />
          <Input
            text="CNPJ"
            name="cnpj"
            placeholder="00.000.000/0000-00"
            defaultValue={ dataSeller?.cnpj }
            maxLength={ 14 }
            minLength={ 14 }
            required
          />
          <Input
            text="Incrição Estadual"
            name="ie"
            placeholder="00000000000000"
            defaultValue={ dataSeller?.ie }
            maxLength={ 14 }
            minLength={ 14 }
            required
          />
        </fieldset>
        <fieldset>
          <legend>Endereço de coleta</legend>
          <button type="button" onClick={ () => setIsOpen(true) }>
            <CardAddress { ...address ?? dataSeller?.address } />
          </button>
        </fieldset>
      </div>
      <BtnIco
        textBtn="Salvar"
        actionLiberate={ false }
      />
      <ContentModal isOpen={ isOpen } openModal={ setIsOpen }>
        { isOpen && <RenderAdderess execFunction={ selectAddress! } /> }
      </ContentModal>
    </form>
  );
}

export default Page;
