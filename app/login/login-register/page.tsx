'use client';

import React, { FormEvent, useState } from 'react';
// import { useRouter } from 'next/navigation';
import BtnIco from '../../../components/Buttons/BtnIco';
import { Input } from '../../../components/ComponentsForm';
import { api2 } from '../../../service/api';
import useLogin, { loginUser } from '../../../hooks/useLogin';
import style from '../../../Sass/style.module.scss';

function Login() {
  const validEmail = new RegExp(`^${process.env.VALIDATION_EMAIL!}$`);
  const validPsw = new RegExp(`^${process.env.VALIDATION_PSW!}$`, 'gm');
  const { mutate } = useLogin();
  const [sectionTab, setSectionTab] = useState(0);
  const [isValidLogin, setisValidLogin] = useState(false);
  const [isValidRegister, setisValidRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistred, setisRegistered] = useState<string | null>(null);

  // Functions Login
  const clickLogin = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    if (validEmail.test(String(data.username))
      && validPsw.test(String(data.password)) && isLoading === false) {
      setIsLoading(true);
      const { status } = await loginUser(formData, true);

      if (status === 200) {
        mutate();
        // redirect('/');
      } else {
        setisValidLogin(true);
      }
    }
    setIsLoading(false);
  };

  const clickRegister = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    if (validEmail.test(String(data.email))
      && validPsw.test(String(data.password)) && isLoading === false) {
      setIsLoading(true);

      const res = await api2.post('/createuser', formData)
        .catch(({ response }) => response);

      if (res.data.status === 201) {
        setisRegistered(String(data.email));
      } else {
        setisValidRegister(true);
      }
      setIsLoading(false);
    }
  };

  return (
    <section className={ style.contlogin }>
      <div className={ style.sectiontab }>
        <button
          className={ style.tablog }
          aria-label="Login"
          aria-hidden={ !(sectionTab === 0) }
          type="button"
          onClick={ () => setSectionTab(0) }
        >
          <h1>Entrar</h1>
        </button>
        <button
          className={ style.tablog }
          aria-label="Registre-se"
          aria-hidden={ !(sectionTab === 1) }
          type="button"
          onClick={ () => setSectionTab(1) }
        >
          <h1>Registre-se</h1>
        </button>
      </div>
      <form
        className={ style.tab }
        aria-hidden={ !(sectionTab === 0) }
        onSubmit={ clickLogin }
      >
        <Input
          id="lemail"
          type="email"
          text="Email"
          name="username"
          autoComplete="email"
          placeholder="E-mail"
          msgError="Email inválido!"
          disabled={ isLoading }
          isValid={ isValidLogin }
        />
        <Input
          id="lpsw"
          type="password"
          text="Senha"
          name="password"
          autoComplete="current-password"
          placeholder="Senha"
          msgError="Senha invalida!"
          disabled={ isLoading }
          isValid={ isValidLogin }
        />
        <div className={ style.action }>
          <BtnIco
            textBtn="Entrar"
            icoName="singin"
            actionLiberate={ isLoading }
          />
          <a
            href="/login/resetpsw"
            className="link"
            target="_blank"
            aria-label="Esqueceu a senha?"
          >
            Esqueceu a senha?
          </a>
        </div>
      </form>
      <form
        className={ style.tab }
        aria-hidden={ !(sectionTab === 1) }
        onSubmit={ clickRegister }
      >
        { !isRegistred
          ? (
            <>
              <Input
                id="rname"
                type="name"
                name="name"
                text="Nome"
                autoComplete="name"
                placeholder="Nome Sobrenome"
                msgError="Preencha Nome e Sobrenome"
                disabled={ isLoading }
              />
              <Input
                id="remail"
                type="email"
                name="email"
                text="Email"
                autoComplete="email"
                placeholder="E-mail"
                msgError={ isValidRegister ? 'E-mail já cadastrado!' : 'E-mail inválido!' }
                disabled={ isLoading }
                isValid={ isValidRegister }
              />
              <Input
                id="rpsw"
                type="password"
                name="password"
                text="Senha"
                placeholder="Senha"
                msgError="Deve conter pelo menos um número e uma letra maiúscula e minúscula e pelo menos 8 ou mais caracteres."
                disabled={ isLoading }
              />
              <div className={ style.action }>
                <BtnIco
                  textBtn="Criar Conta"
                  icoName="setRight"
                  actionLiberate={ isLoading }
                />
              </div>
            </>
          ) : (
            <div className={ style.msgregister }>
              Registrado com sucesso.
              <span />
              <p>
                Confirme sua conta atraves do email que enviamos para
                { ' ' }
                <b>
                  <p>{ isRegistred }</p>
                </b>
              </p>
            </div>
          ) }
      </form>
    </section>
  );
}

export default Login;
