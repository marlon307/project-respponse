import React from 'react';

type Props = {
  size: string;
}

function FSize({ size }: Props) {
  return (
    <label htmlFor={ size }>
      <input type="checkbox" name="filter" id={ size } />
      <div>
        { size }
      </div>
    </label>
  );
}

export default FSize;
