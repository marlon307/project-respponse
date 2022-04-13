import React, { memo } from 'react';
import style from './style.module.scss';

type PFTissue = {
  tecid: string;
  execFunction?: React.MouseEventHandler<HTMLInputElement>;
};

function FTissue({ tecid, execFunction }: PFTissue) {
  return (
    <label htmlFor={ tecid } className={ style.itemfilter }>
      <input
        type="checkbox"
        name="filter"
        value={ tecid }
        id={ tecid }
        onClick={ execFunction }
      />
      <div className={ style.filtername }>
        { tecid }
      </div>
    </label>
  );
}

FTissue.defaultProps = {
  execFunction: undefined,
};

export default memo(FTissue);
