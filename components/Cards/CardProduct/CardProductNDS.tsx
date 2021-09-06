import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './style.module.scss';
import testeImage from '../../../assets/img/kimiya-oveisi-7qis_qyDK4g-unsplash 1.png';
import CardInfo from '../CardInfo/CardInfo';
// CardProductNotDescrtion
function CardProductNDS() {
  const product1 = 1;
  return (
    <Link
      href={ `product/${product1}` }
      as="/product/1"
    >
      <a className={ style.productcardNDS }>
        <figure>
          <Image
            src={ testeImage }
            placeholder="blur"
            alt="Product name"
            layout="responsive"
            quality={ 85 }
            width={ 300 }
            height={ 300 }
          />
        </figure>
        <div className={ style.infocontND }>
          <CardInfo />
        </div>
      </a>
    </Link>
  );
}

export default CardProductNDS;
