import React from 'react';
import Svg from '../../../assets/Svg';
import style from './styleCardAddress.module.scss';

type PCardAdderess = {
  name: string;
  road: string;
  district: string;
  number: string;
  uf: string;
  city: string;
  zipcode: string;
}

function CardAdderess({
  name, road, district, number, uf, city, zipcode,
}: PCardAdderess) {
  return (
    <div className={ style.cardadderess }>
      <h4 title="Entregar para">{ name }</h4>
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
      <div className="delete" title="Excluir Endereço">
        <Svg icoName="trash" />
      </div>
    </div>
  );
}

export default CardAdderess;
