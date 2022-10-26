import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { ImageProps } from 'next/image';
import style from './style.module.scss';
// import LoadingImage from '../../LoadImage';

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
          <Image
            src={ image }
            quality={ 80 }
            alt={ ctgName }
            sizes="70px"
          />
        </figure>
        <span style={ { background: `${color}1a` } }>{ ctgName }</span>
      </a>
    </Link>
  );
}

export default CardCategory;
