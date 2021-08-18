import React from 'react';
import style from './styles/barcolor.module.scss';

interface IObjectsColor {
  colorName: string;
  color: string;
}

interface IProps {
  arrayColor: Array<IObjectsColor>
}

function BarColors({ arrayColor }: IProps) {
  return (
    <div className={ style.barcolor } title="Cores">
      { arrayColor.map(({ colorName, color }) => (
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
