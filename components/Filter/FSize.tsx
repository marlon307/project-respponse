import React from 'react';
import style from './style.module.scss';

type Props = {
  size: string;
}

function FSize({ size }: Props) {
  return (
    <label htmlFor={ size }>
      <input type="checkbox" name="filter" id={ size } />
      <div className={ style.filtername }>
        { size }
      </div>
    </label>
  );
}

export default FSize;
