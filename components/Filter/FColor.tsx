import React from 'react';

type Props = {
  cName: string;
  color: string;
}

function FColor({ cName = 'Color Name', color }: Props) {
  return (
    <label htmlFor={ cName }>
      <input type="checkbox" name="filter" id={ cName } />
      <div>
        { cName }
        <span style={ { backgroundColor: `${color}` } } />
      </div>
    </label>
  );
}

export default FColor;
