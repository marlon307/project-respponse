import React from 'react';
import style from './style.module.scss';
import type { PropsRadio } from './type';

function InputRadio({
  iId, name, family, iValue, checked, execFunction,
}: PropsRadio) {
  return (
    <div className={ style.inputRadio }>
      <label htmlFor={ iId }>
        <input
          id={ iId }
          type="radio"
          name={ family }
          value={ iValue }
          defaultChecked={ checked }
          onClick={ execFunction }
        />
        <span>{ name }</span>
      </label>
    </div>
  );
}

export default InputRadio;
