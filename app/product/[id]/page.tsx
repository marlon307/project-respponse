import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { DetailsCard, Spec } from 'components/Cards';
import AddBag from 'components/Buttons/AddBag';
import BarSize from 'components/Bars/BarSize';
import BarColors from 'components/Bars/BarColors';
import { api2 } from 'service/api';
import { ButtonNext, ButtonPrev } from 'components/Buttons/Buttons';
import type { Props, TypeProduct } from './product';
import style from './style.module.scss';

// interface Props {
//   similar: SimilarProduct['similar'],
// }

async function getProductID(prodID: number): Promise<TypeProduct> {
  const { data } = await api2.get(`/product/${prodID}`)
    .catch(() => notFound());
  return data.product;
}

async function Page({ params }: Props) {
  const product = await getProductID(params.id);

  const {
    title, category_name: ctgName, gender,
    details, specifications, list_options: option,
  }: TypeProduct = product;

  return (
    <div className={ style.contprod }>
      { option.map(({ images }, index: number) => (
        <div
          id={ `slide-${index}` }
          className={ style.slide }
          aria-hidden={ !!index }
          key={ images[0].imgid }
        >
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
                  loading={ !indexImage && !index ? 'eager' : 'lazy' }
                  priority={ !indexImage && !index }
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
              <span
                id="oldp"
                data-oldprice={
                  option[0].discount > 0
                    ? (option[0].price + option[0].discount).toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    }) : null
                }
              />
              { option[0].price > 0 && (
                <h4 id="price">
                  { option[0].price.toLocaleString('pt-br', {
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
            <BarSize array={ option } />
          </div>
          <AddBag
            array={ option }
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
  );
}

export default Page;
