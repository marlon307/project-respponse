import React from 'react';
import Svg from '../../../assets/Svg';
import style from './style.module.scss';

export interface PCardPay {
  name: string;
  cardValidate: string;
  endNumber: string;
  flag: string;
  removable?: boolean;
}

const CardPay = function CardPay({
  name, cardValidate, endNumber, flag, removable,
}: PCardPay) {
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
        { removable && (
          <div className="action" title="Excluir Cartão">
            <Svg icoName="trash" />
          </div>
        ) }
      </div>
    </div>
  );
};

export default CardPay;
