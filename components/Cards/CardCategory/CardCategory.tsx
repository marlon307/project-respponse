import React from 'react';
import Link from 'next/link';
import type { ImageProps } from 'next/image';
import LoadingImage from '../../LoadImage';
import style from './style.module.scss';

type PCardCategory = {
  image: ImageProps['src'];
  ctgName: string;
  path: string;
  color: string;
};

function CardCategory({
  image, ctgName, path, color,
}: PCardCategory) {
  return (
    <Link href={ `/category/${path}` } passHref>
      <a aria-label={ ctgName } className={ style.itencategory }>
        <figure className={ style.imgctg }>
          <LoadingImage
            src={ image }
            quality={ 80 }
            alt={ ctgName }
            width={ 70 }
            height={ 70 }
            sizes="70px"
          />
        </figure>
        <span style={ { background: `${color}1a` } }>{ ctgName }</span>
      </a>
    </Link>
  );
}

export default CardCategory;
