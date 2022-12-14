import React, { useState, useCallback } from 'react';
import type { FocusEvent } from 'react';
import type { Props } from './type';
import style from './style.module.scss';

function Input({
  msgError, format = null, isValid = false, ...props
}: Props) {
  const validEmail = new RegExp(`^${process.env.VALIDATION_EMAIL!}$`);
  const validPsw = new RegExp(`^${process.env.VALIDATION_PSW!}$`, 'gm');
  const [statusValid, setSatusValid] = useState(false);

  const validInput = useCallback(({ target }: FocusEvent<HTMLInputElement>) => {
    let validates: RegExp = /0/;

    switch (props.type) {
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
  }, []);

  return (
    <label className={ style.input } htmlFor={ props.id } data-error={ statusValid || isValid }>
      <input
        { ...props }
        onBlur={ validInput }
        data-format={ format }
      />
      <span
        className={ style.ph }
        title={ statusValid || isValid ? msgError : props.placeholder }
      >
        { statusValid || isValid ? msgError : props.placeholder }
      </span>
    </label>
  );
}

export default Input;
