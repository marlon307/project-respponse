import React, { useCallback } from 'react';
import style from './style.module.scss';

interface IObjectsColor {
  idc: string;
  colorName: string;
  color: string;
  option_id: number
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
          idc, colorName, color, option_id: option,
        }, index) => (
          <button type="button" key={ color }>
            <label htmlFor={ idc }>
              <input
                id={ idc }
                onClick={ () => handleClick({
                  color, colorName, index, option,
                }) }
                type="radio"
                name="color"
              />
              <span
                title={ colorName }
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
