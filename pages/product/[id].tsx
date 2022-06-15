import React, { useState, useEffect } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Swiper, SwiperSlide } from 'swiper/react';
import LoadingImage from '../../components/LoadImage';
import { checkColorAvailable, checkSizeAvailable } from '../../hooks/useCheckAvailable';
import { DetailsCard, Spec } from '../../components/Cards';
import AddBag from '../../components/Buttons/AddBag';
import BarSize from '../../components/Bars/BarSize';
import BarColors from '../../components/Bars/BarColors';
import { TypeProduct } from './product';
import api from '../../service/api';
import HeadSEO from '../../components/Head/HeadSEO';
import style from './style.module.scss';
import CardProduct from '../../components/Cards/CardProduct/CardProduct';

function ProductId({ pgProps, similar }: TypeProduct) {
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
    <>
      <HeadSEO
        title={ `${type} - ${title}` }
        description={ descrtion }
        keywords={ `${type} - ${title}, Roupas claras para caminhadas` }
      />
      <div className={ style.contprod }>
        <div className={ style.slide }>
          <Swiper
            className={ style.panels }
            slidesPerView="auto"
            wrapperTag="section"
          >
            { options[0].imgs.map(({ urlImg, imgid }: any) => (
              <SwiperSlide key={ imgid } className={ style.contsimg }>
                <figure>
                  <LoadingImage
                    src={ urlImg }
                    quality={ 80 }
                    alt={ title }
                    layout="fill"
                    loading={ imgid === 0 ? 'eager' : 'lazy' }
                    priority={ imgid === 0 }
                  />
                </figure>
              </SwiperSlide>
            )) }
          </Swiper>
        </div>
        <div className={ style.products_similar }>
          <h3>Produtos Similares</h3>
          <Swiper
            slidesPerView="auto"
            wrapperTag="section"
            spaceBetween={ 16 }
          >
            { similar.map((product: any) => (
              <SwiperSlide key={ product.id }>
                <CardProduct objectProduct={ product } />
              </SwiperSlide>
            )) }
          </Swiper>
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
    product: Array<any>,
    similar: Array<any>,
  }
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const productId = Number(params.id);

  const {
    data: { product, similar },
  }: TRequestProduct = await api.get(`/product/${productId}`)
    .catch((error) => ({ data: error.message }));

  const pgProps = product;

  return {
    props: { pgProps, similar },
    // revalidated: true,
  };
};

type TRequestArr = {
  data: {
    products: Array<{
      id: number,
    }>,
    similar: any
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: { products } }: TRequestArr = await api.get('/products')
    .catch(() => {
      throw new Error('Bad response from server');
    });

  const paths = products.map(({ id }: any) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
