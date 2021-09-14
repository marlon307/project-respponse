import React from 'react';
import Link from 'next/link';
import Input from '../components/ComponentsForm/Input';
import style from './styles/styleLogin.module.scss';

function resetpsw() {
  return (
    <section className={ style.contlogin }>
      <h1>Recuperar senha</h1>
      <form>
        <div className="inputs">
          <Input id="email" type="email" name="email" placeholder="E-mail" />
        </div>
        <div className={ style.action }>
          <Link href="/login-register">
            <a className="link">
              Fazer Login
            </a>
          </Link>
          <button type="button">Enviar</button>
        </div>
      </form>
    </section>
  );
}

export default resetpsw;
