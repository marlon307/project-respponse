import React, { memo } from 'react';
import style from './style.module.scss';

type PGen = {
  model: string;
}

const FModel = function FModel({ model }: PGen) {
  return (
    <label htmlFor={ model } className={ style.itemfilter }>
      <input type="checkbox" name="filter" id={ model } />
      <div className={ style.filtername }>
        { model }
      </div>
    </label>
  );
};

export default memo(FModel);
