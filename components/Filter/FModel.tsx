import React, { memo } from 'react';
import style from './style.module.scss';

type PModel = {
  model: string;
  execFunction?: React.MouseEventHandler<HTMLInputElement>;
};

function FModel({ model, execFunction }: PModel) {
  return (
    <label htmlFor={ model } className={ style.itemfilter }>
      <input
        type="checkbox"
        name="filter"
        id={ model }
        onClick={ execFunction }
      />
      <div className={ style.filtername }>
        { model }
      </div>
    </label>
  );
}

FModel.defaultProps = {
  execFunction: undefined,
};

export default memo(FModel);
