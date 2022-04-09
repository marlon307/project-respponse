import React, { useState, useCallback } from 'react';
import Link from 'next/link';

import style from '../Sass/style.module.scss';
import { useAppSelector } from '../redux/hooks';
import BtnIco from '../components/Buttons/BtnIco';
import { Input } from '../components/ComponentsForm';

function Resetpsw() {
  const { logged } = useAppSelector(({ user }) => user);
  const [email, setEmail] = useState('');

  const restPsw = useCallback(({ value }: any) => {
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
            msgError="Email inválido!"
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

export default Resetpsw;
