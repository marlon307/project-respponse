import React, { useState } from 'react';
import cx from 'classnames';
import Input from '../components/ComponentsForm/Input';
import style from './styles/styleLogin.module.scss';

function login() {
  const [sectionTab, setSectionTab] = useState(true);

  function tabSectionLogin(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setSectionTab(true);
  }

  function tabSectionRegister(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setSectionTab(false);
  }

  return (
    <section className={ style.contlogin }>
      <div className={ style.sectiontab }>
        <a
          href="/login-register"
          aria-label="Login"
          onClick={ tabSectionLogin }
          className={ cx(style.section, { [style.active]: sectionTab }) }
        >
          <h1>Entrar</h1>
        </a>
        <a
          href="/login-register"
          aria-label="Registre-se"
          onClick={ tabSectionRegister }
          className={ cx(style.section, { [style.active]: !sectionTab }) }
        >
          <h1>Registre-se</h1>
        </a>
      </div>
      <form className={ cx(style.tab, { [style.active]: sectionTab }) }>
        <div className="inputs">
          <Input
            id="lemail"
            type="email"
            name="lemail"
            placeHolder="E-mail"
            autoComplete="email"
          />
          <Input
            id="lpsw"
            type="password"
            name="lpsw"
            placeHolder="Senha"
            autoComplete="current-password"
          />
        </div>
        <div className={ style.action }>
          <label htmlFor="remember">
            <input id="remember" type="checkbox" />
            { ' ' }
            Lembrar meus dados.
          </label>
          <a
            href="/resetpsw"
            className="link"
            target="_blank"
            aria-label="Esqueceu a senha?"
          >
            Esqueceu a senha?
          </a>
        </div>
        <div className={ style.action }>
          <button type="button">Entrar</button>
        </div>
      </form>
      <form className={ cx(style.tab, { [style.active]: !sectionTab }) }>
        <div className="inputs">
          <Input
            id="rname"
            type="name"
            name="rname"
            placeHolder="Nome Sobrenome"
            autoComplete="name"
          />
          <Input
            id="remail"
            type="email"
            name="remail"
            placeHolder="E-mail"
            autoComplete="email"
          />
          <Input
            id="rpsw"
            type="password"
            name="rpsw"
            placeHolder="Senha"
          />
        </div>
        <div className={ style.action }>
          <button type="button">Criar</button>
        </div>
      </form>
    </section>
  );
}

export default login;
