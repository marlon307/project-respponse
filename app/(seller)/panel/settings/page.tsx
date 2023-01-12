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
import InputSmall from 'components/ComponentsForm/InputSmall';
import style from './style.module.scss';

function Page() {
  const { dataSeller, mutate } = useSellerSettings();
  const [address, setAddress] = useState(dataSeller?.address as ITAddress);
  const [isOpen, setIsOpen] = useState(false);
  const [boxNumber, setBoxNumber] = useState(0);

  async function handlerSubimit(e: FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    const object = { ...data, address: address || dataSeller?.address } as PropsSettingsPanel;

    if (JSON.stringify(object) !== JSON.stringify(dataSeller)) {
      formData.append('address', String(address?.id || dataSeller?.address.id));
      formData.append('listboxes', JSON.stringify([...Array(boxNumber).keys()].map((box) => ({
        width: data[`width-${box}`],
        height: data[`height-${box}`],
        length: data[`length-${box}`],
        weight: data[`weight-${box}`],
      }))));

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
          <legend>Configurações para transporte</legend>
          <button type="button" onClick={ () => setIsOpen(true) }>
            <span className={ style.title_span }>Endereço de coleta</span>
            <CardAddress { ...address ?? dataSeller?.address } />
          </button>
          <div className={ style.block }>
            <span className={ style.title_span }>Observações</span>
            <textarea
              name="obs"
              id="obs"
              cols={ 20 }
              rows={ 5 }
              placeholder="Máximo de caracteres 64"
              maxLength={ 64 }
              defaultValue={ dataSeller?.obs }
            />
          </div>
          <div className={ style.block }>
            <span className={ style.title_span }>Caixas</span>
            { [...Array(boxNumber).keys()].map((box) => (
              <div className={ style.box } key={ box }>
                <InputSmall title="L" type="number" name={ `width-${box}` } placeholder="0.0" required />
                <InputSmall title="A" type="number" name={ `height-${box}` } placeholder="0.0" required />
                <InputSmall title="C" type="number" name={ `length-${box}` } placeholder="0.0" required />
                <InputSmall title="P" type="number" name={ `weight-${box}` } placeholder="0.0" required />
                <button type="button" title="Excluir">&#x2715;</button>
              </div>
            )) }
            <button type="button" onClick={ () => setBoxNumber((ccBox) => ccBox + 1) }>Criar Caixa</button>
          </div>
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
