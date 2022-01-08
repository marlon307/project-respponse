import React, { useState } from 'react';
import cx from 'classnames';
import style from './style.module.scss';
import type { PInputText } from './type';

const Input = function Input({
  id, type, name, placeHolder, autoComplete, inputValue, ivalue, regexValidator, msgError,
}: PInputText) {
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
