'use client';

import React, { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '../../../../components/ComponentsForm';
import CardAddress from '../../../../components/Cards/CardAddress/CardAddress';
import BtnIco from '../../../../components/Buttons/BtnIco';
import { api2 } from '../../../../service/api';
import style from './style.module.scss';

interface PropsSettings {
  cnpj: string;
  ie: string;
  name_store: string;
  address: ITAddress
}

function Page() {
  const [sllerInfo, setSellerInfo] = useState({} as PropsSettings);
  const router = useRouter();

  async function handlerSubimit(e: FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append('address', '1');

    await api2.patch('/panel/setings', formData);
  }

  useEffect(() => {
    async function getSettingSeller() {
      const response = await api2.get('/panel/setings')
        .catch((err) => (err.response.status === 401 ? router.push('/') : err));
      if (response.data.status === 200) {
        setSellerInfo(response.data.settings);
      }
    }
    getSettingSeller();
  }, []);

  return (
    <form className={ style.form } onSubmit={ handlerSubimit }>
      <div className={ style.fields }>
        <fieldset>
          <legend>Informações principais da empresa</legend>
          <Input
            text="Nome da Loja"
            name="store_name"
            placeholder="00.000.000/0000-00"
            defaultValue={ sllerInfo.name_store }
            maxLength={ 14 }
            minLength={ 14 }
            required
          />
          <Input
            text="CNPJ"
            name="cnpj"
            placeholder="00.000.000/0000-00"
            defaultValue={ sllerInfo.cnpj }
            maxLength={ 14 }
            minLength={ 14 }
            required
          />
          <Input
            text="Incrição Estadual"
            name="ie"
            placeholder="00000000000000"
            defaultValue={ sllerInfo.ie }
            maxLength={ 14 }
            minLength={ 14 }
            required
          />
        </fieldset>
        <fieldset>
          <legend>Endereço de coleta</legend>
          <CardAddress { ...sllerInfo.address } />
        </fieldset>
      </div>
      <BtnIco
        textBtn="Salvar"
        actionLiberate={ false }
      />
    </form>
  );
}

export default Page;
