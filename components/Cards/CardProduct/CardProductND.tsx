import React from 'react';
import Link from 'next/link';
import style from './style.module.scss';
import testeImage from '../../../assets/img/analia-baggiano-7_Gkf5JZRv4-unsplash 1.png';
import CardInfo from '../CardInfo/CardInfo';
import LoadingImage from '../../LoadImage';

type PCardND = {
  link: string;
}

function CardProductND({ link }: PCardND) {
  return (
    <Link
      href={ link }
      as={ link }
    >
      <a className={ style.productcardND }>
        <figure>
          <LoadingImage
            url={ testeImage }
            quality={ 85 }
            width={ 300 }
            height={ 450 }
            alt="Nome teste do produto"
          />
        </figure>
        <div className={ style.infocontND }>
          <CardInfo />
        </div>
      </a>
    </Link>
  );
}

export default CardProductND;
