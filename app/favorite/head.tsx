import React from 'react';
import DefaultTags from '../../components/Head/DefaultTags';

export default async function Head() {
  return (
    <>
      <DefaultTags />
      <title>Respponse - Lista de favoritos</title>
      <meta name="description" content="Lista de favoritos" />
      <link rel="canonical" href="https://project-respponse-marlon307.vercel.app/favorite" />
      <meta property="og:title" content="Respponse - Lista de favoritos" />
      <meta property="og:description" content="Lista de favoritos." />
      <meta name="keywords" content="Respponse, pedidos, endereço, Configurações do Usuário, ajuda" />
    </>
  );
}
