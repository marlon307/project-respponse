import React, { useState, useCallback } from 'react';
import Svg from '../../assets/Svg';
import BtnAdd from '../Buttons/BtnAdd';
import { Input } from '../ComponentsForm';
import style from './style.module.scss';

function addcard() {
  const [addCardState, setAddCardState] = useState({
    namecard: '',
    numbercard: '',
    cardvalidate: '',
    name: '',
    codev: '',
  });

  const hadleChange = useCallback((target) => {
    const { name, value } = target;
    setAddCardState((state) => ({
      ...state,
      [name]: value,
    }));
  }, []);

  return (
    <section className={ style.sectionadd }>
      <h1>
        <Svg icoName="card" />
        Adicionar Cartão de Crédito
      </h1>
      <form>
        <div className="inputs">
          <Input
            id="namecard"
            type="text"
            name="namecard"
            placeHolder="Nome do cartão de crédito"
            autoComplete="cc-name"
            ivalue={ addCardState.namecard }
            inputValue={ hadleChange }
            msgError="Insira o nome do cartão de crédito."
          />
          <Input
            id="cardvalidate"
            type="text"
            name="cardvalidate"
            placeHolder="Data de validade"
            autoComplete="cc-exp"
            ivalue={ addCardState.cardvalidate }
            inputValue={ hadleChange }
            msgError="Insira a data de vencimento."
          />
          <Input
            id="numbercard"
            type="text"
            name="numbercard"
            placeHolder="Número do cartão"
            autoComplete="cc-number"
            ivalue={ addCardState.numbercard }
            inputValue={ hadleChange }
            msgError="Insira o número."
          />
          <Input
            id="codev"
            type="text"
            name="codev"
            placeHolder="Código de segurança"
            autoComplete="off"
            ivalue={ addCardState.codev }
            inputValue={ hadleChange }
            msgError="Insira o código de segurança (CVV)."
          />
        </div>
        <BtnAdd eventBtn={ () => { } } />
      </form>
    </section>
  );
}

export default addcard;
