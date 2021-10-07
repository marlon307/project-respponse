import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { SmallCard } from '../components/Cards';
import style from './sass/styleFavorite.module.scss';
import Svg from '../assets/Svg';

interface IUser {
  user: {
    logged: boolean;
  }
}

function favorite() {
  const { logged } = useSelector(({ user }: IUser) => user);
  const router = useRouter();

  useEffect(() => {
    if (!logged) {
      router.push('/');
    }
  }, [logged]);

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
