import React from 'react';
import style from './styles/styleAccount.module.scss';
import Input from '../components/ComponentsForm/Input';
import { InputRadio } from '../components/ComponentsForm';

function usercfg() {
  return (
    <section className={ style.section }>
      <div className={ style.contaienrsection }>
        <div className="inputs">
          <form>
            <h3>Informações básicas</h3>
            <Input id="name" type="name" name="name" placeHolder="Nome" />
            <Input id="email" type="email" name="email" placeHolder="E-mail" />
            <Input id="psw" type="password" name="psw" placeHolder="Senha" />
            <Input id="date" type="date" name="date" placeHolder="Data" />
            <Input id="doc" type="doc" name="doc" placeHolder="CPF" />
            <div className={ style.genere }>
              <span>Sexo</span>
              <div>
                <InputRadio id="men" name="Masculino" family="grnere" />
                <InputRadio id="female" name="Femenino" family="grnere" />
                <InputRadio id="undefined" name="Não informar" family="grnere" />
              </div>
            </div>
            <div className={ style.contact }>
              <span>Contato</span>
              <Input id="tel" type="tel" name="tel" placeHolder="Telefone" />
              <Input id="cel" type="tel" name="cel" placeHolder="Telefone" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default usercfg;
