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

function index() {
  const buttonPrevNext = createRef<Flicking>();
  const plugins = [new AutoPlay({ duration: 12000 })];
  return (
    <>
      <section>
        <div className={ style.slide }>
          <Flicking circular plugins={ plugins }>
            { mockCarousel.map(({
              id, urlImg, url, alt,
            }) => (
              <div className="panel" key={ id }>
                <Image
                  src={ urlImg }
                  priority
                  quality={ 80 }
                  alt={ alt }
                />
                <span>{ url }</span>
              </div>
            )) }
          </Flicking>
        </div>
      </section>
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
                  <CardCategory id={ categoryId } image={ imgCategory } ctgName={ categoryName } />
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
            <Image src={ teste } />
          </div>
          <div className={ style.cont2 }>
            <CardInfo />
            <BtnRedirect />
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
