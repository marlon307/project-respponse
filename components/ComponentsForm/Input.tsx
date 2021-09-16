import React from 'react';
import style from './styleInput.module.scss';

export interface Props {
  id: string;
  type: string;
  name: string;
  placeHolder: string;
  autoComplete?: string;
}

function Input({
  id, type, name, placeHolder, autoComplete,
}: Props) {
  return (
    <label
      className={ style.input }
      htmlFor={ id }
    >
      <input
        id={ id }
        type={ type }
        name={ name }
        placeholder={ placeHolder }
        autoComplete={ autoComplete }
      />
      <span>{ placeHolder }</span>
    </label>
  );
}

export default Input;
