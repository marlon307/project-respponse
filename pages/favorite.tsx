import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from '../redux/hooks';
import { SmallCard } from '../components/Cards';
import style from '../Sass/style.module.scss';
import mockBag from '../service/mockBag';
import HeadSEO from '../components/Head/HeadSEO';

function Favorite() {
  const { logged } = useAppSelector(({ user }) => user);
  const router = useRouter();

  useEffect(() => {
    if (!logged) {
      router.push('/');
    }
  }, [logged, router]);

  return (
    <>
      <HeadSEO title="Favoritos" description="Lista de favoritos." />
      <section className={ style.favorites }>
        <h1 className={ style.title } title="Favoritos">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.16 5C19.0937 3.9447 17.6854 3.30527 16.1891 3.19708C14.6928 3.08889 13.207 3.51907 12 4.41C10.7277 3.46364 9.14402 3.03451 7.56795 3.20904C5.99188 3.38356 4.54047 4.14878 3.506 5.35059C2.47154 6.55239 1.93085 8.10152 1.99283 9.68601C2.05481 11.2705 2.71485 12.7727 3.84003 13.89L9.84003 19.94C10.4025 20.5018 11.165 20.8174 11.96 20.8174C12.755 20.8174 13.5175 20.5018 14.08 19.94L20.08 13.89C20.671 13.3126 21.142 12.6242 21.466 11.8642C21.79 11.1043 21.9606 10.2878 21.968 9.46163C21.9755 8.63551 21.8196 7.81606 21.5093 7.05038C21.199 6.2847 20.7405 5.58789 20.16 5ZM18.75 12.46L12.75 18.46C12.6571 18.5537 12.5465 18.6281 12.4246 18.6789C12.3027 18.7297 12.172 18.7558 12.04 18.7558C11.908 18.7558 11.7773 18.7297 11.6555 18.6789C11.5336 18.6281 11.423 18.5537 11.33 18.46L5.33003 12.46C4.54579 11.6583 4.10664 10.5815 4.10664 9.46C4.10664 8.33853 4.54579 7.26166 5.33003 6.46C6.12919 5.67099 7.207 5.22857 8.33003 5.22857C9.45306 5.22857 10.5309 5.67099 11.33 6.46C11.423 6.55373 11.5336 6.62812 11.6555 6.67889C11.7773 6.72966 11.908 6.7558 12.04 6.7558C12.172 6.7558 12.3027 6.72966 12.4246 6.67889C12.5465 6.62812 12.6571 6.55373 12.75 6.46C13.5708 5.80689 14.6032 5.47872 15.6505 5.53809C16.6977 5.59746 17.6864 6.04021 18.4281 6.7819C19.1698 7.52359 19.6126 8.51233 19.6719 9.55956C19.7313 10.6068 19.4031 11.6392 18.75 12.46Z" fill="#333333" />
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

export default Favorite;
