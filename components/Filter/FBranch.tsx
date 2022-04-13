import React, { memo } from 'react';
import style from './style.module.scss';

type PBSearch = {
  branch: string;
  execFunction?: React.MouseEventHandler<HTMLInputElement>;
};

function FBranch({ branch, execFunction }: PBSearch) {
  return (
    <label htmlFor={ branch } className={ style.itemfilter }>
      <input
        type="checkbox"
        name="filter"
        id={ branch }
        onClick={ execFunction }
      />
      <div className={ style.filtername }>
        { branch }
      </div>
    </label>
  );
}

FBranch.defaultProps = {
  execFunction: undefined,
};

export default memo(FBranch);
