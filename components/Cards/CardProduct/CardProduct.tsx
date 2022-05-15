import React, { memo } from 'react';
import Link from 'next/link';
import LoadingImage from '../../LoadImage';
import CardInfo from '../CardInfo/CardInfo';
import style from './style.module.scss';
import { mockminObjectCards } from '../../../service/mockCards';

type PCardP = {
  id: number;
};

function CardProduct({ id }: PCardP) {
  const {
    type, title, mainImg, price, options, discount, oldPrice,
  } = mockminObjectCards[id];

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
            width={ 350 }
            height={ 400 }
            sizes="(max-width: 700px) 220px, 300px"
          />
        </figure>
        <div className={ style.infocont }>
          <div className={ style.info }>
            <div className={ style.primaryline }>
              <span>{ type }</span>
              <div className={ style.colors }>
                { colors!
                  && colors.map((_null, index) => {
                    const value = Object.values(colors![index]);
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
