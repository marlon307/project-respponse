import React, { use } from 'react';
import { SmallCard } from '../Cards';
import { api2 } from '../../service/api';
import type { Props, StateOrder } from './type';
import style from './style.module.scss';

async function getOrderId(orderid: number): Promise<StateOrder> {
  const { data } = await api2.get(`/order/${orderid}`);

  data.order.date_order = new Date(data.order.date_order)
    .toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'UTC',
    });

  return data.order;
}

function OrderId({ orderid }: Props) {
  const orderId = use(getOrderId(orderid));

  return (
    <div className={ style.order }>
      <div className={ style.content_order }>
        <div className={ style.topline }>
          <div>
            <span>
              <b>Número do pedido:</b>
              { ' #' }
              { orderId?.id?.toString().padStart(6, '0') }
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
            <span>
              { orderId.date_order }
            </span>
          </span>
        </div>
        <div className={ style.status }>
          <h2>Status do Pedido</h2>
          <div className={ style.progressbar }>
            <div data-status={ orderId.status_id }>
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
            <span>Entregar para Nome da Silva</span>
            <span>
              Casa
              { ' - ' }
              { orderId?.address?.road }
              { ', ' }
              { orderId?.address?.number_home }
              { ' - ' }
              { orderId?.address?.district }
            </span>
            <span>
              { orderId?.address?.city }
              { ', ' }
              { orderId?.address?.uf }
              { ' - ' }
              { orderId?.address?.zipcode }
            </span>
          </div>
          <div>
            <h3>{ orderId.carrier?.name_carrier }</h3>
            <span className={ style.shippingcompany }>
              { orderId.carrier?.code ? <a href="https://www2.correios.com.br/sistemas/rastreamento/default.cfm" target="_blank" rel="noopener noreferrer">{ orderId.carrier?.code }</a>
                : <span>Código indisponível no momento.</span> }
              <button
                type="button"
                onClick={ () => navigator.clipboard.writeText(orderId.carrier?.code || '') }
                aria-label="Copiar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 9v-.4a1 1 0 0 0-.3-.3l-6-6-.2-.2h-.1A.9.9 0 0 0 14 2H10a3 3 0 0 0-3 3v1H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1h1a3 3 0 0 0 3-3V9Zm-6-3.6L17.6 8H16a1 1 0 0 1-1-1V5.4ZM15 19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1v7a3 3 0 0 0 3 3h5v1Zm4-4a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3v3a3 3 0 0 0 3 3h3v5Z" fill="#333" />
                </svg>
              </button>
            </span>
          </div>
        </div>
        <div className={ style.orderitems }>
          <ul>
            { orderId.list_products?.map((object) => (
              <li key={ `${object.id}${object.color}${object.size}` }>
                <SmallCard
                  removable={ false }
                  objectID={ object }
                />
              </li>
            )) }
          </ul>
        </div>
        <div className={ style.footerTotal }>
          <div>
            <span>Total Dos produtos</span>
            <span>
              { orderId.value_order?.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }) }
            </span>
          </div>
          <div>
            <span>Frete</span>
            <span>
              { orderId.carrier?.delivery_value.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }) }
            </span>
          </div>
          <div>
            <span>Descontos</span>
            <span>R$ 0,00</span>
          </div>
          <div>
            <span>Total</span>
            <span>
              { (orderId.value_order + orderId.carrier.delivery_value)?.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }) }
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderId;
