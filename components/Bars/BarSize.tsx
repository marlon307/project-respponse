import React from 'react';
import style from './sass/size.module.scss';

interface IObject {
  size: Object
  colorName: String
}

type IProps = {
  array: Array<IObject>;
  colorName: string
}

function BarSize({ array, colorName }: IProps) {
  const { size } = array.filter((object) => object.colorName === colorName)[0];
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
}

export default BarSize;
