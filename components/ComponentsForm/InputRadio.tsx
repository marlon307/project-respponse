import React from 'react';
import style from './styleInput.module.scss';

interface IProps {
  name: string;
  id: string;
  family: string;
}

function inputRadio({ name, id, family }: IProps) {
  return (
    <div className={ style.inputRadio }>
      <label htmlFor={ id }>
        <input id={ id } type="radio" name={ family } />
        <span>{ name }</span>
      </label>
    </div>
  );
}

export default inputRadio;
