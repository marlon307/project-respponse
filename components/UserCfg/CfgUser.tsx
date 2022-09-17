import React, { useState, useEffect } from 'react';
import useUser from '../../hooks/useUser';
import { api2 } from '../../service/api';
import BtnIco from '../Buttons/BtnIco';
import { InputRadio } from '../ComponentsForm';
import Input from '../ComponentsForm/Input';
import style from './style.module.scss';

type TStateUser = {
  name: string;
  email: string;
  date: string;
  doc: string;
  tel: string;
  cel: string;
  gender: string,
};

function CfgUser({ token }: IToken) {
  const { ifoUser, loading, mutate } = useUser(token);
  const [isLoading, setIsLoading] = useState(false);
  const [stateIfonUser, setStateIfoUser] = useState<TStateUser>({
    name: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    doc: '',
    tel: '',
    cel: '',
    gender: '',
  });

  async function saveUpdateInfoUser() {
    const newBody = {
      name: stateIfonUser.name,
      date: stateIfonUser.date,
      doc: stateIfonUser.doc,
      tel: stateIfonUser.tel,
      cel: stateIfonUser.cel,
      gender: stateIfonUser.gender,
    };
    if (newBody.name && newBody.doc && newBody.date) {
      setIsLoading(true);

      const { data } = await api2.patch('/user', newBody, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }).catch(({ response }) => response);

      if (data.status === 200) {
        mutate({ ...ifoUser, ...newBody }, false);
      }
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!loading) {
      setStateIfoUser({
        name: ifoUser?.name,
        email: ifoUser?.email,
        date: new Date(ifoUser?.birthday).toISOString().split('T')[0],
        doc: ifoUser?.cpf_cnpj?.replace(/^([\d]{3})\.*([\d]{3})\.*([\d]{3})-*([\d]{2})/, '$1.$2.$3-$4'),
        tel: ifoUser?.tel?.replace(/^([\d]{2})\.*([\d]{5})-*([\d]{4})/, '$1 $2-$3'),
        cel: ifoUser?.cel?.replace(/^([\d]{2})\.*([\d]{5})-*([\d]{4})/, '$1 $2-$3'),
        gender: ifoUser?.gender_id === null ? 0 : ifoUser?.gender_id,
      });
    }
  }, [loading, ifoUser]);

  return (
    <>
      <form className={ style.form }>
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
            name="email"
            placeHolder="E-mail"
            autoComplete="email"
            dValue={ stateIfonUser.email }
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
          <h4>Sexo</h4>
          <div className={ style.inp }>
            <InputRadio
              checked={ ifoUser?.gender_id === 1 }
              iId="men"
              name="Masculino"
              family="gender"
              iValue={ 3 }
            />
            <InputRadio
              checked={ ifoUser?.gender_id === 2 }
              iId="female"
              name="Femenino"
              family="gender"
              iValue={ 2 }
            />
            <InputRadio
              checked={ ifoUser?.gender_id === null }
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
      </form>

      <BtnIco
        action={ saveUpdateInfoUser! }
        textBtn="Salvar"
        actionLiberate={ isLoading }
      />
    </>
  );
}

export default CfgUser;
