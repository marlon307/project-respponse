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
          <div className={ style.delete } title="Excluir Cartão">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 15h3a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2ZM19 5H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3Zm1 12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6h16v6Zm0-8H4V8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1Z" fill="#333" />
            </svg>
          </div>
        ) }
      </div>
    </div>
  );
}

CardPay.defaultProps = {
  removable: false,
};

export default memo(CardPay);
