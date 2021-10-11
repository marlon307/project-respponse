import React from 'react';
import Link from 'next/link';
import style from './style.module.scss';
import CardInfo from '../CardInfo/CardInfo';
import LoadingImage from '../../LoadImage';
import { mockminObjectCards } from '../../../service/mockCards';

type TCardNDS = {
  id: number;
}

function CardProductNDS({ id }: TCardNDS) {
  const {
    type, title, mainImg, price, options, discount,
  } = mockminObjectCards[id];

  return (
    <Link
      href={ `/product/${id.toString()}` }
      as={ `/product/${id.toString()}` }
    >
      <a className={ style.productcardNDS }>
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
          />
        </div>
      </a>
    </Link>
  );
}

export default CardProductNDS;
