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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 8.94C20.9896 8.84813 20.9695 8.75763 20.94 8.67V8.58C20.8919 8.47718 20.8278 8.38267 20.75 8.3L14.75 2.3C14.6673 2.22222 14.5728 2.15808 14.47 2.11C14.4402 2.10576 14.4099 2.10576 14.38 2.11C14.2784 2.05174 14.1662 2.01434 14.05 2H10C9.20435 2 8.44129 2.31607 7.87868 2.87868C7.31607 3.44129 7 4.20435 7 5V6H6C5.20435 6 4.44129 6.31607 3.87868 6.87868C3.31607 7.44129 3 8.20435 3 9V19C3 19.7956 3.31607 20.5587 3.87868 21.1213C4.44129 21.6839 5.20435 22 6 22H14C14.7956 22 15.5587 21.6839 16.1213 21.1213C16.6839 20.5587 17 19.7956 17 19V18H18C18.7956 18 19.5587 17.6839 20.1213 17.1213C20.6839 16.5587 21 15.7956 21 15V9C21 9 21 9 21 8.94ZM15 5.41L17.59 8H16C15.7348 8 15.4804 7.89464 15.2929 7.70711C15.1054 7.51957 15 7.26522 15 7V5.41ZM15 19C15 19.2652 14.8946 19.5196 14.7071 19.7071C14.5196 19.8946 14.2652 20 14 20H6C5.73478 20 5.48043 19.8946 5.29289 19.7071C5.10536 19.5196 5 19.2652 5 19V9C5 8.73478 5.10536 8.48043 5.29289 8.29289C5.48043 8.10536 5.73478 8 6 8H7V15C7 15.7956 7.31607 16.5587 7.87868 17.1213C8.44129 17.6839 9.20435 18 10 18H15V19ZM19 15C19 15.2652 18.8946 15.5196 18.7071 15.7071C18.5196 15.8946 18.2652 16 18 16H10C9.73478 16 9.48043 15.8946 9.29289 15.7071C9.10536 15.5196 9 15.2652 9 15V5C9 4.73478 9.10536 4.48043 9.29289 4.29289C9.48043 4.10536 9.73478 4 10 4H13V7C13 7.79565 13.3161 8.55871 13.8787 9.12132C14.4413 9.68393 15.2044 10 16 10H19V15Z" />
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
  );
}

export default OrderId;
