import React, { useState, useEffect } from 'react';
import style from './style.module.scss';

type TQtdChange = {
  target: {
    value: string;
  }
}

type TProdpQtd = {
  execFunction: Function;
  quantityProduct: number;
}

const Qtd = function Qtd({ quantityProduct, execFunction }: TProdpQtd) {
  const [quantity, setQuantity] = useState(0);
  const maxLimit = 50;

  function qtdDecrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      execFunction({ quantity });
    }
  }

  function qtdIncrement() {
    if (quantity < maxLimit) {
      setQuantity(quantity + 1);
      execFunction({ quantity });
    }
  }

  function changQtd({ target }: TQtdChange) {
    const { value } = target;
    const convertValue = Number(value);
    if (convertValue > 0 && convertValue < maxLimit) {
      setQuantity(convertValue);
      execFunction({ quantity: convertValue });
    }
  }

  useEffect(() => {
    setQuantity(quantityProduct);
  }, [quantityProduct]);

  return (
    <div className={ style.qtd }>
      <button type="button" onClick={ qtdDecrement }>-</button>
      <input type="text" onChange={ changQtd } value={ quantity } min={ 1 } />
      <button type="button" onClick={ qtdIncrement }>+</button>
    </div>
  );
};

export default Qtd;
