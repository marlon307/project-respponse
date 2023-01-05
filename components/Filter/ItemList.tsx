import React, { memo } from 'react';
import type { InputHTMLAttributes } from 'react';
import style from './style.module.scss';

interface PCtg extends InputHTMLAttributes<HTMLInputElement> {
  id: any;
  color?: string | undefined;
}

function ItemList({ color, ...props }: PCtg) {
  return (
    <label htmlFor={ props.id } className={ style.itemfilter }>
      <input
        type="checkbox"
        data-color={ color }
        defaultChecked={ props.checked }
        { ...props }
      />
      <span className={ style.filtername }>
        { props.value }
        { color && <span style={ { backgroundColor: `${color}` } } /> }
      </span>
    </label>
  );
}

export default memo(ItemList);
