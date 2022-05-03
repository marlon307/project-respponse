import React from 'react';
import { GetStaticProps } from 'next';
import { CardCategory } from '../components/Cards';
import style from '../Sass/style.module.scss';
import LoadingImage from '../components/LoadImage';
import { IPropsHome, ILoadSlide, ICardCategory } from './types/typesIndex';
import api from '../service/api';
import { CardProduct } from '../components/Cards/CardProduct';

function Home({ categorys, slides, mockCards }: IPropsHome) {
  return (
    <>
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
      <div className={ style.highlights }>
        <h2>Destaques</h2>
        <div className={ style.listhighlights }>
          {/*
           { mockCards.map((object: any) => (<CardProduct key={ object.id }
           id={ object.id } />)) } */ }
        </div>
      </div>
    </>
  );
}

export default Home;

type TRequestProduct = {
  data: any
};

export const getStaticProps: GetStaticProps = async () => {
  const { data }: TRequestProduct = await api.get('/home')
    .catch((error) => ({ data: error.message }));

  return {
    props: data,
    // revalidated: true,
  };
};
