import React from 'react';
import DefaultTags from '../components/Head/DefaultTags';

export default function Head() {
  return (
    <>
      <title>Respponse</title>
      <DefaultTags />
      <meta name="description" content="Encontre diversar promoçoes" />
      <link rel="canonical" href="https://project-respponse-marlon307.vercel.app/" />
      <meta property="og:title" content="Respponse" />
      <meta property="og:description" content="Encontre diversar promoçoes" />
      <meta name="keywords" content="Respponse,eletronicos,acessorios,tenis" />
    </>
  );
}
