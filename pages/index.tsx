import React from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { CardCategory } from '../components/Cards';
// import LoadingImage from '../components/LoadImage';
import { IPropsHome } from '../@types/typesIndex';
import api, { api2 } from '../service/api';
import CardProduct from '../components/Cards/CardProduct/CardProduct';
import { BtnRedirect } from '../components/Buttons';
import HeadSEO from '../components/Head/HeadSEO';
import style from '../Sass/style.module.scss';
// import { SwiperButtonNext, SwiperButtonPrev } from '../components/Buttons/SwiperButton';

function Home({
  categorys, slides, list_product, mockPromotions,
}: IPropsHome) {
  return (
    <>
      <HeadSEO title="" description="Respponse loja de roupas e acessórios para o dia a dia, tudo de melhor qualidade para você." />
      <div className={ style.banner }>
        <section>
          { slides.map(({
            id, srcImg, alt, background,
          }, index) => (
            <figure key={ id } style={ { background: `${background}` } }>
              <Image
                src={ srcImg }
                quality={ 85 }
                alt={ alt }
                loading={ index === 0 ? 'eager' : 'lazy' }
                priority={ index === 0 }
                fill
              />
              <figcaption>
                <h1>{ alt }</h1>
                <p>
                  There’s still time to save up to 50% on new markdowns.
                  Shop now—no promo code needed.
                </p>
              </figcaption>
            </figure>
          )) }
        </section>
      </div>
      <div className={ style.listctg }>
        <h2>Categorias</h2>
        <div className={ style.slide_container }>
          { categorys.map(({
            ctgID, imgCategory, categoryName, color, path,
          }) => (
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
        <div className={ style.slide_container }>
          { list_product.map((object: IPropsHome['list_product'][0]) => (
            <div className={ style.panel } key={ object.id }>
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
        <section>
          { mockPromotions.map(({
            id, img, title, path,
          }: any) => (
            <figure key={ id }>
              <Image
                src={ img }
                quality={ 85 }
                alt={ title }
                loading="eager"
                sizes="(max-width: 500px) 304.56px, 1486.52px"
                fill
              />
              <figcaption>
                <h4>{ title }</h4>
                <BtnRedirect path={ `/category/${path}` } titleBtn="Compre" />
              </figcaption>
            </figure>
          )) }
        </section>
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
    .catch((error) => ({
      data: {
        categorys: [],
        slides: [],
        mockPromotions: [],
      },
      detail: error.message,
    }));

  const newdata: TRequestProduct = await api2.get('/product')
    .catch((error) => ({ data: error.message }));

  return {
    props: {
      categorys: data.categorys,
      slides: data.slides,
      list_product: newdata.data.list, // newdata.data.list,
      mockPromotions: data.mockPromotions,
    },
    // revalidated: true,
  };
};
