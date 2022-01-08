import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Input from '../components/ComponentsForm/Input';
import style from './style.module.scss';
import BtnIco from '../components/Buttons/BtnIco';
import type { ReduxUser } from '../types/typesUserRedux';

function resetpsw() {
  const { logged } = useSelector(({ user }: ReduxUser) => user);
  const [email, setEmail] = useState('');

  const restPsw = useCallback(({ value }) => {
    setEmail(value);
  }, []);

  return (
    <section className={ style.contlogin }>
      <h1>Recuperar senha</h1>
      <form>
        <div className="inputs">
          <Input
            id="email"
            type="email"
            name="email"
            placeHolder="E-mail"
            autoComplete="email"
            ivalue={ email }
            inputValue={ restPsw }
          />
        </div>
        <div className={ style.action }>
          { !logged && (
            <Link href="/login-register">
              <a className="link">
                Fazer Login
              </a>
            </Link>
          ) }
          <BtnIco
            textBtn="Enviar Email"
            icoName="email"
            action={ () => { } }
            actionLiberate={ false }
          />
        </div>
      </form>
    </section>
  );
}

export default resetpsw;
