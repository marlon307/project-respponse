import React, { useState, useEffect, FormEvent } from 'react';
import useUser from '../../hooks/useUser';
import { api2 } from '../../service/api';
import BtnIco from '../Buttons/BtnIco';
import { InputRadio } from '../ComponentsForm';
import Input from '../ComponentsForm/Input';
import style from './style.module.scss';

type TStateUser = {
  name: string;
  umail: string;
  date: string;
  doc: string;
  tel: string;
  cel: string;
  gender: string,
};

interface Props {
  isRequest: boolean;
}

function CfgUser({ isRequest }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const { dataUser, mutate } = useUser(isRequest);
  const [stateIfonUser, setStateinfoUser] = useState<TStateUser>({
    name: '',
    umail: '',
    date: new Date().toISOString().split('T')[0],
    doc: '',
    tel: '',
    cel: '',
    gender: '',
  });

  async function saveUpdateInfoUser(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    if (data.name && data.doc && data.date) {
      setIsLoading(true);

      const res = await api2.patch('/user', formData)
        .catch(({ response }) => response);

      if (res.data.status === 200) {
        mutate({ ...dataUser, ...data }, false);
      }
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!dataUser && isRequest) {
      mutate();
    }
  }, [isRequest]);

  useEffect(() => {
    if (dataUser && isRequest) {
      setStateinfoUser({
        name: dataUser?.name,
        umail: dataUser?.umail,
        date: new Date(dataUser?.birthday)?.toISOString().split('T')[0],
        doc: dataUser?.cpf_cnpj?.replace(/^([\d]{3})\.*([\d]{3})\.*([\d]{3})-*([\d]{2})/, '$1.$2.$3-$4'),
        tel: dataUser?.tel?.replace(/^([\d]{2})\.*([\d]{5})-*([\d]{4})/, '$1 $2-$3'),
        cel: dataUser?.cel?.replace(/^([\d]{2})\.*([\d]{5})-*([\d]{4})/, '$1 $2-$3'),
        gender: dataUser?.gender_id === null ? 0 : dataUser?.gender_id,
      });
    }
  }, [dataUser]);

  return (
    <form className={ style.form } onSubmit={ saveUpdateInfoUser }>
      <h4>Informações básicas</h4>
      <div className={ style.inp }>
        <Input
          id="name"
          type="name"
          name="name"
          placeHolder="* Nome e Sobrenome"
          msgError="Preencha Nome e Sobrenome"
          autoComplete="name"
          dValue={ stateIfonUser.name }
        />
        <Input
          id="email"
          type="email"
          name="block"
          placeHolder="E-mail"
          autoComplete="email"
          dValue={ stateIfonUser.umail }
          msgError="E-mail inválido"
          disabled
        />
        <a
          href="/resetpsw"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Trocar Senha
        </a>
      </div>
      <div className={ style.inp }>
        <Input
          id="date"
          type="date"
          name="date"
          placeHolder="* Data"
          dValue={ stateIfonUser.date }
          msgError="Selecione uma data"
        />
        <Input
          id="doc"
          type="doc"
          name="doc"
          placeHolder="* CPF"
          dValue={ stateIfonUser.doc }
          msgError="CPF inválido"
          max={ 11 }
          // patt="^([\d]{3})\.*([\d]{3})\.*([\d]{3})-*([\d]{2})"
          format="$1.$2.$3-$4"
        />
      </div>
      <div className={ style.genere }>
        <h4>Género</h4>
        <div className={ style.inp }>
          <InputRadio
            checked={ dataUser?.gender_id === 1 }
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
            checked={ dataUser?.gender_id === null }
            iId="undefined"
            name="Não informar"
            family="gender"
            iValue={ 1 }
          />
        </div>
      </div>
      <div className={ style.contact }>
        <h4>Contato</h4>
        <div className={ style.inp }>
          <Input
            id="tel"
            type="tel"
            name="tel"
            placeHolder="Telefone"
            autoComplete="tel"
            dValue={ stateIfonUser.tel }
            msgError="Insira um telefone"
            max={ 11 }
            // patt="^([\d]{2})\.*([\d]{5})-*([\d]{4})"
            format="$1 $2-$3"
          />
          <Input
            id="cel"
            type="tel"
            name="cel"
            placeHolder="Celular"
            autoComplete="tel"
            dValue={ stateIfonUser.cel }
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
