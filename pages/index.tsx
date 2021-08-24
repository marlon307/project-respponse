import React, { createRef } from 'react';
import Image from 'next/image';
import Flicking from '@egjs/react-flicking';
import style from './styles/styleIndex.module.scss';
import TesteSlide from '../assets/img/mWYhrOiAgmA.png';
import { CardCategory } from '../components/Cards';
import mockCategory from '../service/mockCategory';
import { BtnPrevNext } from '../components/Buttons';
import { BarFilter } from '../components/Filter';

function index() {
  const buttonPrevNext = createRef<Flicking>();
  return (
    <>
      <section className={ style.slide }>
        <Image
          src={ TesteSlide }
        />
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
