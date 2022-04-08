import React from 'react';
import {
  Html, Head, Main, NextScript,
} from 'next/document';
import type { AppProps } from 'next/app';
import Seo from '../components/Head/Head';

function Document(props: AppProps) {
  return (
    <Html>
      <Head>
        <Seo props={ props } />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
