import React, { useState } from 'react';
import style from './style.module.scss';

type TQtdChange = {
  target: {
    value: string;
  }
}

const Qtd = function Qtd() {
  const [quantity, setQuantity] = useState(1);
  const maxLimit = 50;

  function qtdDecrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function qtdIncrement() {
    if (quantity < maxLimit) {
      setQuantity(quantity + 1);
    }
  }

  function changQtd({ target }: TQtdChange) {
    const { value } = target;
    const convertValue = Number(value);
    if (convertValue > 0 && convertValue < maxLimit) {
      setQuantity(convertValue);
    }
  }

  return (
    <div className={ style.qtd }>
      <button type="button" onClick={ qtdDecrement }>-</button>
      <input type="text" onChange={ changQtd } value={ quantity } min={ 1 } />
      <button type="button" onClick={ qtdIncrement }>+</button>
    </div>
  );
};

export default Qtd;
