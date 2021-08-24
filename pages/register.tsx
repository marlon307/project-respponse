import React from 'react';
import Link from 'next/link';
import Input from '../components/ComponentsForm/Input';
import style from './styles/styleLogin.module.scss';

function register() {
  return (
    <section className={ style.contlogin }>
      <h1>Registre-se</h1>
      <form>
        <div className="inputs">
          <Input id="text" type="name" name="name" placeholder="Nome Sobrenome" />
          <Input id="email" type="email" name="email" placeholder="E-mail" />
          <Input id="psw" type="password" name="psw" placeholder="Senha" />
        </div>
        <div className={ style.action }>
          <Link href="/login">Fazer Login</Link>
          <button type="button">Criar</button>
        </div>
      </form>
    </section>
  );
}

export default register;
