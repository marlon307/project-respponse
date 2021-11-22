import React from 'react';
import style from './style.module.scss';

type PCtg = {
  ctg: string;
}

const FCtg = function FCtg({ ctg }: PCtg) {
  return (
    <label htmlFor={ ctg } className={ style.itemfilter }>
      <input type="checkbox" name="filter" id={ ctg } />
      <div className={ style.filtername }>
        { ctg }
      </div>
    </label>
  );
};

export default FCtg;
