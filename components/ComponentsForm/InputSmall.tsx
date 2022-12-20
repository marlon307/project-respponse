import React from 'react';
import type { Props } from './type';
import style from './style.module.scss';

function InputSmall({ ...props }: Props) {
  return (
    <div className={ style.small_input }>
      <span>{ props.title }</span>
      <input { ...props } />
    </div>
  );
}

export default InputSmall;
