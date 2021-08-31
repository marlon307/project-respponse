import React, { createRef } from 'react';
import Image from 'next/image';
import Flicking from '@egjs/react-flicking';
import { AutoPlay } from '@egjs/flicking-plugins';
import style from './styles/styleIndex.module.scss';
import { CardCategory, CardInfo } from '../components/Cards';
import mockCategory from '../service/mockCategory';
import { BtnPrevNext, BtnRedirect } from '../components/Buttons';
import { BarFilter } from '../components/Filter';
import mockCarousel from '../service/mockCarousel';
import teste from '../assets/img/lensabl-0GfPlommtxM-unsplash 1.png';
import CardProduct from '../components/Cards/CardProduct/CardProduct';

function index() {
  const buttonPrevNext = createRef<Flicking>();
  const plugins = [new AutoPlay({ duration: 12000 })];

  return (
    <>
      <div className={ style.slide }>
        <Flicking circular plugins={ plugins }>
          { mockCarousel.map(({
            id, urlImg, url, alt, priority,
          }) => (
            <div className="panel" key={ id }>
              <figure>
                <Image
                  src={ urlImg }
                  priority={ priority }
                  layout="responsive"
                  placeholder="blur"
                  alt={ alt }
                />
              </figure>
              <span>{ url }</span>
            </div>
          )) }
        </Flicking>
      </div>
      <section className={ style.sectionfilter }>
        <nav>
          <div className={ style.category }>
            <BtnPrevNext reference={ buttonPrevNext } typePrevOrNext="prev" />
            <Flicking
              bound
              align="prev"
              ref={ buttonPrevNext }
            >
              { mockCategory.map(({ categoryId, imgCategory, categoryName }) => (
                <div className="panel" key={ categoryId }>
                  <CardCategory
                    id={ categoryId }
                    image={ imgCategory }
                    ctgName={ categoryName }
                  />
                </div>
              )) }
            </Flicking>
            <BtnPrevNext reference={ buttonPrevNext } typePrevOrNext="next" />
          </div>
          <BarFilter />
        </nav>
      </section>
      <section className={ style.advertising }>
        <div className={ style.container }>
          <div className={ style.cont1 }>
            <h1>Oculos</h1>
            <Image
              src={ teste }
              layout="responsive"
              placeholder="blur"
              alt="Oculos"
            />
          </div>
          <div className={ style.cont2 }>
            <CardInfo />
            <BtnRedirect />
          </div>
        </div>
      </section>
      <section className={ style.produinitial }>
        <h1>Products</h1>
        <div className={ style.contentcards }>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </section>
    </>
  );
}

export default index;
