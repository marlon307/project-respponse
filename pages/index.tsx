import React from 'react';
import { CardCategory } from '../components/Cards';
// import type { NextPage } from 'next';
import styles from '../Sass/style.module.scss';
import mockCategory from '../service/mockCategory';

function Home() {
  return (
    <main className={ styles.main }>
      <br />
      <CardCategory image={ mockCategory[0].imgCategory } ctgName="Tenis" path="/tenis" />
    </main>
  );
}

export default Home;
