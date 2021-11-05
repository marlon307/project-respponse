import React, { useState, useEffect, createRef } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';
import AliceCarousel from 'react-alice-carousel';
import BarColors from '../../components/Bars/BarColors';
import style from './style.module.scss';
import BarSize from '../../components/Bars/BarSize';
import AddBag from '../../components/Buttons/AddBag';
import { DetailsCard, Spec } from '../../components/Cards';
import Svg from '../../assets/Svg';
import LoadingImage from '../../components/LoadImage';
import { mockCards } from '../../service/mockCards';
import calcPercentage from '../../service/calcPercentage';
import { BtnPrevNext } from '../../components/Buttons';

function productId() {
  const router = useRouter();
  const slideRefProductImg = createRef<AliceCarousel>();
  const [itemdrag, setItemDrag] = useState(false);

  useEffect(() => {
    const { productID } = router.query;

    if (mockCards[0].id !== Number(productID)) {
      // router.push('/404');
    }
  }, []);

  const {
    title, type, price, descrtion, branch, gender, discount,
    details, specification, options,
  } = mockCards[0];

  return (
    <div className={ style.product }>
      <div className={ style.slide }>
        <div className={ style.buttons }>
          <BtnPrevNext typePrevOrNext="prev" reference={ slideRefProductImg } />
          <BtnPrevNext typePrevOrNext="next" reference={ slideRefProductImg } />
        </div>
        <AliceCarousel
          autoWidth
          infinite
          disableButtonsControls
          disableDotsControls
          ref={ slideRefProductImg }
        >
          { options !== undefined && options[0].imgs.map(({ urlImg, imgid }: any) => (
            <div key={ imgid } className={ style.contentpanel }>
              <figure>
                <LoadingImage
                  url={ urlImg }
                  quality={ 90 }
                  alt={ title }
                />
              </figure>
            </div>
          )) }
        </AliceCarousel>
        <div className={ style.barcolor }>
          <BarColors array={ options } />
        </div>
      </div>
      <div className={ style.maincontentinfo }>
        <div className={ style.infodesc }>
          <div className={ style.mindetail }>
            <p>
              { descrtion }
            </p>
          </div>
          <div className={ style.infos }>
            <div className={ style.primaryline }>
              <div className={ style.titles }>
                <h1>{ type }</h1>
                <h2>{ title }</h2>
              </div>
              <div className={ cx(discount && style.price) }>
                <div>
                  { discount > 0 && <span>de </span> }
                  <span>
                    { price.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    }) }
                  </span>
                </div>
                { discount > 0 && (
                  <div>
                    <span>por </span>
                    <span>
                      { (Number(price) - Number(calcPercentage(discount, price)))
                        .toLocaleString('pt-br', {
                          style: 'currency',
                          currency: 'BRL',
                        }) }
                    </span>
                  </div>
                ) }
              </div>
            </div>
            <div className={ style.secondline }>
              <BarSize array={ options } colorName="Branco" />
            </div>
            <AddBag />
          </div>
        </div>
        <div className={ style.options }>
          <label htmlFor="detail">
            <input
              type="radio"
              name="dragoption"
              id="detail"
              onClick={ () => setItemDrag(itemdrag) }
            />
            <Svg icoName="spec" />
            Detalhes
          </label>
          <label htmlFor="recomendation">
            <input
              type="radio"
              name="dragoption"
              id="recomendation"
              onClick={ () => setItemDrag(true) }
            />
            <Svg icoName="similar" />
            <span>Produos Similares</span>
          </label>
        </div>
        <section className={ style.slideinfo }>
          <AliceCarousel
            autoWidth
            disableButtonsControls
            disableDotsControls
          >
            <DetailsCard
              gender={ gender }
              branch={ branch }
              details={ details }
            />
            <Spec specification={ specification } />
          </AliceCarousel>
        </section>
      </div>
    </div>
  );
}

export default productId;
