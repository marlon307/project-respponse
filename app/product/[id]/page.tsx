import React from 'react';
// import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
// import { checkColorAvailable, checkSizeAvailable } from '../../hooks/useCheckAvailable';
import { DetailsCard, Spec } from '../../../components/Cards';
import AddBag from '../../../components/Buttons/AddBag';
import BarSize from '../../../components/Bars/BarSize';
import BarColors from '../../../components/Bars/BarColors';
import { api2 } from '../../../service/api';
import HeadSEO from '../../../components/Head/HeadSEO';
// import CardProduct from '../../components/Cards/CardProduct/CardProduct';
import { ButtonNext, ButtonPrev } from '../../../components/Buttons/Buttons';
import type { /* SimilarProduct, */ TypeProduct } from '../product';
// import type { ColorSelected } from '../../components/Buttons/types';
import style from './style.module.scss';

// interface Props {
//   product: TypeProduct,
//   similar: SimilarProduct['similar'],
// }
async function getProductID(prodID: number) {
  const { data }: any = await api2.get(`/product/${prodID}`)
    .catch((error) => ({ detail: error.message }));
  return data.product;
}

async function ProductId() {
  const product = await getProductID(3);

  const {
    title, category_name: ctgName, descrtion, gender,
    details, specifications, list_options: option,
  }: TypeProduct = product;

  const sizeChecked = '';
  const colorChecked = {
    color: '',
    colorName: '',
    index: 0,
    option: 0,
  };

  return (
    <>
      <HeadSEO
        title={ `${ctgName} - ${title}` }
        description={ descrtion }
        keywords={ `${ctgName} - ${title}` }
      />
      <div className={ style.contprod }>
        { option.map(({ images }, index: number) => (
          <div id={ `slide-${index}` } className={ style.slide } key={ images[0].imgid }>
            <ButtonNext idElement={ `${index}` } />
            <ButtonPrev idElement={ `${index}` } />
            <div
              id={ String(index) }
              className={ style.panels }
            >
              { images.map(({ urlImg, imgid }: any, indexImage: number) => (
                <figure key={ imgid } className={ style.contsimg }>
                  <Image
                    src={ urlImg }
                    quality={ 80 }
                    alt={ title }
                    loading={ indexImage === 0 ? 'eager' : 'lazy' }
                    priority={ indexImage === 0 }
                    sizes="100vw"
                    fill
                  />
                </figure>
              )) }
            </div>
          </div>
        )) }
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
              <BarColors array={ option } />
            </div>
            <div className={ style.secondline }>
              <BarSize
                array={ option }
                color={ option[colorChecked.index].color }
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
