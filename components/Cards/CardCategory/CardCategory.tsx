import React from 'react';
import Image from 'next/image';
import style from './style.module.scss';
import Female from '../../../assets/img/ian-dooley-iGh7qbW9kUM-unsplash 1.png';

function CardCategory() {
  return (
    <div className={ style.itencategory }>
      <label htmlFor="female">
        <input id="female" type="radio" name="category" />
        <Image src={ Female } />
        <span>Femenino</span>
      </label>
    </div>
  );
}

export default CardCategory;
