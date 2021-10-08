import React from 'react';
import Link from 'next/link';
import style from './style.module.scss';
import LoadingImage from '../../LoadImage/LoadingImage';

type PCardCategory = {
  id: string;
  image: any;
  ctgName: string;
}

function CardCategory({ id, image, ctgName }: PCardCategory) {
  return (
    <div className={ style.itencategory }>
      <Link href={ `/category/${ctgName}` }>
        <a id={ id }>
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
}

export default CardCategory;
