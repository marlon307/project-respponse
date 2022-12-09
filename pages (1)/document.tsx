import React from 'react';
import {
  Html, Head, Main, NextScript,
} from 'next/document';
import Seo from '../components/Head/Head';

function Document() {
  return (
    <Html>
      <Head>
        <Seo />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
