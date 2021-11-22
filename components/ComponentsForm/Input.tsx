import React, { useState } from 'react';
import cx from 'classnames';
import style from './style.module.scss';

export interface Props {
  id: string;
  type: string;
  name: string;
  placeHolder: string;
  autoComplete?: string;
  ivalue: string;
  inputValue: Function;
  regexValidator?: RegExp;
  msgError?: string;
}

const Input = function Input({
  id, type, name, placeHolder, autoComplete, inputValue, ivalue, regexValidator, msgError,
}: Props) {
  const [statusValid, setSatusValid] = useState(false);

  function handleChange({ target }: any) {
    inputValue(target);
  }

  function validInput() {
    if (regexValidator?.test(ivalue)) {
      setSatusValid(false);
    } else {
      setSatusValid(true);
    }
  }

  return (
    <label
      className={ cx(style.input, {
        [style.err]: regexValidator && statusValid,
      }) }
      htmlFor={ id }
    >
      <input
        id={ id }
        type={ type }
        name={ name }
        placeholder={ placeHolder }
        autoComplete={ autoComplete }
        onChange={ handleChange }
        onBlur={ validInput }
        value={ ivalue }
      />
      <span
        className={ style.ph }
        title={ statusValid ? msgError : placeHolder }
      >
        {
          regexValidator && statusValid
            ? msgError : placeHolder
        }
      </span>
    </label>
  );
};

export default Input;
