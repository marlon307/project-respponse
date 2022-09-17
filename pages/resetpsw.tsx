import React, { FormEvent, useState } from 'react';
import Link from 'next/link';
import { api2 } from '../service/api';
import BtnIco from '../components/Buttons/BtnIco';
import { Input } from '../components/ComponentsForm';
import HeadSEO from '../components/Head/HeadSEO';
import style from '../Sass/style.module.scss';

type TProps = {
  props: {
    logged: string | undefined;
  }
};

function Resetpsw({ props }: TProps) {
  const validEmail = new RegExp(`^${process.env.VALIDATION_EMAIL!}$`);
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setisValid] = useState(false);
  const [contMsg, setMsg] = useState<string | null>(null);

  async function sendmailReset(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    if (validEmail.test(String(data.email))) {
      setIsLoading(true);

      const res = await api2.post('/solicitation_reset_psw_user', {
        email: data.email,
      }).catch(({ response }) => response);

      if (res.data.status === 200) {
        setMsg(res.email);
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
        <h1 className={ style.title_resetpsw }>Recuperar senha</h1>
        <form onSubmit={ sendmailReset }>
          { contMsg === null ? (
            <Input
              id="email"
              type="email"
              name="email"
              placeHolder="E-mail"
              autoComplete="email"
              msgError={ isValid ? 'Email inválido ou não cadastrado!' : 'Email inválido!' }
              isValid={ isValid }
            />
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
            { !props.logged && (
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

Resetpsw.getInitialProps = async ({ req }: any) => ({
  props: { logged: req.cookies?.u_token },
});

export default Resetpsw;
