import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BarColors from '../../Bars/BarColors';
import Qtd from '../../Bars/Qtd';
import BarSize from '../../Bars/BarSize';
import style from './style.module.scss';
import { mockCards } from '../../../service/mockCards';
import LoadingImage from '../../LoadImage';
import { itemBagEdit } from '../../../redux/redux-actions';
import { checkColorAvailable, checkSizeAvailable } from '../../../hooks/useCheckAvailable';

type TObjectUserBag = {
  user: {
    bagItems: Array<{
      id: number;
      title: string;
      type: string;
      mainImg: Object;
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
      type: string;
      title: string;
      quantity: number;
      identifyBag: string;
      colorName: string;
      color: string;
      size: string;
    }
  };
}

const CardEdit = function CardEdit() {
  const { itemEditBag } = useSelector(({ user }: TObjectUserBag) => user);
  const dispatch = useDispatch();
  const [colorupdate, setColorUpdate] = useState<any>({});
  const [sizeupdate, setSizeUpdate] = useState(itemEditBag.size);
  const [qauntityupdate, setQauntityUpdate] = useState(itemEditBag.quantity);
  const [urlImage, setUrlimg] = useState<any>({});
  const [infoBagItem, setInfoBagitem] = useState(itemEditBag);

  useEffect(() => {
    const array = mockCards[itemEditBag.id].options;
    checkSizeAvailable(array, colorupdate.color);

    const { imgs } = array.find((object) => object.color === itemEditBag.color)!;
    setUrlimg(imgs[0].urlImg);
    checkColorAvailable(mockCards[itemEditBag.id].options, sizeupdate);
  }, [colorupdate, sizeupdate]);

  useEffect(() => {
    setInfoBagitem({
      ...infoBagItem,
      quantity: qauntityupdate,
      ...colorupdate,
      size: sizeupdate,
    });
  }, [colorupdate, sizeupdate, qauntityupdate]);

  useEffect(() => () => {
    dispatch(itemBagEdit(infoBagItem));
  }, [infoBagItem]);

  return (
    <div className={ style.edit }>
      <div className={ style.visualcont }>
        <div className={ style.contimg }>
          <LoadingImage
            alt="title"
            url={
              urlImage.src === undefined
                ? mockCards[itemEditBag.id].options[0].imgs[0].urlImg
                : urlImage
            }
          />
        </div>
        <BarColors
          array={ mockCards[itemEditBag.id].options }
          execFunction={ setColorUpdate }
        />
      </div>
      <BarSize
        array={ mockCards[itemEditBag.id].options }
        color={ itemEditBag.color }
        execFunction={ setSizeUpdate }
      />
      <div className={ style.secondline }>
        <Qtd
          quantityProduct={ qauntityupdate }
          execFunction={ setQauntityUpdate }
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
