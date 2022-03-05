import React from 'react';
import style from './style.module.scss';
import type { PInputRadio } from './type';

function InputRadio({
  id, name, family, value, execFunction, checked,
}: PInputRadio) {
  function handleClick(idInput: string, price: number) {
    execFunction!(idInput, price);
  }

  return (
    <div className={ style.inputRadio }>
      <label htmlFor={ id }>
        <input
          id={ id }
          type="radio"
          name={ family }
          onClick={ () => handleClick(id, value!) }
          defaultChecked={ checked }
        />
        <span>{ name }</span>
      </label>
    </div>
  );
}

export default InputRadio;
