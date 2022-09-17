import React, { ChangeEvent, useState } from 'react';
import style from './style.module.scss';
import type { PInputText } from './type';

function Input({
  id, type, name, placeHolder, autoComplete, dValue,
  msgError, isValid, max, format, disabled,
}: PInputText) {
  const validEmail = new RegExp(`^${process.env.VALIDATION_EMAIL!}$`);
  const validPsw = new RegExp(`^${process.env.VALIDATION_PSW!}$`, 'gm');
  const [statusValid, setSatusValid] = useState(false);

  function validInput({ target }: ChangeEvent<HTMLInputElement>) {
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

    if (validates.test(target.value)) {
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
        maxLength={ max }
        // pattern={ patt }
        defaultValue={ dValue }
        data-format={ format }
        onBlur={ validInput }
        disabled={ disabled }
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
};

export default Input;
