import React from 'react';
import style from './style.module.scss';

type PFSize = {
  size: string;
}

const FSize = function FSize({ size }: PFSize) {
  return (
    <label htmlFor={ size } className={ style.itemfilter }>
      <input type="checkbox" name="filter" id={ size } />
      <div className={ style.filtername }>
        { size }
      </div>
    </label>
  );
};

export default FSize;
