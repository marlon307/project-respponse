import React from 'react';
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

function Qtd({ quantityProduct, execFunction }: TProdpQtd) {
  const maxLimit = 50;

  function qtdDecrement() {
    if (quantityProduct > 1) {
      execFunction(quantityProduct - 1);
    }
  }

  function qtdIncrement() {
    if (quantityProduct < maxLimit) {
      execFunction(quantityProduct + 1);
    }
  }

  function changQtd({ target }: TQtdChange) {
    const { value } = target;
    const convertValue = Number(value);
    if (convertValue > 0 && convertValue < maxLimit) {
      execFunction(convertValue);
    }
  }

  // useEffect(() => {
  //   execFunction(quantityProduct);
  // }, [quantityProduct]);

  return (
    <div className={ style.qtd }>
      <button type="button" onClick={ qtdDecrement }>-</button>
      <input type="text" onChange={ changQtd } value={ quantityProduct } min={ 1 } />
      <button type="button" onClick={ qtdIncrement }>+</button>
    </div>
  );
}

export default Qtd;
