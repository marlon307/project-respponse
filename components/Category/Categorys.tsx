import React, { use } from 'react';
import { notFound } from 'next/navigation';
import { api2 } from '../../service/api';
import CardProduct from '../Cards/CardProduct/CardProduct';
import type { ICardProduct } from '../../@types/typeCardProduct';

async function getProductsCategoru(category_id: string): Promise<ICardProduct['products']> {
  const { data } = await api2.get(`/category/products?category_name=${category_id}`)
    .catch(() => notFound());
  return data.products_ctg;
}

interface Props {
  category_id: string;
}

function Categorys({ category_id }: Props) {
  const products = use(getProductsCategoru(category_id));

  return (
    <>
      { products.map((object) => (
        <CardProduct
          key={ object.id }
          objectProduct={ object }
        />
      )) }
    </>
  );
}

export default Categorys;
