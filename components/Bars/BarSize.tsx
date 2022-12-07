'use client';

import React from 'react';
import { checkSizeAvailable } from '../../hooks/useCheckAvailable';
import style from './style.module.scss';

interface IObject {
  idc: string;
  sizes: Object;
  color: string;
}

type TProps = {
  array: Array<IObject>;
  color: string;
};

function BarSize({ array, color }: TProps) {
  const itemSizes = array.find((object) => object.color === color)!;
  const arraySize: string[] = Object.keys(itemSizes.sizes);

  function handleClick() {
    const value = document.querySelector('input[name="color"]:checked');
    checkSizeAvailable(array, value?.getAttribute('data-color')!);
  }

  return (
    <div className={ style.barsize }>
      { arraySize?.map((sizeName) => (
        <label htmlFor={ sizeName } key={ sizeName }>
          <input
            type="radio"
            name="size"
            id={ sizeName }
            onClick={ handleClick }
          />
          <span>{ sizeName }</span>
        </label>
      )) }
    </div>
  );
}

export default BarSize;
