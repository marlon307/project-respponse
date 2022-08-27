import React from 'react';
import style from './style.module.scss';

export function SwiperButtonNext() {
  return (
    <button
      className={ style.next }
      type="button"
      aria-label="Next"
      onClick={ () => { } }
    />
  );
}

export function SwiperButtonPrev() {
  return (
    <button
      className={ style.prev }
      type="button"
      aria-label="Prev"
      onClick={ () => { } }
    />
  );
}
