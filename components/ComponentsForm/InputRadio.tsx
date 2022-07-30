import React, { ChangeEvent } from 'react';
import style from './style.module.scss';
import type { PInputRadio } from './type';

function InputRadio({
  iId, name, family, iValue, execFunction, checked,
}: PInputRadio) {
  function handleClick({ target }: ChangeEvent<HTMLInputElement> | any) {
    execFunction!(target);
  }

  return (
    <div className={ style.inputRadio }>
      <label htmlFor={ iId }>
        <input
          id={ iId }
          type="radio"
          name={ family }
          value={ iValue }
          onClick={ handleClick }
          defaultChecked={ checked }
        />
        <span>{ name }</span>
      </label>
    </div>
  );
}

export default InputRadio;
