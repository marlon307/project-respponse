import React from 'react';

type Props = {
  tecid: string;
}

function FTissue({ tecid }: Props) {
  return (
    <label htmlFor={ tecid }>
      <input type="checkbox" name="filter" id={ tecid } />
      <div>
        { tecid }
      </div>
    </label>
  );
}

export default FTissue;
