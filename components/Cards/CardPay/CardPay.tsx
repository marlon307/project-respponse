import React, { memo } from 'react';

import style from './style.module.scss';

export interface PCardPay {
  name: string;
  cardValidate: string;
  endNumber: string;
  flag: string;
  removable?: boolean;
}

function CardPay({
  name, cardValidate, endNumber, flag, removable = false,
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
          <div className={ style.delete } title="Excluir Cartão">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20 6h-4V5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H4a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8h1a1 1 0 1 0 0-2ZM10 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4V5Zm7 14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8h10v11Z" />
            </svg>
          </div>
        ) }
      </div>
    </div>
  );
}

export default memo(CardPay);
