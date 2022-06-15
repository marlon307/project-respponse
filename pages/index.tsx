import React from 'react';
import { GetStaticProps } from 'next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Lazy } from 'swiper';
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
        <Swiper
          slidesPerView="auto"
          wrapperTag="section"
          spaceBetween={ 16 }
          lazy
          modules={ [Lazy] }
        >
          { categorys.map(({
            ctgID, imgCategory, categoryName, color, path,
          }: ICardCategory) => (
            <SwiperSlide key={ ctgID }>
              <CardCategory
                image={ imgCategory }
                ctgName={ categoryName }
                path={ path }
                color={ color! }
              />
            </SwiperSlide>
          )) }
        </Swiper>

      </div>
      <div className={ style.highlights }>
        <h2>Destaques</h2>
        <Swiper
          slidesPerView="auto"
          wrapperTag="section"
          spaceBetween={ 16 }
          lazy
          modules={ [Lazy] }
        >
          { mockCards.map((object: any) => (
            <SwiperSlide key={ object.id }>
              <CardProduct
                key={ object.id }
                objectProduct={ object }
              />
            </SwiperSlide>
          )) }
        </Swiper>
      </div>
      <div className={ style.promotions }>
        <h2>Promoções</h2>
        <Swiper
          lazy
          wrapperTag="section"
          modules={ [Lazy] }
          slidesPerView="auto"
          spaceBetween={ 16 }
          allowTouchMove
          breakpoints={ {
            700: {
              allowTouchMove: false,
            },
          } }
        >
          { mockPromotions.map(({
            id, img, title, path,
          }: any) => (
            <SwiperSlide key={ id } itemID={ id }>
              <figure className="keen-slider__slide">
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
            </SwiperSlide>
          )) }
        </Swiper>
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
