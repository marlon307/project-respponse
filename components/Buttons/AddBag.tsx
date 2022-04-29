import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import style from './style.module.scss';
import type { PBtnAddBag } from './types';
import Svg from '../../assets/Svg';
import { useAppDispatch } from '../../redux/hooks';
import { ADD_BAG_ITEMS } from '../../redux/actions';

function AddBag({ productId, colorSelected, sizeSelected }: PBtnAddBag) {
  const dispatch = useAppDispatch();
  const [buttonActive, setbutonActive] = useState(false);
  const [activeMsg, setActiveMsg] = useState(false);

  function handleClick() {
    if (!buttonActive) {
      setActiveMsg(true);
      return;
    }
    const {
      id, title, type, price, mainImg, discount, oldPrice,
    } = productId;
    dispatch(ADD_BAG_ITEMS({
      id,
      title,
      discount,
      oldPrice,
      type,
      price,
      mainImg,
      quantity: 1,
      ...colorSelected,
      size: sizeSelected,
      identifyBag: productId.id + colorSelected.color + sizeSelected,
    }));
  }

  useEffect(() => {
    if (colorSelected.color && sizeSelected) {
      setbutonActive(true);
    }
    if (colorSelected.color && sizeSelected && activeMsg) {
      setActiveMsg(false);
    }
  }, [activeMsg, colorSelected.color, sizeSelected]);

  return (
    <div className={ style.contbtn }>
      <button
        className={ cx(style.btn_t2, {
          [style.msgerr]: activeMsg,
        }) }
        type="button"
        onClick={ handleClick }
      >
        <span>{ activeMsg ? 'Selecione uma cor e tamanho!' : 'Adicionar a sacola' }</span>
        <Svg icoName="bag" />
      </button>
    </div>
  );
}

export default AddBag;
