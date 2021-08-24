import React from 'react';

type Props = {
  branch: string;
}

function FBranch({ branch }: Props) {
  return (
    <label htmlFor={ branch }>
      <input type="checkbox" name="filter" id={ branch } />
      <div>
        { branch }
      </div>
    </label>
  );
}

export default FBranch;
