import React, { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import LoadingImage from '../../LoadImage';
import type { ICardProduct } from '../../../@types/typeCardProduct';
import style from './style.module.scss';

type TypeProduct = {
  objectProduct: ICardProduct['products'][0]
};

function CardProduct({ objectProduct }: TypeProduct) {
  const {
    id, category_name: ctgName, title, color_list: colorList,
  } = objectProduct;

  return (
    <Link
      className={ style.productcard }
      href={ `/product/${id.toString()}` }
      aria-label={ `${ctgName} ${title}` }
      as={ `/product/${id.toString()}` }
    >
      <figure>
        <Image
          src={ colorList[0].url_image }
          quality={ 85 }
          alt={ title }
          fill
          sizes="(max-width: 360px) 152px, (max-width: 500px) 220px, 300px"
        />
      </figure>
      <div className={ style.infocont }>
        <div className={ style.info }>
          <div className={ style.primaryline }>
            <span>{ ctgName }</span>
            <div className={ style.colors }>
              { colorList.map(({ color_name, color, id: idKey }) => (
                <span
                  key={ idKey }
                  title={ color_name }
                  style={ { backgroundColor: `${color}` } }
                />
              )) }
            </div>
          </div>
          <div className={ style.secondline }>
            <span>{ title }</span>
          </div>
          <div
            className={ style.price }
            data-oldprice={
              colorList[0].discount > 0
                ? (colorList[0].price + colorList[0].discount).toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                }) : ''
            }
          >
            <span>
              {
                colorList[0].price.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default memo(CardProduct);
