import React from 'react';
import style from './style.module.scss';

export type PFColor = {
  cName?: string;
  color: string;
}

function FColor({ cName = 'Color Name', color }: PFColor) {
  return (
    <label htmlFor={ cName } className={ style.itemfilter }>
      <input type="checkbox" name="filter" id={ cName } />
      <div className={ style.filtername }>
        { cName }
        <span style={ { backgroundColor: `${color}` } } />
      </div>
    </label>
  );
}

export default FColor;
