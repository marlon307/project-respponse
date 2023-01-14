import React from 'react';
import DefaultTags from '../../../components/Head/DefaultTags';

interface IHead {
  params: { id: string }
}

export default async function Head({ params }: IHead) {
  return (
    <>
      <title>{ `Respponse - Categoria ${params.id}` }</title>
      <meta name="description" content={ `Categoria ${params.id}` } />
      <link rel="canonical" href={ `https://project-respponse-marlon307.vercel.app/category/${params.id}` } />
      <meta property="og:title" content={ `Respponse - Categoria ${params.id}` } />
      <meta property="og:description" content={ `Respponse - todas produto com a categoria ${params.id}` } />
      <meta name="keywords" content={ `${params.id}` } />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <DefaultTags />
    </>
  );
}
