import React from 'react';
import style from './style.module.scss';
import type { PInputRadio } from './type';

function InputRadio({
  iId, name, family, iValue, checked,
}: PInputRadio) {
  return (
    <div className={ style.inputRadio }>
      <label htmlFor={ iId }>
        <input
          id={ iId }
          type="radio"
          name={ family }
          value={ iValue }
          defaultChecked={ checked }
        />
        <span>{ name }</span>
      </label>
    </div>
  );
}

export default InputRadio;
