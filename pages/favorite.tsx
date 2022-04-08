import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from '../redux/hooks';
import Svg from '../assets/Svg';
import { SmallCard } from '../components/Cards';
import style from '../Sass/style.module.scss';
import mockBag from '../service/mockBag';

function Favorite() {
  const { logged } = useAppSelector(({ user }) => user);
  const router = useRouter();

  useEffect(() => {
    if (!logged) {
      router.push('/');
    }
  }, [logged, router]);

  return (
    <section className={ style.favorites }>
      <h1 className={ style.title } title="Favoritos">
        <Svg icoName="healt" />
        Favoritos
      </h1>
      <ul>
        { mockBag.map((object) => (
          <li key={ object.id }>
            <SmallCard
              removable
              objectID={ object }
            />
          </li>
        )) }
      </ul>
    </section>
  );
}

export default Favorite;
