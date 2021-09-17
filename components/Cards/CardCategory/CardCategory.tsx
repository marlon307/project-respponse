import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from './style.module.scss';

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
            <Image
              src={ image }
              placeholder="blur"
              quality={ 60 }
              alt={ ctgName }
              layout="responsive"
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
