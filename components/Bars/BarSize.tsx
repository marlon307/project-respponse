import React, { useCallback } from 'react';
import style from './style.module.scss';

interface IObject {
  size: Object;
  color: string;
}

type TProps = {
  array: Array<IObject>;
  color: string;
  execFunction: Function;
};

function BarSize({ array, color, execFunction }: TProps) {
  const itemSizes = array.find((object) => object.color === color)!;
  const arraySize = itemSizes && Object.keys(itemSizes.size);

  const handleClick = useCallback((sizeSelected: string) => {
    execFunction(sizeSelected);
  }, [execFunction]);

  return (
    <div className={ style.barsize }>
      { arraySize?.map((sizeName) => (
        <label htmlFor={ sizeName } key={ sizeName }>
          <input
            type="radio"
            name="size"
            id={ sizeName }
            onClick={ () => handleClick(sizeName) }
          />
          <span>{ sizeName }</span>
        </label>
      )) }
    </div>
  );
}

export default BarSize;
