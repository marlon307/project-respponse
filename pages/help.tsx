import React from 'react';
import Link from 'next/link';
import style from './styles/styleAccount.module.scss';

function help() {
  return (
    <section className={ style.section }>
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
    </section>
  );
}

export default help;
