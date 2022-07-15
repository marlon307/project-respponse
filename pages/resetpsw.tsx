import React, { useState } from 'react';
import Link from 'next/link';
import { useAppSelector } from '../redux/hooks';
import { api2 } from '../service/api';
import BtnIco from '../components/Buttons/BtnIco';
import { Input } from '../components/ComponentsForm';
import HeadSEO from '../components/Head/HeadSEO';
import style from '../Sass/style.module.scss';

function Resetpsw() {
  const validEmail = new RegExp(`^${process.env.VALIDATION_EMAIL!}$`);
  const { logged } = useAppSelector(({ user }) => user);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setisValid] = useState(false);
  const [contMsg, setMsg] = useState<string | null>(null);

  function changeEmail({ value }: HTMLInputElement) {
    setEmail(value);
    setisValid(false);
  }

  async function sendmailReset() {
    if (validEmail.test(email)) {
      setIsLoading(true);

      const { data } = await api2.post('/solicitation_reset_psw_user', {
        email,
      }).catch(({ response }) => response);

      if (data.status === 200) {
        setMsg(email);
      } else {
        setIsLoading(false);
        setisValid(true);
      }
      setIsLoading(false);
    }
  }

  return (
    <>
      <HeadSEO
        title="Recupere sua senha"
        description="Insira seu e-mail para recuperar sua senha."
      />
      <section className={ style.contlogin }>
        <h1>Recuperar senha</h1>
        <form>
          { contMsg === null ? (
            <div className="inputs">
              <Input
                id="email"
                type="email"
                name="email"
                placeHolder="E-mail"
                autoComplete="email"
                ivalue={ email }
                inputValue={ changeEmail! }
                msgError={ isValid ? 'Email inválido ou não cadastrado!' : 'Email inválido!' }
                isValid={ isValid }
              />
            </div>
          ) : (
            <div className={ style.msgregister }>
              <p>
                Enviamos para este endereço de email
                { ' ' }
                <b>{ contMsg }</b>
                { ' ' }
                um link para recupera sua senha
              </p>
              <span />
              Verefique sua caixa de entrada ou span.
            </div>
          ) }
          <div className={ style.action }>
            { !logged && (
              <Link href="/login-register">
                <a className="link">
                  Fazer Login
                </a>
              </Link>
            ) }
            { contMsg === null && (
              <BtnIco
                textBtn="Enviar Email"
                icoName="email"
                action={ sendmailReset! }
                actionLiberate={ isLoading }
              />
            ) }
          </div>
        </form>
      </section>
    </>
  );
}

export default Resetpsw;
