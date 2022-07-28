import React, { useState, useCallback, useEffect } from 'react';
import useUser from '../../hooks/useUser';
import { InputRadio } from '../ComponentsForm';
import Input from '../ComponentsForm/Input';
import style from './style.module.scss';

type TEvent = {
  name: string;
  value: string;
};

type TStateUser = {
  name: string;
  email: string;
  date: string;
  doc: string;
  tel: string;
  cel: string;
};

function CfgUser() {
  const { ifoUser, loading } = useUser();

  const [stateIfonUser, setStateIfoUser] = useState<TStateUser>({
    name: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    doc: '',
    tel: '',
    cel: '',
  });

  const userCfgInfo = useCallback((target: TEvent) => {
    const { name, value } = target;
    // console.log(value.replace(/^([\d]{2})\.*([\d]{5})-*([\d]{4})/, '$1 $2-$3')); Telefone

    setStateIfoUser((state) => ({
      ...state,
      [name]: value,
    }));
  }, []);

  useEffect(() => {
    if (!loading) {
      setStateIfoUser({
        name: ifoUser?.name,
        email: ifoUser?.email,
        date: new Date(ifoUser?.birthday).toISOString().split('T')[0],
        doc: ifoUser?.cpf_cnpj,
        tel: ifoUser?.telephones[0]?.phone,
        cel: ifoUser?.telephones[1]?.phone,
      });
    }
  }, [loading]);

  return (
    <section className={ style.section }>
      <div className={ style.contaienrsection }>
        <div className="inputs">
          <h3>Informações básicas</h3>
          <form>
            <div className={ style.inp }>
              <Input
                id="name"
                type="name"
                name="name"
                placeHolder="Nome e Sobrenome"
                msgError="Preencha Nome e Sobrenome"
                autoComplete="name"
                ivalue={ stateIfonUser.name }
                inputValue={ userCfgInfo }
              />
              <Input
                id="email"
                type="email"
                name="email"
                placeHolder="E-mail"
                autoComplete="email"
                ivalue={ stateIfonUser.email }
                inputValue={ userCfgInfo }
                msgError="E-mail inválido"
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
                placeHolder="Data"
                ivalue={ stateIfonUser.date }
                inputValue={ userCfgInfo }
                msgError="Selecione uma data"
              />
              <Input
                id="doc"
                type="doc"
                name="doc"
                placeHolder="CPF"
                ivalue={ stateIfonUser.doc }
                inputValue={ userCfgInfo }
                msgError="CPF inválido"
              />
            </div>
            <div className={ style.genere }>
              <h5>Sexo</h5>
              <div className={ style.inp }>
                <InputRadio
                  checked={ ifoUser?.gender_id === 1 }
                  id="men"
                  name="Masculino"
                  family="grnere"
                  execFunction={ () => { } }
                />
                <InputRadio
                  checked={ ifoUser?.gender_id === 2 }
                  id="female"
                  name="Femenino"
                  family="grnere"
                  execFunction={ () => { } }
                />
                <InputRadio
                  checked={ ifoUser?.gender_id === null }
                  id="undefined"
                  name="Não informar"
                  family="grnere"
                  execFunction={ () => { } }
                />
              </div>
            </div>
            <div className={ style.contact }>
              <h5>Contato</h5>
              <div className={ style.inp }>
                <Input
                  id="tel"
                  type="tel"
                  name="tel"
                  placeHolder="Telefone"
                  autoComplete="tel"
                  ivalue={ stateIfonUser.tel }
                  inputValue={ userCfgInfo }
                  msgError="Insira um telefone"
                />
                <Input
                  id="cel"
                  type="tel"
                  name="cel"
                  placeHolder="Telefone"
                  autoComplete="tel"
                  ivalue={ stateIfonUser.cel }
                  inputValue={ userCfgInfo }
                  msgError="Insira um telefone"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CfgUser;
