import React from 'react';
import style from './style.module.scss';

function CardEditbag() {
  return (
    <div className={ style.cardedit }>
      <h2>Escolha a quantidade.</h2>
      <ul>
        { [...Array(30).keys()].map((value) => (
          <li key={ value }>
            <button type="button">{ value }</button>
          </li>
        )) }
      </ul>
    </div>
  );
}

export default CardEditbag;
