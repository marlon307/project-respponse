import React from 'react';
import style from './styleInput.module.scss';

type PInputRadio = {
  name: string;
  id: string;
  family: string;
}

function InputRadio({ name, id, family }: PInputRadio) {
  return (
    <div className={ style.inputRadio }>
      <label htmlFor={ id }>
        <input id={ id } type="radio" name={ family } />
        <span>{ name }</span>
      </label>
    </div>
  );
}

export default InputRadio;
