import React from 'react';
import { notFound } from 'next/navigation';
import { api2 } from 'service/api';
import type { Props, TypeProduct } from './product';
import DefaultTags from '../../../components/Head/DefaultTags';

async function getProductID(prodID: number): Promise<TypeProduct> {
  const { data } = await api2.get(`/product/${prodID}`)
    .catch(() => notFound());
  return data.product;
}

export default async function Head({ params }: Props) {
  const product = await getProductID(params.id);

  return (
    <>
      <DefaultTags />
      <title>{ `${product.category_name} - ${product.title}` }</title>
      <meta name="description" content={ product.descrtion } />
      <link rel="canonical" href={ `https://project-respponse-marlon307.vercel.app${product.id}` } />
      <meta property="og:title" content={ product.title } />
      <meta property="og:description" content={ product.descrtion } />
      <meta name="keywords" content={ `${product.category_name} - ${product.title}` } />
    </>
  );
}
