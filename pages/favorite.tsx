import React from 'react';
import { SmallCard } from '../components/Cards';
import style from './styles/styleFavorite.module.scss';
import Svg from '../assets/Svg';

function favorite() {
  return (
    <section className={ style.favorites }>
      <h1 className={ style.title } title="Favoritos">
        <Svg icoName="healt" />
        Favoritos
      </h1>
      <ul>
        <li>
          <SmallCard />
        </li>
        <li>
          <SmallCard />
        </li>
        <li>
          <SmallCard />
        </li>
      </ul>
    </section>
  );
}

export default favorite;
