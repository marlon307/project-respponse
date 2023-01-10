import Link from 'next/link';
import React, { useState, FormEvent } from 'react';
import useUser from 'hooks/useUser';
import { api2 } from 'service/api';
import BtnIco from '../Buttons/BtnIco';
import { InputRadio } from '../ComponentsForm';
import Input from '../ComponentsForm/Input';
import style from './style.module.scss';

interface Props {
  isRequest: boolean;
}

function CfgUser({ isRequest }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const { dataUser, mutate } = useUser(isRequest);
  async function saveUpdateInfoUser(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    if (data.name && data.doc && data.date) {
      setIsLoading(true);

      const res = await api2.patch('/user', formData)
        .catch(({ response }) => response);

      if (res.data.status === 200) {
        mutate((cUser) => ({ ...cUser, ...data }), false);
      }
      setIsLoading(false);
    }
  }

  return (
    <form className={ style.form } onSubmit={ saveUpdateInfoUser }>
      <h4>Informações básicas</h4>
      <div className={ style.inp }>
        <Input
          id="name"
          type="name"
          name="name"
          text="Nome"
          placeholder="* Nome e Sobrenome"
          msgError="Preencha Nome e Sobrenome"
          autoComplete="name"
          defaultValue={ dataUser?.name }
        />
        <Input
          id="email"
          type="email"
          text="E-mail"
          placeholder="email@email.com"
          defaultValue={ dataUser?.email }
          msgError="E-mail inválido"
          disabled
        />
        <Link
          href="/login/resetpsw"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Trocar Senha
        </Link>
      </div>
      <div className={ style.inp }>
        <Input
          id="date"
          type="date"
          name="date"
          placeholder="00/00/0000"
          text="Data"
          defaultValue={ dataUser?.birthday }
          msgError="Selecione uma data"
        />
        <Input
          id="doc"
          type="doc"
          name="doc"
          text="CPF"
          placeholder="000.000.000-00"
          defaultValue={ dataUser?.cpf }
          msgError="CPF inválido"
          maxLength={ 11 }
        // pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
        // pattern="^([\d]{ 3 })\.*([\d]{ 3 })\.*([\d]{ 3 })-*([\d]{ 2 })"
        // format="$1.$2.$3-$4"
        />
      </div>
      <div className={ style.genere }>
        <h4>Género</h4>
        <div className={ style.inp }>
          { dataUser?.gender_id ? (
            <>
              <InputRadio
                checked={ dataUser?.gender_id === 3 }
                iId="men"
                name="Masculino"
                family="gender"
                iValue={ 3 }
              />
              <InputRadio
                checked={ dataUser?.gender_id === 2 }
                iId="female"
                name="Femenino"
                family="gender"
                iValue={ 2 }
              />
              <InputRadio
                checked={ dataUser?.gender_id === 1 }
                iId="undefined"
                name="Não informar"
                family="gender"
                iValue={ 1 }
              />
            </>
          )
            : null }
        </div>
      </div>
      <div className={ style.contact }>
        <h4>Contato</h4>
        <div className={ style.inp }>
          <Input
            id="tel"
            type="tel"
            name="tel"
            placeholder="(DD) 00000-0000"
            text="Telefone"
            autoComplete="tel"
            defaultValue={ dataUser?.tel }
            msgError="Insira um telefone"
            max={ 11 }
            // patt="^([\d]{2})\.*([\d]{5})-*([\d]{4})"
            format="$1 $2-$3"
          />
          <Input
            id="cel"
            type="tel"
            name="cel"
            placeholder="(DD) 00000-0000"
            text="Celular"
            autoComplete="tel"
            defaultValue={ dataUser?.cel }
            msgError="Insira um telefone"
            max={ 11 }
            // patt="^([\d]{2})\.*([\d]{5})-*([\d]{4})"
            format="$1 $2-$3"
          />
        </div>
      </div>
      <BtnIco
        textBtn="Salvar"
        actionLiberate={ isLoading }
      />
    </form>
  );
}

export default CfgUser;
