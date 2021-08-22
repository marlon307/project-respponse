import React from 'react';
import Image from 'next/image';
import Flicking from '@egjs/react-flicking';
import style from './styles/styleIndex.module.scss';
import TesteSlide from '../assets/img/mWYhrOiAgmA.png';
import { CardCategory } from '../components/Cards';
import Svg from '../assets/Svg';

function index() {
  return (
    <>
      <section className={ style.slide }>
        <Image src={ TesteSlide } />
      </section>
      <section className={ style.sectionfilter }>
        <div className={ style.category }>

          <Flicking align="6%">
            <div className="panel">
              <CardCategory />
            </div>
            <div className="panel">
              <CardCategory />
            </div>
            <div className="panel">
              <CardCategory />
            </div>
            <div className="panel">
              <CardCategory />
            </div>
            <div className="panel">
              <CardCategory />
            </div>
            <div className="panel">
              <CardCategory />
            </div>
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
