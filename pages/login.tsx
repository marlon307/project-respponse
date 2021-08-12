import React from 'react';
import Link from 'next/link';
import Input from '../components/ComponentsForm/Input';
import style from './styles/styleLogin.module.scss';

function login() {
  return (
    <div className={ style.contlogin }>
      <h1>Entrar</h1>
      <form>
        <div className="inputs">
          <Input id="email" type="email" name="email" placeholder="E-mail" />
          <Input id="psw" type="password" name="psw" placeholder="Senha" />
        </div>
        <div className={ style.action }>
          <label htmlFor="remember">
            <input id="remember" type="checkbox" />
            { ' ' }
            Lembrar meus dados.
          </label>
          <Link href="/resetpsw">Esqueceu a senha?</Link>
        </div>
        <div className={ style.action }>
          <Link href="/register">Criar conta</Link>
          <button type="button">Entrar</button>
        </div>
      </form>
    </div>
  );
}

export default login;
