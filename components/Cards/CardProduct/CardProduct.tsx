import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './style.module.scss';
import testeImage from '../../../assets/img/ian-dooley-iGh7qbW9kUM-unsplash 12.png';
import CardInfo from '../CardInfo/CardInfo';

function CardProduct() {
  const product1 = 1;
  return (
    <Link
      href={ `product/${product1}` }
      as="/product/1"
    >
      <a className={ style.productcard }>
        <figure>
          <Image
            src={ testeImage }
            placeholder="blur"
            alt="Product name"
            layout="responsive"
            quality={ 85 }
            width={ 270 }
            height={ 400 }
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
