import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SmallCard } from '../Cards';
import CustomLink from '../CustomLink';
import { api2 } from '../../service/api';
import style from './style.module.scss';

interface Props {
  token: string;
  orderid: number;
}

function OrderId({ token, orderid }: Props) {
  const [order, setOrder] = useState({
    id: 0,
    status_id: 0,
    address: {
      road: '',
      number_home: '',
      district: '',
      city: '',
      uf: '',
      zipcode: '',
    },
    list_products: [],
    value_order: 0,
    date_order: '',
    carrier: {
      name_carrier: '',
      code: null,
    },
  });
  function copyCode(event: { preventDefault: () => void; }) {
    event.preventDefault();
    // https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
    navigator.clipboard.writeText('QF000000000BR');
  }

  useEffect(() => {
    async function getOrderId() {
      const { data } = await api2.get(`/order/${orderid}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      data.order.date_order = new Date(data.order.date_order)
        .toLocaleDateString('pt-BR', {
          weekday: 'long',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });

      setOrder(data.order);
    }
    getOrderId();
  }, []);

  return (
    <div className={ style.order }>
      <div className={ style.content_order }>
        <div className={ style.topline }>
          <div>
            <span>
              <b>Numero do pedido:</b>
              { ' ' }
              { order.id }
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
              { order.date_order }
            </span>
          </span>
        </div>
        <div className={ style.status }>
          <h2>Status do Pedido</h2>
          <div className={ style.progressbar }>
            <div data-status={ order.status_id }>
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
              { order?.address?.road }
              { ', ' }
              { order?.address?.number_home }
              { ' - ' }
              { order?.address?.district }
            </span>
            <span>
              { order?.address?.city }
              { ', ' }
              { order?.address?.uf }
              { ' - ' }
              { order?.address?.zipcode }
            </span>
          </div>
          <div>
            <h3>{ order.carrier.name_carrier }</h3>
            <span className={ style.shippingcompany }>
              { order.carrier.code ? <a href="https://www2.correios.com.br/sistemas/rastreamento/default.cfm" target="_blank" rel="noopener noreferrer">{ order.carrier.code }</a>
                : <span>Código indisponível no momento.</span> }
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
            { order.list_products?.map((object: { id: number }) => (
              <li key={ object.id }>
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
            <span>
              { order.value_order?.toLocaleString('pt-br', {
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
