import React from 'react';
import DefaultTags from '../../components/Head/DefaultTags';

export default async function Head() {
  return (
    <>
      <DefaultTags />
      <title>Respponse - Conta</title>
      <meta name="description" content="Conta do usuário" />
      <link rel="canonical" href="https://project-respponse-marlon307.vercel.app/account" />
      <meta property="og:title" content="Respponse - Conta" />
      <meta property="og:description" content="Respponse,pedidos,endereço,Configurações do Usuário, ajuda" />
      <meta name="keywords" content="Respponse, pedidos, endereço, Configurações do Usuário, ajuda" />
    </>
  );
}
