import React from 'react';
import style from './style.module.scss';

type PGen = {
  gen: string;
}

const FGen = function FGen({ gen }: PGen) {
  return (
    <label htmlFor={ gen } className={ style.itemfilter }>
      <input type="checkbox" name="filter" id={ gen } />
      <div className={ style.filtername }>
        { gen }
      </div>
    </label>
  );
};

export default FGen;
