import React from 'react';
import BtnAdd from '../Buttons/BtnAdd';
import { Input } from '../ComponentsForm';
import style from './style.module.scss';

function Addcard() {
  return (
    <section className={ style.sectionadd }>
      <div className={ style.content }>
        <h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7 15h3a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2ZM19 5H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3Zm1 12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6h16v6Zm0-8H4V8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1Z" />
          </svg>
          Adicionar Cartão de Crédito
        </h1>
        <form>

          <Input
            id="namecard"
            type="text"
            name="namecard"
            placeHolder="Nome do cartão de crédito"
            autoComplete="cc-name"
            msgError="Insira o nome do cartão de crédito."
          />
          <Input
            id="cardvalidate"
            type="text"
            name="cardvalidate"
            placeHolder="Data de validade"
            autoComplete="cc-exp"
            msgError="Insira a data de vencimento."
          />
          <Input
            id="numbercard"
            type="text"
            name="numbercard"
            placeHolder="Número do cartão"
            autoComplete="cc-number"
            msgError="Insira o número."
          />
          <Input
            id="codev"
            type="text"
            name="codev"
            placeHolder="Código de segurança"
            autoComplete="off"
            msgError="Insira o código de segurança (CVV)."
          />
          <BtnAdd eventBtn={ () => { } } />
        </form>
      </div>
    </section>
  );
}

export default Addcard;
