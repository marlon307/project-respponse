import React from 'react';
import DefaultTags from '../DefaultTags';

export default async function Head() {
  return (
    <>
      <DefaultTags />
      <title>Sacola de Compras - Respponse</title>
      <meta name="description" content="Finalize a compra da sacola aqui." />
      <link rel="canonical" href="https://project-respponse-marlon307.vercel.app/" />
      <meta property="og:title" content="Sacola de Compras - Respponse" />
      <meta property="og:description" content="inalize a compra da sacola aqui." />
      <meta name="keywords" content="Respponse,sacola,bag,checkout" />
    </>
  );
}
