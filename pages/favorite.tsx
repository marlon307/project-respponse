import React from 'react';
import { SmallCard } from '../components/Cards';
import style from './styles/styleFavorite.module.scss';

function favorite() {
  return (
    <ul className={ style.favorites }>
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
  );
}

export default favorite;
