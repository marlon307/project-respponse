import React, { memo } from 'react';
import style from './style.module.scss';

type PCtg = {
  ctg: string;
  execFunction?: React.MouseEventHandler<HTMLInputElement>;
};

function FCtg({ ctg, execFunction }: PCtg) {
  return (
    <label htmlFor={ ctg } className={ style.itemfilter }>
      <input
        type="checkbox"
        name="ctg"
        id={ ctg }
        value={ ctg }
        onClick={ execFunction }
      />
      <div className={ style.filtername }>
        { ctg }
      </div>
    </label>
  );
}

FCtg.defaultProps = {
  execFunction: undefined,
};

export default memo(FCtg);
