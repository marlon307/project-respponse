import React from 'react';
import Image from 'next/image';
import style from './styles/styleIndex.module.scss';
import TesteSlide from '../assets/img/mWYhrOiAgmA.png';

function index() {
  return (
    <>
      <section className={ style.slide }>
        <Image src={ TesteSlide } />
      </section>
      <section className={ style.sectionfilter }>
        <div className={ style.category }>
          Categoria
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
