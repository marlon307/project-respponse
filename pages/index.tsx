import React, { createRef } from 'react';
import Image from 'next/image';
import Flicking from '@egjs/react-flicking';
import { AutoPlay } from '@egjs/flicking-plugins';
import style from './styles/styleIndex.module.scss';
import { CardCategory } from '../components/Cards';
import mockCategory from '../service/mockCategory';
import { BtnPrevNext } from '../components/Buttons';
import { BarFilter } from '../components/Filter';
import mockCarousel from '../service/mockCarousel';

function index() {
  const buttonPrevNext = createRef<Flicking>();
  const plugins = [new AutoPlay({ duration: 12000 })];
  return (
    <>
      <section>
        <div className={ style.slide }>
          <Flicking circular plugins={ plugins }>
            { mockCarousel.map(({ id, urlImg, url }) => (
              <div className="panel" key={ id }>
                <Image src={ urlImg } priority />
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
        Divugaçoes
      </section>
    </>
  );
}

export default index;
