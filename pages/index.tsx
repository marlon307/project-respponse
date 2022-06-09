import React from 'react';
import { GetStaticProps } from 'next';
import { useKeenSlider } from 'keen-slider/react';
import { CardCategory } from '../components/Cards';
import LoadingImage from '../components/LoadImage';
import { IPropsHome, ILoadSlide, ICardCategory } from './types/typesIndex';
import api from '../service/api';
import CardProduct from '../components/Cards/CardProduct/CardProduct';
import { BtnRedirect } from '../components/Buttons';
import HeadSEO from '../components/Head/HeadSEO';
import style from '../Sass/style.module.scss';

function Home({
  categorys, slides, mockCards, mockPromotions,
}: IPropsHome) {
  const [refHighlights] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 'auto',
      spacing: 24,
    },
    breakpoints: {
      '(max-width: 700px)': {
        slides: {
          perView: 'auto',
          spacing: 12,
        },
      },
    },
  });
  const [refCategory] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 'auto',
      spacing: 12,
    },
  });
  const [refPromotions] = useKeenSlider<HTMLDivElement>({
    disabled: true,
    breakpoints: {
      '(max-width: 700px)': {
        disabled: false,
        slides: {
          perView: 'auto',
        },
      },
    },
  });

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
        <div className={ `${style.list} keen-slider` } ref={ refCategory }>
          { categorys.map(({
            ctgID, imgCategory, categoryName, color, path,
          }: ICardCategory) => (
            <div className="keen-slider__slide" key={ ctgID }>
              <CardCategory
                image={ imgCategory }
                ctgName={ categoryName }
                path={ path }
                color={ color! }
              />
            </div>
          )) }
        </div>
      </div>
      <div className={ style.highlights }>
        <h2>Destaques</h2>
        <div className={ `${style.listhighlights} keen-slider` } ref={ refHighlights }>
          { mockCards.map((object: any) => (
            <div key={ object.id } className={ `${style.highitemlist} keen-slider__slide` }>
              <CardProduct
                key={ object.id }
                objectProduct={ object }
              />
            </div>
          )) }
        </div>
      </div>
      <div className={ style.promotions }>
        <h2>Promoções</h2>
        <div className={ `${style.contpromotions} keen-slider` } ref={ refPromotions }>
          { mockPromotions.map(({
            id, img, title, path,
          }: any) => (
            <figure key={ id } className="keen-slider__slide">
              <LoadingImage
                src={ img }
                quality={ 85 }
                alt={ title }
                layout="fill"
                loading="eager"
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
