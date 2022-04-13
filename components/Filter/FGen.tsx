import React, { memo } from 'react';
import style from './style.module.scss';

type PGen = {
  gen: string;
  execFunction?: React.MouseEventHandler<HTMLInputElement>;
};

function FGen({ gen, execFunction }: PGen) {
  return (
    <label htmlFor={ gen } className={ style.itemfilter }>
      <input
        type="checkbox"
        name="gen"
        id={ gen }
        value={ gen }
        onClick={ execFunction }
      />
      <div className={ style.filtername }>
        { gen }
      </div>
    </label>
  );
}

FGen.defaultProps = {
  execFunction: undefined,
};

export default memo(FGen);
