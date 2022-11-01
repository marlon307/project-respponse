import React, { RefObject } from 'react';
import style from './style.module.scss';

interface Props {
  reference: RefObject<HTMLDivElement>
}

export function ButtonNext({ reference }: Props) {
  function next() {
    if (reference.current !== null) {
      reference.current.scrollLeft += reference.current.offsetWidth;
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

export function ButtonPrev({ reference }: Props) {
  function prev() {
    if (reference.current !== null) {
      reference.current.scrollLeft -= reference.current.offsetWidth;
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
