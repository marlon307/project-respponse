import React, { use } from 'react';
import Link from 'next/link';
import { api2 } from 'service/api';
import { SmallCard } from '../Cards';
import style from './style.module.scss';
import ClipBoard from '../Buttons/ClipBoard';

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

interface Props {
  orderid: number;
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
              <b>Pagamento:</b>
              { ' ' }
              { orderId.payment }
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
            <span>
              { orderId?.address?.name_delivery }
            </span>
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
              { orderId.carrier?.code ? <Link href="https://www2.correios.com.br/sistemas/rastreamento/default.cfm" target="_blank" rel="noopener noreferrer">{ orderId.carrier?.code }</Link>
                : <span>Código indisponível no momento.</span> }
              <ClipBoard text={ orderId.carrier?.code || '' } />
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
