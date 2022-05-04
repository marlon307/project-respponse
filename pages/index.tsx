import React from 'react';
import { GetStaticProps } from 'next';
import { CardCategory } from '../components/Cards';
import style from '../Sass/style.module.scss';
import LoadingImage from '../components/LoadImage';
import { IPropsHome, ILoadSlide, ICardCategory } from './types/typesIndex';
import api from '../service/api';
import { CardProduct } from '../components/Cards/CardProduct';
import image1 from '../assets/img/alex-conradt-v-E3Q2fBbAA-unsplash.jpg';
import image2 from '../assets/img/ivana-cajina-_7LbC5J-jw4-unsplash.jpg';
import image3 from '../assets/img/jasmin-chew-YE1FYzPLNOs-unsplash.jpg';
import image4 from '../assets/img/pooja-chaudhary-q29kexdHODM-unsplash.jpg';

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
          { mockCards.map((object: any) => (<CardProduct key={ object.id } id={ object.id } />)) }
        </div>
      </div>
      <div className={ style.promotions }>
        <h2>Promoçoes</h2>
        <div className={ style.contpromotions }>
          <figure>
            <LoadingImage
              src={ image1 }
              quality={ 85 }
              alt="Banner1"
              layout="fill"
              loading="eager"
            />
          </figure>
          <figure>
            <LoadingImage
              src={ image2 }
              quality={ 85 }
              alt="Banner1"
              layout="fill"
              loading="eager"
            />
          </figure>
          <figure>
            <LoadingImage
              src={ image3 }
              quality={ 85 }
              alt="Banner1"
              layout="fill"
              loading="eager"
            />
          </figure>
          <figure>
            <LoadingImage
              src={ image4 }
              quality={ 85 }
              alt="Banner1"
              layout="fill"
              loading="eager"
            />
          </figure>
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
