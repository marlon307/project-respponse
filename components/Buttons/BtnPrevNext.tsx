/* eslint-disable no-empty */
import React from 'react';
import cx from 'classnames';
import style from './styleButton.module.scss';
import Svg from '../../assets/Svg';

type PBtnPrevNext = {
  typePrevOrNext: String;
  reference: any;
}

function BtnPrevNext({ reference, typePrevOrNext }: PBtnPrevNext) {
  // current.control.activeIndex > 1
  async function btnPrevNext() {
    const { current } = reference;

    if (typePrevOrNext === 'next') {
      await current?.next()
        .catch(() => { });
    } else {
      await current?.prev()
        .catch(() => { });
    }
  }

  return (
    <button
      className={
        cx(typePrevOrNext === 'next' ? style.next : style.prev)
      }
      type="button"
      onClick={ btnPrevNext }
      aria-label={
        typePrevOrNext === 'next' ? 'Próximo' : 'Voltar'
      }
    >
      { typePrevOrNext === 'next'
        ? <Svg icoName="setRight" />
        : <Svg icoName="setLeft" /> }
    </button>
  );
}

export default BtnPrevNext;
