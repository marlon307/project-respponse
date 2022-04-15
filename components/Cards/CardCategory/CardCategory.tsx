import React from 'react';
import Link from 'next/link';
import CustomLink from '../../CustomLink';
import LoadingImage from '../../LoadImage';
import style from './style.module.scss';

type PCardCategory = {
  image: any;
  ctgName: string;
  path: string;
};

function CardCategory({ image, ctgName, path }: PCardCategory) {
  return (
    <Link href={ `/category/${path}` } passHref>
      <CustomLink ariaLabel={ ctgName } className={ style.itencategory }>
        <figure className={ style.imgctg }>
          <LoadingImage
            url={ image }
            quality={ 60 }
            alt={ ctgName }
            width={ 100 }
            height={ 100 }
          />
        </figure>
        <span>{ ctgName }</span>
      </CustomLink>
    </Link>
  );
}

export default CardCategory;
