import React from 'react';
import style from './style.module.scss';

type Props = {
  tecid: string;
}

function FTissue({ tecid }: Props) {
  return (
    <label htmlFor={ tecid }>
      <input type="checkbox" name="filter" id={ tecid } />
      <div className={ style.filtername }>
        { tecid }
      </div>
    </label>
  );
}

export default FTissue;
