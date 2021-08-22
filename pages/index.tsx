import React from 'react';
import Image from 'next/image';
import Flicking, { ViewportSlot } from '@egjs/react-flicking';
import { Arrow } from '@egjs/flicking-plugins';
import style from './styles/styleIndex.module.scss';
import TesteSlide from '../assets/img/mWYhrOiAgmA.png';
import { CardCategory } from '../components/Cards';
import { mockApiCategory } from '../service/colorsMock';
import '@egjs/flicking-plugins/dist/arrow.css';

function index() {
  const plugins = [new Arrow()];
  return (
    <>
      <section className={ style.slide }>
        <Image src={ TesteSlide } />
      </section>
      <section className={ style.sectionfilter }>
        <div className={ style.category }>
          <Flicking align="6%" plugins={ plugins }>
            { mockApiCategory.map(({ categoryId, imgCategory, categoryName }) => (
              <div className="panel" key={ categoryId }>
                <CardCategory id={ categoryId } image={ imgCategory } ctgName={ categoryName } />
              </div>
            )) }
            <ViewportSlot>
              <span className="flicking-arrow-prev is-outside" />
              <span className="flicking-arrow-next is-outside" />
            </ViewportSlot>
          </Flicking>
        </div>
        <div className={ style.filter }>
          Filter
        </div>
      </section>
      <section className={ style.advertising }>
        Divugaçoes
      </section>
    </>
  );
}

export default index;
