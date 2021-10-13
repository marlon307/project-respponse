import React, { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import style from './style.module.scss';
import Input from '../components/ComponentsForm/Input';
import { InputRadio } from '../components/ComponentsForm';

interface IUser {
  user: {
    logged: boolean;
  }
}

function usercfg() {
  const { logged } = useSelector(({ user }: IUser) => user);
  const router = useRouter();

  const [stateIfonUser, setStateIfoUser] = useState({
    name: '',
    email: '',
    psw: '',
    date: '',
    doc: '',
    tel: '',
    cel: '',
  });

  const userCfgInfo = useCallback((target) => {
    const { name, value } = target;
    setStateIfoUser({
      ...stateIfonUser,
      [name]: value,
    });
  }, [stateIfonUser]);

  useEffect(() => {
    if (!logged) {
      router.push('/');
    }
  }, [logged]);

  return (
    <section className={ style.section }>
      <div className={ style.contaienrsection }>
        <div className="inputs">
          <form>
            <h3>Informações básicas</h3>
            <Input
              id="name"
              type="name"
              name="name"
              placeHolder="Nome"
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
            />
            <Input
              id="psw"
              type="password"
              name="psw"
              placeHolder="Senha"
              autoComplete="off"
              ivalue={ stateIfonUser.psw }
              inputValue={ userCfgInfo }
            />
            <Input
              id="date"
              type="date"
              name="date"
              placeHolder="Data"
              ivalue={ stateIfonUser.date }
              inputValue={ userCfgInfo }
            />
            <Input
              id="doc"
              type="doc"
              name="doc"
              placeHolder="CPF"
              ivalue={ stateIfonUser.doc }
              inputValue={ userCfgInfo }
            />
            <div className={ style.genere }>
              <span>Sexo</span>
              <div>
                <InputRadio id="men" name="Masculino" family="grnere" />
                <InputRadio id="female" name="Femenino" family="grnere" />
                <InputRadio id="undefined" name="Não informar" family="grnere" />
              </div>
            </div>
            <div className={ style.contact }>
              <span>Contato</span>
              <Input
                id="tel"
                type="tel"
                name="tel"
                placeHolder="Telefone"
                autoComplete="tel"
                ivalue={ stateIfonUser.tel }
                inputValue={ userCfgInfo }
              />
              <Input
                id="cel"
                type="tel"
                name="cel"
                placeHolder="Telefone"
                autoComplete="tel"
                ivalue={ stateIfonUser.cel }
                inputValue={ userCfgInfo }
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default usercfg;
