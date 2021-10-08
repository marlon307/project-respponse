import React from 'react';
import Link from 'next/link';
import style from './style.module.scss';
import testeImage from '../../../assets/img/kimiya-oveisi-7qis_qyDK4g-unsplash 1.png';
import CardInfo from '../CardInfo/CardInfo';
import LoadingImage from '../../LoadImage/LoadingImage';
// CardProductNotDescrtion

type TCardNDS = {
  link: string;
}

function CardProductNDS({ link }: TCardNDS) {
  return (
    <Link
      href={ link }
      as={ link }
    >
      <a className={ style.productcardNDS }>
        <figure>
          <LoadingImage
            url={ testeImage }
            quality={ 85 }
            width={ 300 }
            height={ 300 }
            alt="title"
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
