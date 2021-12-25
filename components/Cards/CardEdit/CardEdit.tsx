import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import BarColors from '../../Bars/BarColors';
import Qtd from '../../Bars/Qtd';
import style from './style.module.scss';
import BarSize from '../../Bars/BarSize';
import mockColors from '../../../service/mockColor';
import LoadingImage from '../../LoadImage';

type TObjectUserBag = {
  user: {
    bagItems: Array<{
      id: number;
      title: string;
      type: string;
      mainImg: string | any;
      price: number;
      oldPrice: number;
      colorName: string;
      color: string;
      size: string;
      quantity: number;
      discount: number
      identifyBag: string;
    }>
    itemEditBag: {
      id: number;
      identifyBag: string;
    }
  };
}

const CardEdit = function CardEdit() {
  const [infoBagItem, setInfoBagitem] = useState({
    type: '',
    title: '',
    quantity: 0,
  });
  const { bagItems, itemEditBag } = useSelector(({ user }: TObjectUserBag) => user);

  useEffect(() => {
    const findItemBag = bagItems
      .find(({ identifyBag }) => identifyBag === itemEditBag.identifyBag)!;
    setInfoBagitem(findItemBag);
  }, []);

  return (
    <div className={ style.edit }>
      <div className={ style.visualcont }>
        <div className={ style.contimg }>
          <LoadingImage url={ mockColors[0].imgs[0].urlImg } alt="title" />
        </div>
        <BarColors array={ mockColors } execFunction={ () => { } } />
      </div>
      <BarSize array={ mockColors } color="#fff" execFunction={ () => { } } />
      <div className={ style.secondline }>
        <Qtd quantityProduct={ infoBagItem.quantity } />
        <div className={ style.titles }>
          <h1>{ infoBagItem.type }</h1>
          <h2>{ infoBagItem.title }</h2>
        </div>
      </div>
    </div>
  );
};

export default CardEdit;
