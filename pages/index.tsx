import React, { createRef } from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import style from './style.module.scss';
import { CardCategory } from '../components/Cards';
import mockCategory from '../service/mockCategory';
import { BtnPrevNext, BtnRedirect } from '../components/Buttons';
import mockCarousel from '../service/mockCarousel';
import teste from '../assets/img/lensabl-0GfPlommtxM-unsplash 1.png';
import { CardProduct, CardProductNDS, CardProductND } from '../components/Cards/CardProduct';
import Svg from '../assets/Svg';
import LoadingImage from '../components/LoadImage';

function index() {
  const buttonPrevNext = createRef();

  return (
    <>
      <div className={ style.slide }>
        <Carousel
          showArrows={ false }
          autoPlay
          interval={ 4800 }
          transitionTime={ 1200 }
          infiniteLoop
          showStatus={ false }
          showThumbs={ false }
          animationHandler="fade"
        >
          { mockCarousel.map(({
            id, urlImg, url, title, priority,
          }) => (
            <figure key={ id }>
              <Image
                src={ urlImg }
                priority={ priority }
                layout="responsive"
                placeholder="blur"
                alt={ title }
                quality={ 90 }
              />
              <div className={ style.titleproduct }>
                <h1>{ title }</h1>
                <BtnRedirect path={ url } />
              </div>
            </figure>
          )) }
        </Carousel>
        <div className={ style.scrollset }>
          <Svg icoName="setLeft" />
        </div>
      </div>
      <section className={ style.sectionfilter }>
        <nav>
          <div className={ style.category }>
            <BtnPrevNext reference={ buttonPrevNext } typePrevOrNext="prev" />
            <Carousel
              showStatus={ false }
              showThumbs={ false }
              showIndicators={ false }
              width="100%"
            >
              { mockCategory.map(({ categoryId, imgCategory, categoryName }) => (
                <CardCategory
                  key={ categoryId }
                  id={ categoryId }
                  image={ imgCategory }
                  ctgName={ categoryName }
                />
              )) }
            </Carousel>
            <BtnPrevNext reference={ buttonPrevNext } typePrevOrNext="next" />
          </div>
        </nav>
      </section>
      <section className={ style.advertising }>
        <div className={ style.container }>
          <div className={ style.cont1 }>
            <LoadingImage url={ teste } alt="Title" />
          </div>
          <div className={ style.cont2 }>
            <h1>Óculos de varias marcas e modelos</h1>
            <BtnRedirect path="/category/oculos" />
          </div>
        </div>
      </section>
      <section className={ style.produinitial }>
        <div className={ style.contentcards }>
          <div className={ style.column }>
            <BtnRedirect path="/category/relogios" />
          </div>
          <div className={ style.column }>
            <h1>Veja as últimas novidades</h1>
            <CardProductND
              id={ 4 }
            />
          </div>
          <div className={ style.column }>
            <CardProductNDS
              id={ 2 }
            />
            <CardProductNDS
              id={ 3 }
            />
          </div>
          <div className={ style.column }>
            <CardProduct id={ 0 } />
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
