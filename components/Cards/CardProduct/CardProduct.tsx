import React from 'react';
import Link from 'next/link';
import style from './style.module.scss';
import CardInfo from '../CardInfo/CardInfo';
import LoadingImage from '../../LoadImage';
import { mockminObjectCards } from '../../../service/mockCards';

type PCardP = {
  id: number;
}

const CardProduct = function CardProduct({ id }: PCardP) {
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
            url={ mainImg }
            quality={ 85 }
            alt={ title }
          />
        </figure>
        <div className={ style.infocont }>
          <CardInfo
            type={ type }
            title={ title }
            price={ price }
            colors={ options }
            discount={ discount }
            oldPrice={ oldPrice }
          />
        </div>
      </a>
    </Link>
  );
};

export default CardProduct;
