import React, { memo } from 'react';
import Svg from '../../../assets/Svg';

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
          <Svg icoName="trash" />
        </div>
      ) }
    </div>
  );
}

CardAdderess.defaultProps = {
  removable: false,
};

export default memo(CardAdderess);
