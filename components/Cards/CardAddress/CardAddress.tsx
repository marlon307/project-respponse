import React, { memo } from 'react';
import { TAddress } from '../../../@types/bag';
import style from './style.module.scss';

export interface PCardAdderess {
  removable?: boolean;
  execFunction?: () => void;
  name_delivery?: TAddress['name_delivery'];
  road?: TAddress['road'];
  district?: TAddress['district'];
  number_home?: TAddress['number_home'];
  uf?: TAddress['uf'];
  city?: TAddress['city'];
  cep?: TAddress['cep'];
}

function CardAdderess({
  name_delivery: name, road, district, number_home: number, uf, city,
  cep: zipcode, removable, execFunction,
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
        <button className={ style.delete } title="Excluir Endereço" type="button" onClick={ execFunction }>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20 6h-4V5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H4a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8h1a1 1 0 1 0 0-2ZM10 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4V5Zm7 14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8h10v11Z" />
          </svg>
        </button>
      ) }
    </div>
  );
}

CardAdderess.defaultProps = {
  removable: false,
  execFunction: () => { },
  name_delivery: 'Clique aqui ( 👇 ) para selecionar o endereço.',
  road: '---',
  district: '---',
  number_home: '---',
  uf: '---',
  city: '---',
  cep: '---',
};

export default memo(CardAdderess);
