'use client';

import React from 'react';
import type { IOptions } from '../../app/product/product';
import { checkColorAvailable, checkSizeAvailable } from '../../hooks/useCheckAvailable';
import style from './style.module.scss';

interface Props {
  array: IOptions[];
}

function BarColors({ array }: Props) {
  const handleClick = (object: IOptions) => {
    checkSizeAvailable(array, object.color);
    checkColorAvailable(array, object.color);
  };

  return (
    <div className={ style.barcolor } title="Cores">
      { array !== undefined
        && array.map((option, index) => (
          <button type="button" key={ option.color }>
            <label htmlFor={ `color-${option.idc}` }>
              <input
                id={ `color-${option.idc}` }
                onClick={ () => handleClick({ ...option, index }) }
                type="radio"
                name="color"
                data-color={ option.color }
              />
              <span
                title={ option.colorName }
                style={ {
                  background: option.color,
                  borderColor: option.color,
                } }
              />
            </label>
          </button>
        )) }
    </div>
  );
}

export default BarColors;
