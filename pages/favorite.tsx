import React from 'react';
import { SmallCard } from '../components/Cards';
import style from './styles/styleFavorite.module.scss';
import Svg from '../assets/Svg';

function favorite() {
  return (
    <div className={ style.favorites }>
      <h2 className={ style.title } title="Favoritos">
        <Svg icoName="healt" />
        Favoritos
      </h2>
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
    </div>
  );
}

export default favorite;
