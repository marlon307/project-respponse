import React from 'react';
import style from './style.module.scss';

function orderId() {
  return (
    <div className={ style.order }>
      <div className={ style.topline }>
        <div>
          <span>
            <b>Numero do pedido:</b>
            { ' ' }
            000001
          </span>
          <span>
            <b>Forma de pagamento:</b>
            { ' ' }
            Pix
          </span>
        </div>
        <span>
          <b>Data:</b>
          { ' ' }
          01/08/2021
        </span>
      </div>
      <div className={ style.status }>
        <h2>Status do Pedido</h2>
        <div className={ style.progressbar }>
          <div data-status="20">
            <span title="Pedido Realizado" aria-label="Pedido Realizado" />
            <span title="Pagamento Aprovado" aria-label="Pagamento Aprovado" />
            <span title="NF-e Disponivel" aria-label="NF-e Disponivel" />
            <span title="Em Transporte" aria-label="Em Transporte" />
            <span title="Pedido Entregue" aria-label="Pedido Entregue" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default orderId;
