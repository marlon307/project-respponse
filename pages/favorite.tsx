import React from 'react';
import Image from 'next/image';
import { SmallCard } from '../components/Cards';
import style from './styles/styleFavorite.module.scss';
import iconFav from '../assets/img/u_heart-sign.svg';

function favorite() {
  return (
    <div className={ style.favorites }>
      <h2 className={ style.title } title="Favoritos">
        <Image src={ iconFav } />
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
