'use client';

import React from 'react';
import { checkColorAvailable, checkSizeAvailable } from '../../hooks/useCheckAvailable';
import style from './style.module.scss';

interface IObjectsColor {
  idc: string;
  sizes: Object;
  color: string;

}

interface Props {
  array: Array<IObjectsColor>;
  // execFunction: Function
}

function BarColors({ array }: Props) {
  const handleClick = (object: IObjectsColor) => {
    // execFunction(object);
    const value = document.querySelector('input[name="color"]:checked');
    const colorChecked = value?.getAttribute('data-color')!;

    checkSizeAvailable(array, object.color);
    checkColorAvailable(array, object.color);
  };

  return (
    <div className={ style.barcolor } title="Cores">
      { array !== undefined
        && array.map(({
          idc, color_name, color, product_option: option,
        }, index) => (
          <button type="button" key={ color }>
            <label htmlFor={ `color-${idc}` }>
              <input
                id={ `color-${idc}` }
                onClick={ () => handleClick({
                  color, color_name, index, option,
                }) }
                type="radio"
                name="color"
                data-color={ color }
              />
              <span
                title={ color_name }
                style={ {
                  background: color,
                  borderColor: color,
                } }
              />
            </label>
          </button>
        )) }
    </div>
  );
}

export default BarColors;
