import React from 'react';
import Svg from '../../../assets/Svg';
import style from './styleCardPay.module.scss';

interface Props {
  name: string;
  cardValidate: string;
  endNumber: string;
  flag: string;
}

function CardPay({
  name, cardValidate, endNumber, flag,
}: Props) {
  return (
    <div className={ style.card }>
      <h4 title={ name }>{ name }</h4>
      <div className={ style.infos }>
        <div>
          <p title="Validade do cartão">{ cardValidate }</p>
        </div>
        <div>
          <p title={ `Cartão ${flag}` }>
            { flag }
            { ' ' }
            { endNumber }
          </p>
        </div>
        <div className="delete" title="Excluir Cartão">
          <Svg icoName="trash" />
        </div>
      </div>
    </div>
  );
}

export default CardPay;
