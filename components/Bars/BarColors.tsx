import React from 'react';
import style from './styles/style.module.scss';

interface IObjectsColor {
  colorName: string;
  color: string;
}

type PBarColors = {
  array: Array<IObjectsColor>
}

function BarColors({ array }: PBarColors) {
  return (
    <div className={ style.barcolor } title="Cores">
      { array.map(({ colorName, color }) => (
        <label htmlFor={ colorName } key={ color }>
          <input id={ colorName } type="radio" name="color" />
          <span
            title={ colorName }
            style={ {
              background: color,
              borderColor: color,
            } }
          />
        </label>
      )) }
    </div>
  );
}

export default BarColors;
