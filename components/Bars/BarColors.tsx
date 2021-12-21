import React, { useCallback } from 'react';
import style from './style.module.scss';

interface IObjectsColor {
  colorName: string;
  color: string;
}

type PBarColors = {
  array: Array<IObjectsColor>;
  execFunction: Function
}

const BarColors = function BarColors({ array, execFunction }: PBarColors) {
  const handleClick = useCallback((color: String) => {
    execFunction(color);
  }, []);

  return (
    <div className={ style.barcolor } title="Cores">
      { array !== undefined
        && array.map(({ colorName, color }) => (
          <button type="button" key={ color }>
            <label htmlFor={ colorName }>
              <input
                id={ colorName }
                onClick={ () => handleClick(color) }
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
};

export default BarColors;
