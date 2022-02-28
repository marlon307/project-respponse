import Link from 'next/link';
import React from 'react';

function Index() {
  return (
    <ol>
      <li>
        <a href="/">Politica de Privacidade</a>
      </li>
      <li>
        <a href="/">Troca e Devolução</a>
      </li>
      <li>
        <a href="/">Pagamentos</a>
      </li>
      <li>
        <a href="/">Envios</a>
      </li>
      <li>
        <Link href="/support">Suporte</Link>
      </li>
    </ol>
  );
}

export default Index;
