import React from 'react';
import style from './styleInput.module.scss';

interface Props {
  id: string;
  type: string;
  name: string;
  placeholder: string;
}

function Input({
  id, type, name, placeholder,
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
        placeholder={ placeholder }
      />
      <span>{ placeholder }</span>
    </label>
  );
}

export default Input;
