import React, { createRef } from 'react';
import Image from 'next/image';
import Flicking from '@egjs/react-flicking';
import { AutoPlay } from '@egjs/flicking-plugins';
import style from './styles/styleIndex.module.scss';
import { CardCategory } from '../components/Cards';
import mockCategory from '../service/mockCategory';
import { BtnPrevNext, BtnRedirect } from '../components/Buttons';
import mockCarousel from '../service/mockCarousel';
import teste from '../assets/img/lensabl-0GfPlommtxM-unsplash 1.png';
import { CardProduct, CardProductNDS, CardProductND } from '../components/Cards/CardProduct';
import Svg from '../assets/Svg';

function index() {
  const buttonPrevNext = createRef<Flicking>();
  const plugins = [new AutoPlay({ duration: 12000 })];

  return (
    <>
      <div className={ style.slide }>
        <Flicking
          circular
          plugins={ plugins }
        >
          { mockCarousel.map(({
            id, urlImg, url, title, priority,
          }) => (
            <div className="panel" key={ id }>
              <figure>
                <Image
                  src={ urlImg }
                  priority={ priority }
                  layout="responsive"
                  placeholder="blur"
                  alt={ title }
                  quality="90"
                />
                <div className={ style.titleproduct }>
                  <h1>{ title }</h1>
                  <BtnRedirect path={ url } />
                </div>
              </figure>
            </div>
          )) }
        </Flicking>
        <div className={ style.scrollset }>
          <Svg icoName="setLeft" />
        </div>
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
        </nav>
      </section>
      <section className={ style.advertising }>
        <div className={ style.container }>
          <div className={ style.cont1 }>
            <Image
              src={ teste }
              layout="responsive"
              placeholder="blur"
              alt="Oculos"
            />
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
            <CardProductND link="/product/1" />
          </div>
          <div className={ style.column }>
            <CardProductNDS link="/product/1" />
            <CardProductNDS link="/product/1" />
          </div>
          <div className={ style.column }>
            <CardProduct link="/product/1" />
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
