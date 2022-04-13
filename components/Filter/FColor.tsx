import React, { memo } from 'react';
// import { useAppDispatch } from '../../redux/hooks';
import style from './style.module.scss';

export type PFColor = {
  cName: string;
  color: string;
  execFunction?: React.MouseEventHandler<HTMLInputElement>;
};

function FColor({ cName, color, execFunction }: PFColor) {
  return (
    <label htmlFor={ cName } className={ style.itemfilter }>
      <input
        type="checkbox"
        name="filter"
        id={ cName }
        onClick={ execFunction! }
      />
      <div className={ style.filtername }>
        { cName }
        <span style={ { backgroundColor: `${color}` } } />
      </div>
    </label>
  );
}

FColor.defaultProps = {
  execFunction: undefined,
};

export default memo(FColor);
