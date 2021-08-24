import React from 'react';
import style from './style.module.scss';

export type Props = {
  cName?: string;
  color: string;
}

function FColor({ cName = 'Color Name', color }: Props) {
  return (
    <label htmlFor={ cName }>
      <input type="checkbox" name="filter" id={ cName } />
      <div className={ style.filtername }>
        { cName }
        <span style={ { backgroundColor: `${color}` } } />
      </div>
    </label>
  );
}

export default FColor;
