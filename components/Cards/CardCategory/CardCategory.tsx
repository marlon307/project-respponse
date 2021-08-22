import React from 'react';
import Image from 'next/image';
import style from './style.module.scss';

type Props = {
  id: string;
  image: any;
  ctgName: string;
}

function CardCategory({ id, image, ctgName }: Props) {
  return (
    <div className={ style.itencategory }>
      <label htmlFor={ id }>
        <input id={ id } type="radio" name="category" />
        <Image src={ image } />
        <span>{ ctgName }</span>
      </label>
    </div>
  );
}

export default CardCategory;
