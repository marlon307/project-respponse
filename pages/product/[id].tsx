import React, { useState, useEffect } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import LoadingImage from '../../components/LoadImage';
import { checkColorAvailable, checkSizeAvailable } from '../../hooks/useCheckAvailable';
import { DetailsCard, Spec } from '../../components/Cards';
import AddBag from '../../components/Buttons/AddBag';
import BarSize from '../../components/Bars/BarSize';
import BarColors from '../../components/Bars/BarColors';
import { SimilarProduct, TypeProduct } from './product';
import { api2 } from '../../service/api';
import HeadSEO from '../../components/Head/HeadSEO';
// import CardProduct from '../../components/Cards/CardProduct/CardProduct';
// import { SwiperButtonNext, SwiperButtonPrev } from '../../components/Buttons/SwiperButton';
import style from './style.module.scss';
import { ColorSelected } from '../../components/Buttons/types';

interface Props {
  product: TypeProduct
}

function ProductId({ product/* , similar */ }: Props) {
  const {
    title, category_name: ctgName, descrtion, gender,
    details, specifications, list_options: option,
  } = product;

  const [sizeChecked, setSizeChecked] = useState('');
  const [colorChecked, setColorChecked] = useState<ColorSelected>({
    color: '',
    colorName: '',
    index: 0,
    option: 0,
  });

  useEffect(() => {
    checkSizeAvailable(option, colorChecked.color);
    checkColorAvailable(option, sizeChecked);
  }, [colorChecked, option, sizeChecked]);

  useEffect(() => {
    setSizeChecked('');
    setColorChecked({
      color: '',
      colorName: '',
      index: 0,
      option: 0,
    });
  }, [product.id]);

  return (
    <>
      <HeadSEO
        title={ `${ctgName} - ${title}` }
        description={ descrtion }
        keywords={ `${ctgName} - ${title}, Roupas claras para caminhadas` }
      />
      <div className={ style.contprod }>
        <div className={ style.slide }>
          <div className={ style.panels }>
            { option[colorChecked.index].images.map(({ urlImg, imgid }: any) => (
              <figure key={ imgid } className={ style.contsimg }>
                <LoadingImage
                  src={ urlImg }
                  quality={ 80 }
                  alt={ title }
                />
              </figure>
            )) }
          </div>
        </div>
        <div className={ style.products_similar }>
          <h3>Produtos Similares</h3>
          <div className={ style.slide_prod }>
            {/* { similar.map((productSimilar: TypeProduct['similar'][0]) => (
              <div className={ style.panel } key={ productSimilar.id }>
                <CardProduct objectProduct={ productSimilar } />
              </div>
            )) } */}
          </div>
        </div>
        <div className={ style.maincontentinfo }>
          <div className={ style.infodesc }>
            <div className={ style.primaryline }>
              <div className={ style.titles }>
                <h2>{ ctgName }</h2>
                <h1>{ title }</h1>
              </div>
              <div className={ style.price }>
                <span data-oldprice={
                  option[colorChecked.index].discount > 0
                    ? option[colorChecked.index].oldPrice.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    }) : null
                }
                />
                { option[colorChecked.index].price > 0 && (
                  <h4>
                    { option[colorChecked.index].price.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    }) }
                  </h4>
                ) }
              </div>
            </div>
            <div className={ style.barcolor }>
              <BarColors
                array={ option }
                execFunction={ setColorChecked }
              />
            </div>
            <div className={ style.secondline }>
              <BarSize
                array={ option }
                color={ option[colorChecked.index].color }
                execFunction={ setSizeChecked }
              />
            </div>
            <AddBag
              option={ option[colorChecked.index] }
              sizeSelected={ sizeChecked }
              infoTitelAndType={ {
                title,
                ctgName,
              } }
            />
          </div>
          <div className={ style.more }>
            <div className={ style.detailsCarosel }>
              <DetailsCard
                gender={ gender }
                branch="Marca"
                details={ details }
              />
              <Spec specifications={ specifications } />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductId;

interface TRequestProduct {
  data: {
    product: TypeProduct,
    similar: SimilarProduct['similar'],
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { data }: TRequestProduct = await api2.get(`/product/${params.id}`)
    .catch((error) => ({ data: error.message }));

  return {
    props: { product: data.product },
    // revalidated: true,
  };
};

interface TRequestArr {
  data: {
    list: TypeProduct[];
    similar: SimilarProduct['similar'];
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data }: TRequestArr = await api2.get('/product')
    .catch(() => {
      throw new Error('Bad response from server');
    });

  const paths = data.list.map(({ id }: { id: number }) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: true,
  };
};
