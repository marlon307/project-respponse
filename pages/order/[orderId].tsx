import React from 'react';
import Svg from '../../assets/Svg';
import { SmallCard } from '../../components/Cards';
import style from './style.module.scss';

function orderId() {
  function copyCode(event: { preventDefault: () => void; }) {
    event.preventDefault();
    // https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
    navigator.clipboard.writeText('QF000000000BR');
  }

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
          <div data-status="4">
            <span title="Pedido Realizado" aria-label="Pedido Realizado" />
            <span title="Pagamento Aprovado" aria-label="Pagamento Aprovado" />
            <span title="NF-e Disponivel" aria-label="NF-e Disponivel" />
            <span title="Em Transporte" aria-label="Em Transporte" />
            <span title="Pedido Entregue" aria-label="Pedido Entregue" />
          </div>
        </div>
      </div>
      <div className={ style.orderadders }>
        <div>
          <h3>Dados da entrega</h3>
          <span>Rua São Paulo, 000 - Santa Cruz </span>
          <span>Casa</span>
          <span>Valença, MG 00000-000</span>
        </div>
        <div>
          <h3>Correios</h3>
          <span className={ style.shippingcompany }>
            <a href="https://www2.correios.com.br/sistemas/rastreamento/default.cfm" target="_blank" rel="noopener noreferrer">QF000000000BR</a>
            <a
              href="/"
              aria-label="Copiar"
              title="Copiar"
              onClick={ copyCode }
            >
              <Svg icoName="copy" />
            </a>
          </span>
        </div>
      </div>
      <div className={ style.orderitems }>
        <ul>
          <li>
            <SmallCard removable={ false } />
          </li>
          <li>
            <SmallCard removable={ false } />
          </li>
          <li>
            <SmallCard removable={ false } />
          </li>
        </ul>
      </div>
      <div className={ style.footerTotal }>
        <div>
          <span>Total Dos produtos</span>
          <span>R$ 110,99</span>
        </div>
        <div>
          <span>Frete</span>
          <span>R$ 15,00</span>
        </div>
        <div>
          <span>Descontos</span>
          <span>R$ 0,00</span>
        </div>
        <div>
          <span>Total</span>
          <span>R$ 125,99</span>
        </div>
      </div>
    </div>
  );
}

export default orderId;
