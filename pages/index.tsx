import React, { createRef } from 'react';
import Image from 'next/image';
import Flicking from '@egjs/react-flicking';
import style from './styles/styleIndex.module.scss';
import { CardCategory } from '../components/Cards';
import mockCategory from '../service/mockCategory';
import { BtnPrevNext } from '../components/Buttons';
import { BarFilter } from '../components/Filter';
import TesteSlide1 from '../assets/img/mWYhrOiAgmA.png';
import TesteSlide2 from '../assets/img/SmIlY2uAHo8.png';
import TesteSlide3 from '../assets/img/atikh-bana-_KaMTEmJnxY-unsplash.jpg';
// import TesteSlide4 from '../assets/img/mWYhrOiAgmA.png';

function index() {
  const buttonPrevNext = createRef<Flicking>();
  return (
    <>
      <section>
        <div className={ style.slide }>
          <Flicking circular>
            <div className="panel">
              <Image
                src={ TesteSlide1 }
              />
            </div>
            <div className="panel">
              <Image
                src={ TesteSlide2 }
              />
            </div>
            <div className="panel">
              <Image
                src={ TesteSlide3 }
              />
            </div>
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
