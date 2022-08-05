import Link from 'next/link';
import React from 'react';
import mockBag from '../../service/mockBag';
import { SmallCard } from '../Cards';
import CustomLink from '../CustomLink';
import style from './style.module.scss';

function OrderId() {
  function copyCode(event: { preventDefault: () => void; }) {
    event.preventDefault();
    // https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
    navigator.clipboard.writeText('QF000000000BR');
  }

  return (
    <div className={ style.order }>
      <div className={ style.content_order }>
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

              <Link href="/" passHref>
                <CustomLink
                  onClick={ copyCode! }
                  ariaLabel="Copiar"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 9v-.4a1 1 0 0 0-.3-.3l-6-6-.2-.2h-.1A.9.9 0 0 0 14 2H10a3 3 0 0 0-3 3v1H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1h1a3 3 0 0 0 3-3V9Zm-6-3.6L17.6 8H16a1 1 0 0 1-1-1V5.4ZM15 19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1v7a3 3 0 0 0 3 3h5v1Zm4-4a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3v3a3 3 0 0 0 3 3h3v5Z" fill="#333" />
                  </svg>
                </CustomLink>
              </Link>
            </span>
          </div>
        </div>
        <div className={ style.orderitems }>
          <ul>
            { mockBag.map((object) => (
              <li key={ object.id }>
                <SmallCard
                  removable={ false }
                  objectID={ object }
                  identifyBag={ object.id + object.color + object.size }
                />
              </li>
            )) }
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
    </div>
  );
}

export default OrderId;
