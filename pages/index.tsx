import React from 'react';
import { GetStaticProps } from 'next';
import { CardCategory } from '../components/Cards';
import LoadingImage from '../components/LoadImage';
import { IPropsHome, ILoadSlide, ICardCategory } from './types/typesIndex';
import api from '../service/api';
import CardProduct from '../components/Cards/CardProduct/CardProduct';
import { BtnRedirect } from '../components/Buttons';
import style from '../Sass/style.module.scss';
import HeadSEO from '../components/Head/HeadSEO';
import Slide from '../components/Slide/Slide';

function Home({
  categorys, slides, mockCards, mockPromotions,
}: IPropsHome) {
  return (
    <>
      <HeadSEO title="" description="Respponse loja de roupas e acessórios para o dia a dia, tudo de melhor qualidade para você." />
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
        <Slide nameClass={ style.listhighlights }>
          { mockCards.map((object: any, index:any) => (
            <div className={ style.content } id={ `panel-${index}` } key={ object.id }>
              <CardProduct
                objectProduct={ object }
              />
            </div>
          )) }
        </Slide>
      </div>
      <div className={ style.promotions }>
        <h2>Promoções</h2>
        <div className={ style.contpromotions }>
          { mockPromotions.map(({
            id, img, title, path,
          }: any) => (
            <figure key={ id }>
              <LoadingImage
                src={ img }
                quality={ 85 }
                alt={ title }
                layout="fill"
                loading="eager"
                // sizes="600px"
                sizes="(max-width: 500px) 304.56px, 1486.52px"
              />
              <figcaption>
                <h4>{ title }</h4>
                <BtnRedirect path={ `/category/${path}` } titleBtn="Compre" />
              </figcaption>
            </figure>
          )) }
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
