import React, { useState, useCallback } from 'react';
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
  const [inputValue, setInputValue] = useState('');

  const handleChange = useCallback(({ target }) => {
    const { value } = target;
    setInputValue(value);
  }, []);

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
        onChange={ handleChange }
        value={ inputValue }
      />
      <span>{ placeHolder }</span>
    </label>
  );
}

export default Input;
