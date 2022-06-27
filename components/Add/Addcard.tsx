import React, { useCallback, useState } from 'react';
import BtnAdd from '../Buttons/BtnAdd';
import { Input } from '../ComponentsForm';
import style from './style.module.scss';

function Addcard() {
  const [addCardState, setAddCardState] = useState({
    namecard: '',
    numbercard: '',
    cardvalidate: '',
    name: '',
    codev: '',
  });

  const hadleChange = useCallback((target: { name: string; value: string; }) => {
    const { name, value } = target;
    setAddCardState((state) => ({
      ...state,
      [name]: value,
    }));
  }, []);

  return (
    <section className={ style.sectionadd }>
      <h1>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 15H10C10.2652 15 10.5196 14.8946 10.7071 14.7071C10.8946 14.5196 11 14.2652 11 14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13H7C6.73478 13 6.48043 13.1054 6.29289 13.2929C6.10536 13.4804 6 13.7348 6 14C6 14.2652 6.10536 14.5196 6.29289 14.7071C6.48043 14.8946 6.73478 15 7 15ZM19 5H5C4.20435 5 3.44129 5.31607 2.87868 5.87868C2.31607 6.44129 2 7.20435 2 8V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V8C22 7.20435 21.6839 6.44129 21.1213 5.87868C20.5587 5.31607 19.7956 5 19 5ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V11H20V17ZM20 9H4V8C4 7.73478 4.10536 7.48043 4.29289 7.29289C4.48043 7.10536 4.73478 7 5 7H19C19.2652 7 19.5196 7.10536 19.7071 7.29289C19.8946 7.48043 20 7.73478 20 8V9Z" fill="#333333" />
        </svg>
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

export default Addcard;
