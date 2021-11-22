import React from 'react';
import cx from 'classnames';
import style from './style.module.scss';

type PBtnPrevNext = {
  typePrevOrNext: string;
  reference: any;
}

const BtnPrevNext = function BtnPrevNext({ reference, typePrevOrNext }: PBtnPrevNext) {
  async function btnPrevNext() {
    const { current } = reference;
    if (typePrevOrNext === 'next') {
      await current?.slideNext();
    } else {
      await current?.slidePrev();
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
    />
  );
};

export default BtnPrevNext;
