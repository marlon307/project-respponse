import Link from 'next/link';
import React from 'react';

function Index() {
  return (
    <ol>
      <li>
        <Link href="/">Politica de Privacidade</Link>
      </li>
      <li>
        <Link href="/">Troca e Devolução</Link>
      </li>
      <li>
        <Link href="/">Pagamentos</Link>
      </li>
      <li>
        <Link href="/">Envios</Link>
      </li>
      <li>
        <Link href="/support">Suporte</Link>
      </li>
    </ol>
  );
}

export default Index;
