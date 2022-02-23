import React, { useState } from 'react';
import cx from 'classnames';
import style from './style.module.scss';
import type { PInputText } from './type';

const validEmail = new RegExp(process.env.VALIDATION_EMAIL!);
const validPsw = new RegExp(process.env.VALIDATION_PSW!);

const Input = function Input({
  id, type, name, placeHolder, autoComplete, inputValue, ivalue, msgError,
}: PInputText) {
  const [statusValid, setSatusValid] = useState(false);

  function handleChange({ target }: any) {
    inputValue(target);
  }

  function validInput() {
    let validates: RegExp = /0/;

    switch (type) {
      case 'email':
        validates = validEmail;
        break;
      case 'password':
        validates = validPsw;
        break;
      default:
        validates = /(?!\s*$)/;
        break;
    }

    if (validates.test(ivalue)) {
      setSatusValid(false);
    } else {
      setSatusValid(true);
    }
  }

  return (
    <label
      className={ cx(style.input, {
        [style.err]: statusValid,
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
        { statusValid ? msgError : placeHolder }
      </span>
    </label>
  );
};

export default Input;
