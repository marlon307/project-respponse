import React, { useCallback } from 'react';
import style from './style.module.scss';

interface IObjectsColor {
  idc: string;
  color_name: string;
  color: string;
  product_option: number
}

interface Props {
  array: Array<IObjectsColor>;
  execFunction: Function
}

function BarColors({ array, execFunction }: Props) {
  const handleClick = useCallback((object: Object) => {
    execFunction(object);
  }, [execFunction]);

  return (
    <div className={ style.barcolor } title="Cores">
      { array !== undefined
        && array.map(({
          idc, color_name, color, product_option: option,
        }, index) => (
          <button type="button" key={ color }>
            <label htmlFor={ idc }>
              <input
                id={ idc }
                onClick={ () => handleClick({
                  color, color_name, index, option,
                }) }
                type="radio"
                name="color"
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
