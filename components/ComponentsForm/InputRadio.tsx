import React from 'react';
import style from './style.module.scss';

type PInputRadio = {
  name: string;
  id: string;
  family: string;
  execFunction: Function;
}

const InputRadio = function InputRadio({
  name, id, family, execFunction,
}: PInputRadio) {
  function handleClick(idName: string, nameCompany: string) {
    execFunction(idName, nameCompany);
  }

  return (
    <div className={ style.inputRadio }>
      <label htmlFor={ id }>
        <input id={ id } type="radio" name={ family } onClick={ () => handleClick(id, name) } />
        <span>{ name }</span>
      </label>
    </div>
  );
};

export default InputRadio;
