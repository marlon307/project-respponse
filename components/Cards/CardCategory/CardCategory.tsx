import React from 'react';
import Link from 'next/link';
import type { ImageProps } from 'next/image';
import CustomLink from '../../CustomLink';
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
      <CustomLink ariaLabel={ ctgName } className={ style.itencategory }>
        <figure className={ style.imgctg }>
          <LoadingImage
            src={ image }
            quality={ 80 }
            alt={ ctgName }
            width={ 70 }
            height={ 70 }
            sizes="(max-width: 100px)"
          />
        </figure>
        <span style={ { background: `${color}33` } }>{ ctgName }</span>
      </CustomLink>
    </Link>
  );
}

export default CardCategory;
