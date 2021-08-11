import React from 'react';
import Link from 'next/link';
import Input from '../components/ComponentsForm/Input';
import style from './styles/styleLogin.module.scss';

function login() {
  return (
    <div className={ style.contlogin }>
      <h1>Login</h1>
      <form>
        <Input id="email" type="email" name="email" placeholder="E-mail" />
        <Input id="psw" type="password" name="psw" placeholder="Senha" />
        <Link href="/resetpsw">Esqueceu a senha?</Link>
        <div className={ style.action }>
          <label htmlFor="remember">
            <input id="remember" type="checkbox" />
            { ' ' }
            Lembrar meus dados.
          </label>
          <button type="button">Entrar</button>
        </div>
        <Link href="/register">Criar conta</Link>
      </form>
    </div>
  );
}

export default login;
