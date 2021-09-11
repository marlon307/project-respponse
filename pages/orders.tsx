import React from 'react';
import dynamic from 'next/dynamic';
import { MinCardOrder } from '../components/Cards';
import style from './styles/styleAccount.module.scss';
import ContentModal from '../components/Modal/ContentModal';

const OrderId = dynamic(() => import('./order/[orderId]'));

function order() {
  return (
    <section className={ style.orders }>
      <div className={ style.table }>
        <div className={ style.toptable }>
          <h4>Numero do pedido</h4>
          <h4>Data</h4>
          <h4>Status</h4>
        </div>
        <div className={ style.bodytable }>
          <MinCardOrder idOrder="00003" date="01/08/2021" status="Pag. Aprovado" />
          <MinCardOrder idOrder="00002" date="06/08/2021" status="Enviado" />
          <MinCardOrder idOrder="00001" date="01/08/2021" status="Entregue" />
        </div>
      </div>
      <ContentModal>
        <OrderId />
      </ContentModal>
    </section>
  );
}

export default order;
