import React from 'react';
import style from './style.module.scss';

type PFTissue = {
  tecid: string;
}

const FTissue = function FTissue({ tecid }: PFTissue) {
  return (
    <label htmlFor={ tecid } className={ style.itemfilter }>
      <input type="checkbox" name="filter" id={ tecid } />
      <div className={ style.filtername }>
        { tecid }
      </div>
    </label>
  );
};

export default FTissue;
