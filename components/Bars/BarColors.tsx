'use client';

import React from 'react';
import type { IOptions } from '../../app/product/[id]/product';
import { checkColorAvailable, checkSizeAvailable } from '../../hooks/useCheckAvailable';
import style from './style.module.scss';

interface Props {
  array: IOptions[];
}

function BarColors({ array }: Props) {
  const handleClick = (object: IOptions) => {
    const oldPrice = document.getElementById('oldp')!;
    if (object.discount) {
      oldPrice.setAttribute('data-oldprice', object.discount.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }));
    } else {
      oldPrice.removeAttribute('data-oldprice');
    }

    const curretnPrice = document.getElementById('price')!;
    curretnPrice.textContent = object.price.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });

    const getAriaSlide = document.querySelectorAll('[aria-hidden]');
    getAriaSlide.forEach((element) => element.setAttribute('aria-hidden', 'true'));

    const selectSlideId = document.getElementById(`slide-${object.index}`);
    selectSlideId?.setAttribute('aria-hidden', 'false');

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
