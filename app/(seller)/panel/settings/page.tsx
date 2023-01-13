'use client';

import React, { useState } from 'react';
import type { FormEvent, MouseEvent } from 'react';
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
  const [address, setAddress] = useState<ITAddress>(dataSeller?.address!);
  const [listRemoveBox, setListRemoveBox] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  async function handlerSubimit(e: FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    const object = { ...data, address: address || dataSeller?.address } as PropsSettingsPanel;

    if (JSON.stringify(object) !== JSON.stringify(dataSeller)) {
      const boxList = dataSeller?.boxes?.map((box) => {
        if (!listRemoveBox.includes(String(box.id))) {
          return {
            id: typeof box.id === 'string' ? null : box.id,
            width: data[`width-${box.id}`],
            height: data[`height-${box.id}`],
            length: data[`length-${box.id}`],
            weight: data[`weight-${box.id}`],
          };
        }
        return null;
      });

      formData.append('address', String(address?.id || dataSeller?.address.id));
      formData.append('removeboxes', JSON.stringify(listRemoveBox.filter(Number)));
      formData.append('listboxes', JSON.stringify(boxList));

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

  function handlerAddBox() {
    mutate((prevState) => ({
      ...prevState!,
      boxes: [...prevState?.boxes ?? [], {
        id: `b-${prevState?.boxes.length ?? 0 + 1}`,
        height: 0,
        length: 0,
        weight: 0,
        width: 0,
      }],
    }), false);
  }

  function handleClickDeleteBox({ target }: MouseEvent<HTMLButtonElement>) {
    const { id } = target as HTMLElement;
    setListRemoveBox((prevState) => {
      if (prevState.includes(id)) return prevState;
      return [...prevState, id];
    });
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
            { dataSeller?.boxes?.map((box) => (
              !listRemoveBox.includes(String(box.id)) ? (
                <div className={ style.box } key={ box.id }>
                  <InputSmall title="L" type="number" defaultValue={ box.width } name={ `width-${box.id}` } placeholder="0.0" required />
                  <InputSmall title="A" type="number" defaultValue={ box.height } name={ `height-${box.id}` } placeholder="0.0" required />
                  <InputSmall title="C" type="number" defaultValue={ box.length } name={ `length-${box.id}` } placeholder="0.0" required />
                  <InputSmall title="P" type="number" defaultValue={ box.weight } name={ `weight-${box.id}` } placeholder="0.0" required />
                  <button type="button" id={ String(box.id) } onClick={ handleClickDeleteBox } title="Excluir">&#x2715;</button>
                </div>
              )
                : null)) }
            <button type="button" onClick={ handlerAddBox }>Criar Caixa &#x2b;</button>
            { listRemoveBox.length ? <button type="button" onClick={ () => setListRemoveBox([]) }>Desfazer &#x21a4;</button> : null }
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
