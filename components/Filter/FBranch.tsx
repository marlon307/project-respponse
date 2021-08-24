import React from 'react';
import style from './style.module.scss';

type Props = {
  branch: string;
}

function FBranch({ branch }: Props) {
  return (
    <label htmlFor={ branch }>
      <input type="checkbox" name="filter" id={ branch } />
      <div className={ style.filtername }>
        { branch }
      </div>
    </label>
  );
}

export default FBranch;
