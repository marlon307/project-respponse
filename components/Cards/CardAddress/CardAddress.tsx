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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6H16V5C16 4.20435 15.6839 3.44129 15.1213 2.87868C14.5587 2.31607 13.7956 2 13 2H11C10.2044 2 9.44129 2.31607 8.87868 2.87868C8.31607 3.44129 8 4.20435 8 5V6H4C3.73478 6 3.48043 6.10536 3.29289 6.29289C3.10536 6.48043 3 6.73478 3 7C3 7.26522 3.10536 7.51957 3.29289 7.70711C3.48043 7.89464 3.73478 8 4 8H5V19C5 19.7956 5.31607 20.5587 5.87868 21.1213C6.44129 21.6839 7.20435 22 8 22H16C16.7956 22 17.5587 21.6839 18.1213 21.1213C18.6839 20.5587 19 19.7956 19 19V8H20C20.2652 8 20.5196 7.89464 20.7071 7.70711C20.8946 7.51957 21 7.26522 21 7C21 6.73478 20.8946 6.48043 20.7071 6.29289C20.5196 6.10536 20.2652 6 20 6ZM10 5C10 4.73478 10.1054 4.48043 10.2929 4.29289C10.4804 4.10536 10.7348 4 11 4H13C13.2652 4 13.5196 4.10536 13.7071 4.29289C13.8946 4.48043 14 4.73478 14 5V6H10V5ZM17 19C17 19.2652 16.8946 19.5196 16.7071 19.7071C16.5196 19.8946 16.2652 20 16 20H8C7.73478 20 7.48043 19.8946 7.29289 19.7071C7.10536 19.5196 7 19.2652 7 19V8H17V19Z" />
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
