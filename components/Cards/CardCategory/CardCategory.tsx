import React from 'react';
import Link from 'next/link';
import style from './style.module.scss';
import LoadingImage from '../../LoadImage';

type PCardCategory = {
  image: any;
  ctgName: string;
}

const CardCategory = function CardCategory({ image, ctgName }: PCardCategory) {
  return (
    <div className={ style.itencategory }>
      <Link href={ `/category/${ctgName}` }>
        <a>
          <figure className={ style.imgctg }>
            <LoadingImage
              url={ image }
              quality={ 60 }
              alt={ ctgName }
              width={ 130 }
              height={ 130 }
            />
          </figure>
          <span>{ ctgName }</span>
        </a>
      </Link>
    </div>
  );
};

export default CardCategory;
