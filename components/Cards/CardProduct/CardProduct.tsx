import React, { memo } from 'react';
import Link from 'next/link';
import { mockminObjectCards } from 'service/mockCards';
import LoadingImage from '../../LoadImage';
import CardInfo from '../CardInfo/CardInfo';
import style from './style.module.scss';

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
            url={ mainImg }
            quality={ 85 }
            alt={ title }
            width={ 350 }
            height={ 400 }
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
}

export default memo(CardProduct);
