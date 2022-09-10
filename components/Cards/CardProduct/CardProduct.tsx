import React, { memo } from 'react';
import Link from 'next/link';
import LoadingImage from '../../LoadImage';
import type { ICardProduct } from '../../../types/typeCardProduct';
import style from './style.module.scss';

type TypeProduct = {
  objectProduct: ICardProduct['products'][0]
};

function CardProduct({ objectProduct }: TypeProduct) {
  const {
    id, type, title, mainImg, price, options, discount, oldPrice,
  } = objectProduct;

  return (
    <Link
      href={ `/product/${id.toString()}` }
      as={ `/product/${id.toString()}` }
    >
      <a className={ style.productcard } aria-label={ `${type} ${title}` }>
        <figure>
          <LoadingImage
            src={ mainImg }
            quality={ 85 }
            alt={ title }
            sizes="100vw"
          // sizes="(max-width: 360px) 152px, (max-width: 500px) 220px, 350px"
          />
        </figure>
        <div className={ style.infocont }>
          <div className={ style.info }>
            <div className={ style.primaryline }>
              <span>{ type }</span>
              <div className={ style.colors }>
                { options!
                  && options.map((_, index: number) => {
                    const value = Object.values(options![index]);
                    return (
                      <span
                        key={ value[0] }
                        title={ value[0] }
                        style={ { backgroundColor: `${value[1]}` } }
                      />
                    );
                  }) }
              </div>
            </div>
            <div className={ style.secondline }>
              <span>{ title }</span>
            </div>
            <div
              className={ style.price }
              data-oldprice={
                discount > 0 ? oldPrice.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                }) : ''
              }
            >
              <span>
                {
                  price.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                }
              </span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default memo(CardProduct);
