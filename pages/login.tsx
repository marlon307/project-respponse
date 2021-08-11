import React from 'react';
import Input from '../components/ComponentsForm/Input';
import style from './styles/styleLogin.module.scss';

function login() {
  return (
    <div className={ style.contlogin }>
      <form>
        <Input id="email" type="email" name="email" placeholder="E-mail" />
        <Input id="psw" type="password" name="psw" placeholder="Senha" />
      </form>
    </div>
  );
}

export default login;
