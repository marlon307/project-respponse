import React, { memo } from 'react';
import style from './style.module.scss';

type PFSize = {
  size: string;
  execFunction?: React.MouseEventHandler<HTMLInputElement>;
};

function FSize({ size, execFunction }: PFSize) {
  return (
    <label htmlFor={ size } className={ style.itemfilter }>
      <input
        type="checkbox"
        name="filter"
        id={ size }
        onClick={ execFunction }
      />
      <div className={ style.filtername }>
        { size }
      </div>
    </label>
  );
}

FSize.defaultProps = {
  execFunction: undefined,
};

export default memo(FSize);
