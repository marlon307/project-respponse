import React, { useState, useEffect } from 'react';
import Flicking from '@egjs/react-flicking';
import { useRouter } from 'next/router';
import BarColors from '../../components/Bars/BarColors';
import style from './product.module.scss';
import BarSize from '../../components/Bars/BarSize';
import AddBag from '../../components/Buttons/AddBag';
import { DetailsCard, Spec } from '../../components/Cards';
import Svg from '../../assets/Svg';
import colorsMock from '../../service/colorsMock';
import LoadingImage from '../../components/LoadImage';
import { mockCards } from '../../service/mockCards';

function productId() {
  const router = useRouter();
  const [itemdrag, setItemDrag] = useState(false);

  useEffect(() => {
    const { productID } = router.query;

    if (mockCards[0].id !== Number(productID)) {
      // router.push('/404');
    }
  }, []);

  const {
    title, type, price, descrtion, branch, gender, descount, shipping,
    details, specification, options,
  }: any = mockCards[0];

  return (
    <div className={ style.product }>
      <div className={ style.slide }>
        <Flicking
          align="center"
          circular
        >
          { options !== undefined && options[0].imgs.map(({ urlImg, imgid }: any) => (
            <div className="panel" key={ imgid }>
              <div className={ style.contentpanel }>
                <LoadingImage
                  url={ urlImg }
                  quality={ 90 }
                  alt={ title }
                />
              </div>
            </div>
          )) }
        </Flicking>
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
            { shipping && <span className={ style.shipping }>Frete Grátis</span> }
            <div className={ style.primaryline }>
              <div className={ style.titles }>
                <h1>{ type }</h1>
                <h2>{ title }</h2>
              </div>
              <div className={ style.price }>
                <span>
                  R$
                  { ' ' }
                  { price }
                </span>
                { descount > 0 && <span /> }
              </div>
            </div>
            <div className={ style.secondline }>
              <BarSize array={ colorsMock } colorName="Laranja" />
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
          <Flicking
            align="prev"
            bounce="100%"
          >
            <div className="panel">
              <DetailsCard
                gender={ gender }
                branch={ branch }
                details={ details }
              />
            </div>
            <div className="panel">
              <Spec specification={ specification } />
            </div>
          </Flicking>
        </section>
      </div>
    </div>
  );
}

export default productId;
