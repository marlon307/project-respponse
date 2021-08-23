/* eslint-disable no-empty */
import React from 'react';
import cx from 'classnames';
import style from './styleButton.module.scss';
import Svg from '../../assets/Svg';

type Props = {
  typePrevOrNext: String;
  reference: any;
}

function BtnPrevNext({ reference, typePrevOrNext }: Props) {
  async function btnPrevNext() {
    const { current } = reference;
    if (typePrevOrNext === 'next') {
      try {
        await current?.next();
      } catch (error) { }
    } else {
      try {
        await current?.prev();
      } catch (error) { }
    }
  }

  return (
    <button
      className={
        cx(typePrevOrNext === 'next' ? style.next : style.prev)
      }
      type="button"
      onClick={ btnPrevNext }
    >
      { typePrevOrNext === 'next'
        ? <Svg icoName="setRight" />
        : <Svg icoName="setLeft" /> }
    </button>
  );
}

export default BtnPrevNext;
