import React from 'react';
import Link from 'next/link';
import style from './style.module.scss';
import testeImage from '../../../assets/img/etty-fidele-l5rez6X2m8k-unsplash 1.png';
import CardInfo from '../CardInfo/CardInfo';
import LoadingImage from '../../LoadImage/LoadingImage';

type PCardP = {
  link: string;
}

function CardProduct({ link }: PCardP) {
  return (
    <Link
      href={ link }
      as={ link }
    >
      <a className={ style.productcard }>
        <figure>
          <LoadingImage
            url={ testeImage }
            width={ 300 }
            height={ 450 }
            quality={ 85 }
            alt="title"
          />
        </figure>
        <div className={ style.infocont }>
          <CardInfo />
        </div>
      </a>
    </Link>
  );
}

export default CardProduct;
