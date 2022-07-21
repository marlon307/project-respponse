import React from 'react';
import style from './style.module.scss';

const limitsitem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

function CardEditbag() {
  return (
    <ul className={ style.cardedit }>
      { limitsitem.map((value) => (
        <li key={ value }>
          <button type="button">{ value }</button>
        </li>
      )) }
    </ul>
  );
}

export default CardEditbag;
