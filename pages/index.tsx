import React from 'react';
import { GetStaticProps } from 'next';
import { CardCategory } from '../components/Cards';
// import type { NextPage } from 'next';
import style from '../Sass/style.module.scss';
import LoadingImage from '../components/LoadImage';
import { IPropsHome, ILoadSlide, ICardCategory } from './types/typesIndex';
import api from '../service/api';

function Home({ categorys, slides }: IPropsHome) {
  return (
    <main className={ style.main }>
      <div className={ style.banner }>
        { slides.map(({
          id, srcImg, alt, priority,
        }: ILoadSlide) => (
          <LoadingImage
            key={ id }
            src={ srcImg }
            quality={ 85 }
            alt={ alt }
            layout="fill"
            loading="eager"
            priority={ priority }
          />
        )) }
      </div>
      <div className={ style.listctg }>
        <h2>Categorias</h2>
        <div className={ style.list }>
          { categorys.map(({
            ctgID, imgCategory, categoryName, color, path,
          }: ICardCategory) => (
            <CardCategory
              key={ ctgID }
              image={ imgCategory }
              ctgName={ categoryName }
              path={ path }
              color={ color! }
            />
          )) }
        </div>
      </div>
    </main>
  );
}

export default Home;

type TRequestProduct = {
  data: any
};

export const getStaticProps: GetStaticProps = async () => {
  const { data }: TRequestProduct = await api.get('/home')
    .catch(() => {
      throw new Error('Bad response from server');
    });

  return {
    props: data,
  };
};
