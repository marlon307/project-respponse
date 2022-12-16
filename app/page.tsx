import React from 'react';
import Image from 'next/image';
import { CardCategory } from '../components/Cards';
import { api2 } from '../service/api';
import CardProduct from '../components/Cards/CardProduct/CardProduct';
import { BtnRedirect } from '../components/Buttons';
import type { IPropsHome } from '../@types/typesIndex';
import style from '../Sass/style.module.scss';

async function getData() {
  const newdata = await api2.get('/product')
    .catch((error) => ({ data: error.message }));

  return {
    categorys: newdata.data.categorys,
    slides: newdata.data.slides,
    list_product: newdata.data.list_products, // newdata.data.list,
    mockPromotions: [], // data.mockPromotions
    // revalidated: true,
  };
}

export default async function Page() {
  const props: IPropsHome = await getData();
  // const props: IPropsHome = use(getData());
  // const props: IPropsHome = teste;
  // console.log(props);
  return (
    <>
      <div className={ style.banner }>
        <div className={ style.panel }>
          { props?.slides?.map(({
            id, url_image, title, background, description,
          }, index) => (
            <figure key={ id } style={ { background: `${background}` } }>
              <Image
                src={ url_image }
                quality={ 85 }
                alt={ title }
                loading={ index === 0 ? 'eager' : 'lazy' }
                priority={ index === 0 }
                fill
              />
              <figcaption>
                <h1>{ title }</h1>
                <p>
                  { description }
                </p>
              </figcaption>
            </figure>
          )) }
        </div>
      </div>
      <div className={ style.listctg }>
        <h2>Categorias</h2>
        <div className={ style.slide_container }>
          { props?.categorys?.map(({
            id, url_image, category_name, color, path,
          }) => (
            <CardCategory
              key={ id }
              image={ url_image }
              ctgName={ category_name }
              path={ path }
              color={ color! }
            />
          )) }
        </div>
      </div>
      <div className={ style.highlights }>
        <h2>Destaques</h2>
        <div className={ style.slide_container }>
          { props?.list_product?.map((object: IPropsHome['list_product'][0]) => (
            <div className={ style.panel } key={ object.id }>
              <CardProduct
                key={ object.id }
                objectProduct={ object }
              />
            </div>
          )) }
        </div>
      </div>
      <div className={ style.promotions }>
        <h2>Promoções</h2>
        <div className={ style.panel }>
          { props?.mockPromotions?.map(({
            id, img, title, path,
          }: any) => (
            <figure key={ id }>
              <Image
                src={ img }
                quality={ 85 }
                alt={ title }
                loading="eager"
                sizes="(max-width: 500px) 304.56px, 1486.52px"
                fill
              />
              <figcaption>
                <h4>{ title }</h4>
                <BtnRedirect path={ `/category/${path}` } titleBtn="Compre" />
              </figcaption>
            </figure>
          )) }
        </div>
      </div>
    </>
  );
}
