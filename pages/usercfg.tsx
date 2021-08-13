import React from 'react';
import style from './styles/styleAccount.module.scss';
import Input from '../components/ComponentsForm/Input';

function usercfg() {
  return (
    <section className={ style.usercfg }>
      <div className="inputs">
        <form>
          <h3>Informações básicas</h3>
          <Input id="name" type="name" name="name" placeholder="Nome" />
          <Input id="email" type="email" name="email" placeholder="E-mail" />
          <Input id="psw" type="password" name="psw" placeholder="Senha" />
          <Input id="date" type="date" name="date" placeholder="Data" />
          <Input id="doc" type="doc" name="doc" placeholder="CPF" />
          <div className={ style.genere }>
            <span>Sexo</span>
            <div>
              <label htmlFor="men">
                <input id="men" type="radio" name="grnere" />
                <span>Masculino</span>
              </label>
              <label htmlFor="female">
                <input id="female" type="radio" name="grnere" />
                <span>Femenino</span>
              </label>
              <label htmlFor="undefined">
                <input id="undefined" type="radio" name="grnere" />
                <span>Não informar</span>
              </label>
            </div>
          </div>
          <div className={ style.contact }>
            <span>Contato</span>
            <Input id="tel" type="tel" name="tel" placeholder="Telefone" />
            <Input id="cel" type="tel" name="cel" placeholder="Telefone" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default usercfg;
