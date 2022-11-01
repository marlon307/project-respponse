import React, { useState, useEffect, useRef } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import { checkColorAvailable, checkSizeAvailable } from '../../hooks/useCheckAvailable';
import { DetailsCard, Spec } from '../../components/Cards';
import AddBag from '../../components/Buttons/AddBag';
import BarSize from '../../components/Bars/BarSize';
import BarColors from '../../components/Bars/BarColors';
import { SimilarProduct, TypeProduct } from './product';
import { api2 } from '../../service/api';
import HeadSEO from '../../components/Head/HeadSEO';
// import CardProduct from '../../components/Cards/CardProduct/CardProduct';
import { ButtonNext, ButtonPrev } from '../../components/Buttons/Buttons';
import { ColorSelected } from '../../components/Buttons/types';
import style from './style.module.scss';

interface Props {
  product: TypeProduct,
  similar: SimilarProduct['similar'],
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ProductId({ product, similar }: Props) {
  const {
    title, category_name: ctgName, descrtion, gender,
    details, specifications, list_options: option,
  } = product;

  const slide = useRef<HTMLDivElement | null>(null);
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
          <ButtonNext reference={ slide } />
          <ButtonPrev reference={ slide } />
          <div className={ style.panels } ref={ slide }>
            { option[colorChecked.index].images.map(({ urlImg, imgid }: any) => (
              <figure key={ imgid } className={ style.contsimg }>
                <Image
                  src={ urlImg }
                  quality={ 80 }
                  alt={ title }
                  fill
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

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { data }: any = await api2.get(`/product/${params.id}`)
    .catch((error) => ({ detail: error.message }));
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

// ProductId.defaultProps = {
//   similar: [],
// };
