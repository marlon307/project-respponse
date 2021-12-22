import React from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import style from './style.module.scss';
import Svg from '../../assets/Svg';
import { addBag } from '../../redux/redux-actions';

type TObjectProduct = {
  id: number;
  title: string;
  type: string;
  mainImg: any;
  price: number;
  discount: number;
  options: Array<{
    color: string;
  }>
}

type PBtnAddBag = {
  productId: TObjectProduct;
  colorSelected: string;
  sizeSelected: string;
}

type TObjectUserBag = {
  user: {
    bagItems: Array<{
      quantity: number;
    }>
  }
}

const AddBag = function AddBag({ productId, colorSelected, sizeSelected }: PBtnAddBag) {
  const { bagItems } = useSelector(({ user }: TObjectUserBag) => user);
  const dispatch = useDispatch();

  function handleClick() {
    const {
      id, title, type,
      mainImg, price,
      discount, options,
    } = productId!;

    const { colorName }: any = options.find(({ color }) => color === colorSelected);

    const checkItembag: any = bagItems.findIndex(
      (object: any) => object.id === id
        && object.color === colorSelected
        && object.size === sizeSelected,
    );

    let newArray = [];

    if (checkItembag >= 0) {
      bagItems[checkItembag].quantity += 1;

      newArray = [...bagItems];
    } else {
      newArray = [
        ...bagItems, {
          id,
          title,
          type,
          mainImg,
          colorName,
          color: colorSelected,
          size: sizeSelected,
          price,
          discount,
          quantity: 1,
        }];
    }

    dispatch(addBag(newArray));
  }

  return (
    <button
      className={ cx('button1', style.btn_t2) }
      type="button"
      onClick={ handleClick }
    >
      Adicionar a sacola
      <Svg icoName="bag" />
    </button>
  );
};

export default AddBag;
