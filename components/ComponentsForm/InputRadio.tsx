import React from 'react';
import style from './style.module.scss';

export type PInputRadio = {
  name: string;
  id: string;
  family: string;
  value?: number;
  execFunction?: Function;
}

const InputRadio = function InputRadio({
  name, id, family, value, execFunction,
}: PInputRadio) {
  function handleClick(idName: string, nameCompany: string, price: number) {
    execFunction!(idName, nameCompany, price);
  }

  return (
    <div className={ style.inputRadio }>
      <label htmlFor={ id }>
        <input
          id={ id }
          type="radio"
          name={ family }
          onClick={ () => handleClick(id, name, value!) }
        />
        <span>{ name }</span>
      </label>
    </div>
  );
};

export default InputRadio;
