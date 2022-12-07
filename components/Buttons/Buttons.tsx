'use client';

import React from 'react';
import style from './style.module.scss';

interface Props {
  idElement: string
}

export function ButtonNext({ idElement }: Props) {
  function next() {
    const item = document.getElementById(idElement);
    if (item !== null) {
      item.scrollLeft += item.offsetWidth;
    }
  }
  return (
    <button
      className={ style.next }
      type="button"
      aria-label="Next"
      onClick={ next }
    />
  );
}

export function ButtonPrev({ idElement }: Props) {
  function prev() {
    const item = document.getElementById(idElement);
    if (item !== null) {
      item.scrollLeft -= item.offsetWidth;
    }
  }
  return (
    <button
      className={ style.prev }
      type="button"
      aria-label="Prev"
      onClick={ prev }
    />
  );
}
