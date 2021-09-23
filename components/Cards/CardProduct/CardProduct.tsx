import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './style.module.scss';
import testeImage from '../../../assets/img/etty-fidele-l5rez6X2m8k-unsplash 1.png';
import CardInfo from '../CardInfo/CardInfo';

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
          <Image
            src={ testeImage }
            placeholder="blur"
            alt="Product name"
            layout="responsive"
            quality={ 85 }
            width={ 300 }
            height={ 450 }
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
