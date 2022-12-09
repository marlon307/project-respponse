import React, { useEffect } from 'react';
import type { GetServerSideProps } from 'next';
import router from 'next/router';
import { SmallCard } from '../components/Cards';
import mockBag from '../service/mockBag';
import HeadSEO from '../components/Head/HeadSEO';
import useLogin from '../hooks/useLogin';
import style from '../Sass/style.module.scss';

function Favorite() {
  const { loggedOut } = useLogin();

  useEffect(() => {
    if (loggedOut) {
      router.push('/');
    }
  }, [loggedOut]);

  return (
    <>
      <HeadSEO title="Favoritos" description="Lista de favoritos." />
      <section className={ style.favorites }>
        <h1 className={ style.title } title="Favoritos">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20.2 5a6.3 6.3 0 0 0-8.2-.6 6.3 6.3 0 0 0-8.2 9.4l6.3 6.3a2.8 2.8 0 0 0 3.8 0l6.3-6.3a6.3 6.3 0 0 0 0-8.8Zm-1.4 7.5-6.3 6.2a.8.8 0 0 1-1 0l-6.2-6.3a4.3 4.3 0 0 1 0-6 4.3 4.3 0 0 1 6 0 1 1 0 0 0 1.4 0 4.3 4.3 0 0 1 6 6Z" fill="#333" />
          </svg>
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
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (req.cookies.u_token) {
    return {
      props: {
        logged: req.cookies.u_token,
      },
    };
  }

  return {
    redirect: {
      permanent: false,
      destination: '/',
    },
  };
};

export default Favorite;
