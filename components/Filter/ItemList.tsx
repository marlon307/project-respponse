import React, { memo } from 'react';
import style from './style.module.scss';

type PCtg = {
  id: any;
  name: string;
  value: string;
  color?: string;
  execFunction?: React.MouseEventHandler<HTMLInputElement>;
  checked?: boolean;
};

function ItemList({
  name, id, value, execFunction, color, checked,
}: PCtg) {
  return (
    <label htmlFor={ id } className={ style.itemfilter }>
      <input
        type="checkbox"
        name={ name }
        id={ id }
        value={ value }
        onClick={ execFunction }
        data-color={ color }
        defaultChecked={ checked }
      />
      <div className={ style.filtername }>
        { value }
        { color && <span style={ { backgroundColor: `${color}` } } /> }
      </div>
    </label>
  );
}

ItemList.defaultProps = {
  execFunction: undefined,
  color: undefined,
  checked: false,
};

export default memo(ItemList);
