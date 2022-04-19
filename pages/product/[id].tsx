import React, { useState, useEffect } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import LoadingImage from '../../components/LoadImage';
import { checkColorAvailable, checkSizeAvailable } from '../../hooks/useCheckAvailable';
import { DetailsCard, Spec } from '../../components/Cards';
import style from './style.module.scss';
import { mockCards } from '../../service/mockCards';
import AddBag from '../../components/Buttons/AddBag';
import BarSize from '../../components/Bars/BarSize';
import BarColors from '../../components/Bars/BarColors';
import { TypeProduct } from './product';

function ProductId({ pgProps }: TypeProduct) {
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
  }, [colorChecked, options, sizeChecked]);

  return (
    <div className={ style.contprod }>
      <div className={ style.slide }>
        { options !== undefined && options[0].imgs.map(({ urlImg, imgid }: any) => (
          <div key={ imgid } className={ style.constimg }>
            <figure>
              <LoadingImage
                src={ urlImg }
                quality={ 90 }
                alt={ title }
                width={ 100 }
                height={ 100 }
              />
            </figure>
          </div>
        )) }
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
                discount && oldPrice.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })
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
              aria-expanded={ itemdrag === 'detail' }
              type="button"
              onClick={ () => setItemDrag('detail') }
            >
              Detalhes
            </button>
            <button
              aria-expanded={ itemdrag === 'similarprod' }
              type="button"
              onClick={ () => setItemDrag('similarprod') }
            >
              Produtos Similares
            </button>
          </div>

          <div className={ style.detailsCarosel }>
            <DetailsCard
              gender={ gender }
              branch={ branch }
              details={ details }
            />
            <Spec specification={ specification } />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductId;

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const index = Number(params.id);

  const pgProps = await mockCards[index];

  return {
    props: { pgProps },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await mockCards.map(({ id }) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};
