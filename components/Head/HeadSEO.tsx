import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

// https://javascriptarticles.com/nextjs-dynamic-head-for-seo/

interface IHeadSEO {
  title: string;
  description: string;
  keywords?: string;
}

function HeadSEO({
  title, description, keywords,
}: IHeadSEO) {
  const { asPath } = useRouter();
  const formatTitle = title ? `${title} - Respponse` : 'Respponse';

  return (
    <Head>
      <title>{ formatTitle }</title>
      <meta name="description" content={ description } />
      <link rel="canonical" href={ `https://project-respponse-marlon307.vercel.app${asPath}` } />
      <meta property="og:title" content={ formatTitle } />
      <meta property="og:description" content={ description } />
      { keywords && <meta name="keywords" content={ keywords } /> }
    </Head>
  );
}

HeadSEO.defaultProps = {
  keywords: undefined,
};

export default HeadSEO;
