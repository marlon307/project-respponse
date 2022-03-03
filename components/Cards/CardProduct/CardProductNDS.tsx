import React from 'react';
import Link from 'next/link';
import { mockminObjectCards } from 'service/mockCards';
import LoadingImage from '../../LoadImage';
import CardInfo from '../CardInfo/CardInfo';
import style from './style.module.scss';

type TCardNDS = {
  id: number;
}

const CardProductNDS = function CardProductNDS({ id }: TCardNDS) {
  const {
    type, title, mainImg, price, options, discount, oldPrice,
  } = mockminObjectCards[id];

  return (
    <Link
      href={ `/product/${id.toString()}` }
      as={ `/product/${id.toString()}` }
    >
      <a className={ style.productcardNDS } aria-label={ `${type} ${title}` }>
        <figure>
          <LoadingImage
            url={ mainImg }
            width={ 300 }
            height={ 300 }
            quality={ 85 }
            alt={ title }
          />
        </figure>
        <div className={ style.infocontND }>
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

export default CardProductNDS;
