import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BarColors from '../../Bars/BarColors';
import Qtd from '../../Bars/Qtd';
import style from './style.module.scss';
import BarSize from '../../Bars/BarSize';
import mockColors from '../../../service/mockColor';
import { mockCards } from '../../../service/mockCards';
import LoadingImage from '../../LoadImage';
import { itemBagEdit } from '../../../redux/redux-actions';

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
      color: string;
    }
  };
}

const CardEdit = function CardEdit() {
  const { bagItems, itemEditBag } = useSelector(({ user }: TObjectUserBag) => user);
  const dispatch = useDispatch();

  const [infoBagItem, setInfoBagitem] = useState({
    id: itemEditBag.id,
    type: '',
    title: '',
    quantity: 0,
    colorName: '',
    color: '',
    size: '',
    identifyBag: itemEditBag.identifyBag,
  });

  useEffect(() => {
    const findItemBag = bagItems
      .find(({ identifyBag }) => identifyBag === itemEditBag.identifyBag)!;
    setInfoBagitem(findItemBag);

    return () => {
      dispatch(itemBagEdit(infoBagItem));
    };
  }, []);

  return (
    <div className={ style.edit }>
      <div className={ style.visualcont }>
        <div className={ style.contimg }>
          <LoadingImage url={ mockColors[0].imgs[0].urlImg } alt="title" />
        </div>
        <BarColors array={ mockCards[itemEditBag.id].options } execFunction={ () => { } } />
      </div>
      <BarSize
        array={ mockCards[itemEditBag.id].options }
        color={ itemEditBag.color }
        execFunction={ () => { } }
      />
      <div className={ style.secondline }>
        <Qtd
          quantityProduct={ infoBagItem.quantity }
          execFunction={ () => { } }
        />
        <div className={ style.titles }>
          <h1>{ infoBagItem.type }</h1>
          <h2>{ infoBagItem.title }</h2>
        </div>
      </div>
    </div>
  );
};

export default CardEdit;
