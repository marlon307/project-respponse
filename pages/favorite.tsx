import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { SmallCard } from 'components/Cards';
import Svg from 'assets/Svg';
import mockBag from 'service/mockBag';
import type { ReduxUser } from 'types/typesUserRedux';
import style from './style.module.scss';

function favorite() {
  const { logged } = useSelector(({ user }: ReduxUser) => user);
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

export default favorite;
