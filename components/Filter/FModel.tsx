import React, { memo } from 'react';
import style from './style.module.scss';

type PModel = {
  model: string;
};

function FModel({ model }: PModel) {
  return (
    <label htmlFor={ model } className={ style.itemfilter }>
      <input type="checkbox" name="filter" id={ model } />
      <div className={ style.filtername }>
        { model }
      </div>
    </label>
  );
}

export default memo(FModel);
