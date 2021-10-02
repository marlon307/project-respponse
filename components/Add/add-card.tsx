import React, { useState, useCallback } from 'react';
import Svg from '../../assets/Svg';
import BtnAdd from '../Buttons/BtnAdd';
import { Input } from '../ComponentsForm';
import style from './style.module.scss';

function addcard() {
  const [addCardState, setAddCardState] = useState({
    namecard: '',
    cardvalidate: '',
    name: '',
    codev: '',
  });

  const hadleChange = useCallback((target) => {
    const { name, value } = target;
    setAddCardState({
      ...addCardState,
      [name]: value,
    });
  }, [addCardState]);

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
            placeHolder="Nome do cartão de credito"
            autoComplete="cc-name"
            ivalue=""
            inputValue={ hadleChange }
          />
          <Input
            id="cardvalidate"
            type="text"
            name="cardvalidate"
            placeHolder="Data de validade"
            autoComplete="cc-exp"
            ivalue=""
            inputValue={ hadleChange }
          />
          <Input
            id="numbercard"
            type="text"
            name="numbercard"
            placeHolder="Numero do cartão"
            autoComplete="cc-number"
            ivalue=""
            inputValue={ hadleChange }
          />
          <Input
            id="codev"
            type="text"
            name="codev"
            placeHolder="Codigo de segurança"
            autoComplete="off"
            ivalue=""
            inputValue={ hadleChange }
          />
        </div>
        <BtnAdd eventBtn={ () => { } } />
      </form>
    </section>
  );
}

export default addcard;
