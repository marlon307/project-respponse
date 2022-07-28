import React, { memo } from 'react';

import style from './style.module.scss';

export type PCardAdderess = {
  name: string;
  road: string;
  district: string;
  number: string;
  uf: string;
  city: string;
  zipcode: string;
  removable?: boolean;
};

function CardAdderess({
  name, road, district, number, uf, city, zipcode, removable,
}: PCardAdderess) {
  return (
    <div className={ style.cardaddress }>
      <h3 title="Entregar para">{ name }</h3>
      <div>
        <span title={ `Rua: ${road}` } className={ style.line }>
          Rua:
          { ' ' }
          { road }
        </span>
        <span title={ `N°: ${number}` } className={ style.line }>
          N°:
          { ' ' }
          { number }
        </span>
      </div>
      <span title={ `Bairro: ${district}` } className={ style.line }>
        Bairro:
        { ' ' }
        { district }
      </span>
      <div>
        <span title={ `Estado: ${uf}` } className={ style.line }>
          UF:
          { ' ' }
          { uf }
        </span>
        <span title={ `Cidade: ${city}` } className={ style.line }>
          Cidade:
          { ' ' }
          { city }
        </span>
      </div>
      <span title={ `CEP: ${zipcode}` } className={ style.line }>
        CEP:
        { ' ' }
        { zipcode }
      </span>
      { removable && (
        <div className={ style.delete } title="Excluir Endereço">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20 6h-4V5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H4a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8h1a1 1 0 1 0 0-2ZM10 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4V5Zm7 14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8h10v11Z" fill="#333" />
          </svg>
        </div>
      ) }
    </div>
  );
}

CardAdderess.defaultProps = {
  removable: false,
};

export default memo(CardAdderess);
