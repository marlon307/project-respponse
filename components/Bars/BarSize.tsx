import React from 'react';
import style from './style.module.scss';

interface IObject {
  size: Object;
  colorName: string;
}

type TProps = {
  array: Array<IObject>;
  colorName: string;
}

const BarSize = function BarSize({ array, colorName }: TProps) {
  const { size } = array.find((object) => object.colorName === colorName)!;
  const arraySize = Object.keys(size);

  return (
    <div className={ style.barsize }>
      { arraySize.map((sizeName) => (
        <label htmlFor={ sizeName } key={ sizeName }>
          <input type="radio" name="size" id={ sizeName } />
          <span>{ sizeName }</span>
        </label>
      )) }
    </div>
  );
};

export default BarSize;
