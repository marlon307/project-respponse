import React from 'react';
import Link from 'next/link';
import CustomLink from '../../CustomLink';
import LoadingImage from '../../LoadImage';
import style from './style.module.scss';

type PCardCategory = {
  image: any;
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
            quality={ 60 }
            alt={ ctgName }
            width={ 64 }
            height={ 64 }
          />
        </figure>
        <span style={ { background: `${color}33` } }>{ ctgName }</span>
      </CustomLink>
    </Link>
  );
}

export default CardCategory;
