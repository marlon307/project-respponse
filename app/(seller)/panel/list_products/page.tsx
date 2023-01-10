import { cookies } from 'next/headers';
import React from 'react';
import CardProduct from 'components/Cards/CardProduct/CardProduct';
import { api2 } from 'service/api';
import type { PropsCardProductCategory } from '../../../../@types/typeCardProduct';
import style from './style.module.scss';

interface Props {
  status: number;
  detail: string;
  products: PropsCardProductCategory[]
}

async function getListProductsSeller(): Promise<Props> {
  const cookie = cookies().get('u_token')?.value;
  const { data } = await api2.get('/seller/products', {
    headers: {
      authorization: `Bearer ${cookie}`,
    },
  });
  return data;
}

async function Page() {
  const { products } = await getListProductsSeller();

  return (
    <div className={ style.products_seller }>
      <h1>Clique em um para editar</h1>
      <div className={ style.container_products }>
        { products.map((product) => (
          <CardProduct
            key={ product.id }
            objectProduct={ product }
          />
        )) }
      </div>
    </div>
  );
}

export default Page;
