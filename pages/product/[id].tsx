import React, { useState, useEffect, createRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import BarColors from '../../components/Bars/BarColors';
import style from './style.module.scss';
import BarSize from '../../components/Bars/BarSize';
import AddBag from '../../components/Buttons/AddBag';
import { DetailsCard, Spec } from '../../components/Cards';
import LoadingImage from '../../components/LoadImage';
import { mockCards } from '../../service/mockCards';
// import { BtnPrevNext } from '../../components/Buttons';
import { checkColorAvailable, checkSizeAvailable } from '../../hooks/useCheckAvailable';

type TPopsPg = {
  pgProps: {
    id: Number;
    title: string;
    type: string;
    price: Number;
    descrtion: string;
    branch: string;
    gender: string;
    mainImg: Object;
    discount: Number;
    oldPrice: Number;
    details: Object;
    specification: Object;
    options: Array<{
      idc: string;
      colorName: string;
      color: string;
      size: Object;
      imgs: Array<Object>;
    }>
  };
}

function productId({ pgProps }: TPopsPg) {
  const slideRefProductImg = createRef<AliceCarousel>();
  const [itemdrag, setItemDrag] = useState('detail');
  const [sizeChecked, setSizeChecked] = useState('');
  const [colorChecked, setColorChecked] = useState({
    color: '',
    colorName: '',
  });

  const {
    title, type, price, descrtion, branch, gender, discount,
    oldPrice, details, specification, options,
  } = pgProps;

  useEffect(() => {
    checkSizeAvailable(options, colorChecked.color);
    checkColorAvailable(options, sizeChecked);
  }, [colorChecked, sizeChecked]);

  return (
    <div className={ style.contprod }>
      <div className={ style.slide }>
        {/* <div className={ style.buttons }>
          <BtnPrevNext typePrevOrNext="prev" reference={ slideRefProductImg } />
          <BtnPrevNext typePrevOrNext="next" reference={ slideRefProductImg } />
        </div> */}
        <AliceCarousel
          autoWidth
          infinite
          disableButtonsControls
          disableDotsControls
          ref={ slideRefProductImg }
        >
          { options !== undefined && options[0].imgs.map(({ urlImg, imgid }: any) => (
            <figure key={ imgid }>
              <LoadingImage
                url={ urlImg }
                quality={ 90 }
                alt={ title }
                width={ 100 }
                height={ 100 }
              />
            </figure>
          )) }
        </AliceCarousel>
      </div>
      <div className={ style.maincontentinfo }>
        <div className={ style.infodesc }>
          <div className={ style.primaryline }>
            <div className={ style.titles }>
              <h1>{ type }</h1>
              <h2>{ title }</h2>
            </div>
            <div className={ style.price }>
              <span data-oldprice={
                discount ? oldPrice.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                }) : ''
              }
              >
                de
              </span>
              { discount > 0 && (
                <h4>
                  { price.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  }) }
                </h4>
              ) }
            </div>
          </div>
          <div className={ style.barcolor }>
            <BarColors
              array={ options }
              execFunction={ setColorChecked }
            />
          </div>
          <div className={ style.mindetail }>
            <p>
              { descrtion }
            </p>
          </div>
          <div className={ style.secondline }>
            <BarSize
              array={ options }
              color={ colorChecked.color === '' ? options[0].color : colorChecked.color }
              execFunction={ setSizeChecked }
            />
          </div>
          <AddBag
            productId={ pgProps }
            colorSelected={ colorChecked }
            sizeSelected={ sizeChecked }
          />
        </div>
        <div className={ style.more }>
          <div className={ style.moreoptions }>
            <button
              aria-hidden={ itemdrag === 'detail' }
              type="button"
              onClick={ () => setItemDrag('detail') }
            >
              Detalhes
            </button>
            <button
              aria-hidden={ itemdrag === 'similarprod' }
              type="button"
              onClick={ () => setItemDrag('similarprod') }
            >
              Produtos Similares
            </button>
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default productId;

export async function getStaticProps({ params }: any) {
  const index = Number(params.id);

  const pgProps = await mockCards[index];

  return {
    props: { pgProps },
  };
}

export async function getStaticPaths() {
  const paths = await mockCards.map(({ id }) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
}
