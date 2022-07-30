import React, { useState } from 'react';
import style from './style.module.scss';
import type { PInputText } from './type';

function Input({
  id, type, name, placeHolder, autoComplete, inputValue, ivalue,
  msgError, disabled, isValid, max, patt, format,
}: PInputText) {
  const validEmail = new RegExp(`^${process.env.VALIDATION_EMAIL!}$`);
  const validPsw = new RegExp(`^${process.env.VALIDATION_PSW!}$`, 'gm');
  const [statusValid, setSatusValid] = useState(false);

  function handleChange({ target }: any) {
    inputValue!(target);
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
    <label className={ style.input } htmlFor={ id } data-error={ statusValid || isValid }>
      <input
        id={ id }
        type={ type }
        name={ name }
        placeholder={ placeHolder }
        autoComplete={ autoComplete }
        onChange={ handleChange }
        onBlur={ validInput }
        value={ ivalue }
        disabled={ inputValue === undefined || disabled }
        maxLength={ max }
        pattern={ patt }
        data-format={ format }
      />
      <span
        className={ style.ph }
        title={ statusValid || isValid ? msgError : placeHolder }
      >
        { statusValid || isValid ? msgError : placeHolder }
      </span>
    </label>
  );
}

Input.defaultProps = {
  autoComplete: 'off',
  ivalue: '',
};

export default Input;
