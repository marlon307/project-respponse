import React from 'react';
import { MinCardOrder } from '../components/Cards';
import style from './styles/styleAccount.module.scss';

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
          <MinCardOrder />
          <MinCardOrder />
          <MinCardOrder />
        </div>
      </div>
    </section>
  );
}

export default order;
