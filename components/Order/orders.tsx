import React, { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { MinCardOrder } from '../Cards';
import style from './style.module.scss';
import ContentModal from '../Modal/ContentModal';
import Loading from '../Loading';
import type { ReduxUser } from '../../types/typesUserRedux';

const OrderId = dynamic(
  () => import('.'),
  { loading: () => <Loading /> },
);

function Index() {
  const { logged } = useSelector(({ user }: ReduxUser) => user);
  const router = useRouter();

  useEffect(() => {
    if (!logged) {
      router.push('/');
    }
  }, [logged]);

  const [openModalOrder, setOpenModalOrder] = useState(false);

  const openOrder = useCallback(() => {
    setOpenModalOrder(true);
  }, []);

  return (
    <section className={ style.section }>
      <div className={ style.table }>
        <div className={ style.toptable }>
          <h4>Numero do pedido</h4>
          <h4>Data</h4>
          <h4>Status</h4>
        </div>
        <div className={ style.bodytable }>
          <MinCardOrder
            idOrder="00003"
            openOrderId={ openOrder }
            date="01/08/2021"
            status="Pag. Aprovado"
          />
          <MinCardOrder
            idOrder="00002"
            openOrderId={ openOrder }
            date="06/08/2021"
            status="Enviado"
          />
          <MinCardOrder
            idOrder="00001"
            openOrderId={ openOrder }
            date="01/08/2021"
            status="Entregue"
          />
        </div>
      </div>
      <ContentModal
        isOpen={ openModalOrder }
        openModal={ setOpenModalOrder }
      >
        { openModalOrder && <OrderId /> }
      </ContentModal>
    </section>
  );
}

export default Index;
