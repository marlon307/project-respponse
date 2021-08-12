import React from 'react';
import style from './styles/styleAccount.module.scss';

function order() {
  return (
    <div className={ style.orders }>
      <section className={ style.table }>
        <div className={ style.toptable }>
          <h4>Numero do pedido</h4>
          <h4>Data</h4>
          <h4>Status</h4>
        </div>
        <div className={ style.bodytable }>
          <a href="/">
            <span>00003</span>
            <span>12/08/2021</span>
            <span>Enviado</span>
          </a>
          <a href="/">
            <span>00002</span>
            <span>05/08/2021</span>
            <span>Entregue</span>
          </a>
          <a href="/">
            <span>00001</span>
            <span>01/08/2021</span>
            <span>Entregue</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default order;
