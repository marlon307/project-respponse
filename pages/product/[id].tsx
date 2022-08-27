import React, { useState, useEffect } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import LoadingImage from '../../components/LoadImage';
import { checkColorAvailable, checkSizeAvailable } from '../../hooks/useCheckAvailable';
import { DetailsCard, Spec } from '../../components/Cards';
import AddBag from '../../components/Buttons/AddBag';
import BarSize from '../../components/Bars/BarSize';
import BarColors from '../../components/Bars/BarColors';
import { TypeProduct } from './product';
import api from '../../service/api';
import HeadSEO from '../../components/Head/HeadSEO';
import CardProduct from '../../components/Cards/CardProduct/CardProduct';
// import { SwiperButtonNext, SwiperButtonPrev } from '../../components/Buttons/SwiperButton';
import style from './style.module.scss';

function ProductId({ product, similar }: TypeProduct) {
  const [sizeChecked, setSizeChecked] = useState('');
  const [colorChecked, setColorChecked] = useState({
    color: '',
    colorName: '',
  });

  const {
    title, type, price, descrtion, branch, gender, discount,
    oldPrice, details, specification, options,
  } = product;

  useEffect(() => {
    checkSizeAvailable(options, colorChecked.color);
    checkColorAvailable(options, sizeChecked);
  }, [colorChecked, options, sizeChecked]);

  useEffect(() => {
    setSizeChecked('');
    setColorChecked({
      color: '',
      colorName: '',
    });
  }, [product.id]);

  return (
    <>
      <HeadSEO
        title={ `${type} - ${title}` }
        description={ descrtion }
        keywords={ `${type} - ${title}, Roupas claras para caminhadas` }
      />
      <div className={ style.contprod }>
        <div className={ style.slide }>
          <div className={ style.panels }>
            { options[0].imgs.map(({ urlImg, imgid }: any) => (
              <figure key={ imgid } className={ style.contsimg }>
                <LoadingImage
                  src={ urlImg }
                  quality={ 80 }
                  alt={ title }
                  layout="fill"
                />
              </figure>
            )) }
          </div>
        </div>
        <div className={ style.products_similar }>
          <h3>Produtos Similares</h3>
          <div className={ style.slide_prod }>
            { similar.map((productSimilar: TypeProduct['similar'][0]) => (
              <div className={ style.panel } key={ productSimilar.id }>
                <CardProduct objectProduct={ productSimilar } />
              </div>
            )) }
          </div>
        </div>
        <div className={ style.maincontentinfo }>
          <div className={ style.infodesc }>
            <div className={ style.primaryline }>
              <div className={ style.titles }>
                <h2>{ type }</h2>
                <h1>{ title }</h1>
              </div>
              <div className={ style.price }>
                <span data-oldprice={
                  discount && oldPrice.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                }
                />
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
            <div className={ style.secondline }>
              <BarSize
                array={ options }
                color={ colorChecked.color === '' ? options[0].color : colorChecked.color }
                execFunction={ setSizeChecked }
              />
            </div>
            <AddBag
              productId={ product }
              colorSelected={ colorChecked }
              sizeSelected={ sizeChecked }
            />
          </div>
          <div className={ style.more }>
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
    </>
  );
}

export default ProductId;

type TRequestProduct = {
  data: {
    product: TypeProduct['product'],
    similar: TypeProduct['similar'],
  }
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const {
    data: { product, similar },
  }: TRequestProduct = await api.get(`/product/${params.id}`)
    .catch((error) => ({ data: error.message }));

  return {
    props: { product, similar },
    // revalidated: true,
  };
};

type TRequestArr = {
  data: {
    products: Array<{
      id: number,
    }>,
    similar: TypeProduct['similar']
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: { products } }: TRequestArr = await api.get('/products')
    .catch(() => {
      throw new Error('Bad response from server');
    });

  const paths = products.map(({ id }: { id: number }) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
