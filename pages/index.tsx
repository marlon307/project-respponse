import Link from 'next/link';
import React from 'react';
// import type { NextPage } from 'next';
import styles from '../Sass/style.module.scss';

function Home() {
  return (
    <main className={ styles.main }>
      <Link href="/category/tenis">Categoria tenis</Link>
    </main>
  );
}

export default Home;
