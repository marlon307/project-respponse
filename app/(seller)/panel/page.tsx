import { cookies } from 'next/headers';
import Link from 'next/link';
import React from 'react';
import { api2 } from '../../../service/api';
import style from './style.module.scss';

async function getPropsPanel(): Promise<PanelSeller> {
  const token = cookies().get('u_token')?.value;
  const { data } = await api2.get('/panel/seller', {
    headers: {
      cache: 'no-store',
      authorization: `Bearer ${token}`,
    },
  })
    .catch((error) => ({ data: { msg: error.message } }));
  return data;
}

async function Page() {
  const { props } = await getPropsPanel();

  return (
    <div className={ style.container }>
      <Link href="/panel/orders" className={ style.linkcard }>
        <div className={ style.card }>
          <h3>Pedidos</h3>
          <div className={ style.line }>
            { props.order.map((params) => (
              <span key={ params.status }>
                { params.status }
                :
                { ' ' }
                { params.quantity }
              </span>
            )) }
          </div>
        </div>
      </Link>
      <Link href="/product/create" className={ style.linkcard }>
        <div className={ style.card }>
          <h3>Cadastrar Produto</h3>
        </div>
      </Link>
      <Link href="/" className={ style.linkcard }>
        <div className={ style.card }>
          <h3>Meus Produtos</h3>
          <h1>{ props.products.quantity }</h1>
        </div>
      </Link>
    </div>
  );
}

export default Page;
