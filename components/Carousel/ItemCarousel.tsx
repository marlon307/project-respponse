import React from 'react';
import style from './styles/drag.module.scss';

export interface Props {
  children: any,
  width?: number,
  height?: number,
}

function ItemCarousel({ children, width, height }: Props) {
  return (
    <div
      className={ style.card }
      style={
        {
          width: width && `${width}ch`,
          height: height && `${height}ch`,
        }
      }
    >
      { children }
    </div>
  );
}

export default ItemCarousel;
