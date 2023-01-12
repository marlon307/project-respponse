import React, { memo } from 'react';
import style from './style.module.scss';

interface Props extends ITAddress {
  removable?: boolean;
  execFunction?: () => void;
}

function CardAdderess({
  name_delivery: namedest = 'Clique aqui ( 👇 ) para selecionar o endereço.', city = '---', district = '---', number_home: number = '---', state = '---', street = '---', zipcode = '---', complement = '---', execFunction, removable = false,
}: Props) {
  return (
    <div className={ style.cardaddress }>
      <h3 title="Entregar para">{ namedest }</h3>
      <div>
        <span title={ `Logradouro: ${street}` } className={ style.line }>
          <p>
            Rua:
            { ' ' }
            { street }
          </p>
        </span>
        <span title={ `N°: ${number}` } className={ style.line }>
          <p>
            N°:
            { ' ' }
            { number }
          </p>
        </span>
      </div>
      <span title={ `Bairro: ${district}` } className={ style.line }>
        <p>
          Bairro:
          { ' ' }
          { district }
        </p>
      </span>
      <div>
        <span title={ `Estado: ${state}` } className={ style.line }>
          <p>
            UF:
            { ' ' }
            { state }
          </p>
        </span>
        <span title={ `Cidade: ${city}` } className={ style.line }>
          <p>
            Cidade:
            { ' ' }
            { city }
          </p>
        </span>
      </div>
      <div>
        <span title={ `CEP: ${zipcode}` } className={ style.line }>
          <p>
            CEP:
            { ' ' }
            { zipcode }
          </p>
        </span>
        <span title={ `Complemento: ${complement}` } className={ style.line }>
          <p>
            Comp.:
            { ' ' }
            { complement }
          </p>
        </span>
      </div>
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

export default memo(CardAdderess);
