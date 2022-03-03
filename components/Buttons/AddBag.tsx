import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import style from './style.module.scss';
import Svg from 'assets/Svg';
import { addBag } from 'redux/redux-actions';
import type { PBtnAddBag, TObjectUserBag } from './types';

const AddBag = function AddBag({ productId, colorSelected, sizeSelected }: PBtnAddBag) {
  const { bagItems } = useSelector(({ user }: TObjectUserBag) => user);
  const dispatch = useDispatch();
  const [buttonActive, setbutonActive] = useState(false);
  const [activeMsg, setActiveMsg] = useState(false);

  function handleClick() {
    if (!buttonActive) {
      setActiveMsg(true);
      return;
    }

    const {
      id, title, type,
      mainImg, price, oldPrice,
      discount,
    } = productId;

    const index = bagItems.findIndex(
      (object) => object.id === id
        && object.color === colorSelected.color
        && object.size === sizeSelected,
    );

    let newArray = [];

    if (index >= 0) {
      bagItems[index].quantity += 1;

      newArray = [...bagItems];
    } else {
      newArray = [
        ...bagItems, {
          id,
          title,
          type,
          mainImg,
          ...colorSelected,
          size: sizeSelected,
          price,
          discount,
          oldPrice,
          quantity: 1,
          identifyBag: id + colorSelected.color + sizeSelected,
        }];
    }

    dispatch(addBag(newArray));
  }

  useEffect(() => {
    if (colorSelected.color && sizeSelected) {
      setbutonActive(true);
    }
    if (colorSelected.color && sizeSelected && activeMsg) {
      setActiveMsg(false);
    }
  }, [colorSelected.color, sizeSelected]);

  return (
    <div className="contBtn">
      { activeMsg && <span className="msdErr">Selecione uma cor e tamanho!</span> }
      <button
        className={ cx('button1', style.btn_t2) }
        type="button"
        onClick={ handleClick }
      >
        Adicionar a sacola
        <Svg icoName="bag" />
      </button>
    </div>
  );
};

export default AddBag;
