import React from 'react';
import style from './style.module.scss';

function CardEditbag() {
  return (
    <div className={ style.cardedit }>
      <div className={ style.cardedit_content }>
        <h2>Escolha a quantidade.</h2>
        <ul>
          { [...Array(30).keys()].map((value) => (
            <li key={ value }>
              <button type="button">{ value }</button>
            </li>
          )) }
        </ul>
      </div>
    </div>
  );
}

export default CardEditbag;
