import React from 'react';
import { MinCardOrder } from '../Cards';
import style from './style.module.scss';

type TPropsOrders = {
  execFunction: Function
}

function Index({ execFunction }: TPropsOrders) {
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
            openOrderId={ execFunction }
            date="01/08/2021"
            status="Pag. Aprovado"
          />
          <MinCardOrder
            idOrder="00002"
            openOrderId={ execFunction }
            date="06/08/2021"
            status="Enviado"
          />
          <MinCardOrder
            idOrder="00001"
            openOrderId={ execFunction }
            date="01/08/2021"
            status="Entregue"
          />
        </div>
      </div>
    </section>
  );
}

export default Index;
