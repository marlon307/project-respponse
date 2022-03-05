import React, { memo } from 'react';
import style from './style.module.scss';

type PBSearch = {
  branch: string;
}

function FBranch({ branch }: PBSearch) {
  return (
    <label htmlFor={ branch } className={ style.itemfilter }>
      <input type="checkbox" name="filter" id={ branch } />
      <div className={ style.filtername }>
        { branch }
      </div>
    </label>
  );
}

export default memo(FBranch);
