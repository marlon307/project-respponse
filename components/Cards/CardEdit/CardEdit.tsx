import React, { useEffect, useState } from 'react';
import type { ImageProps } from 'next/image';
import { checkColorAvailable, checkSizeAvailable } from '../../../hooks/useCheckAvailable';
import BarColors from '../../Bars/BarColors';
import BarSize from '../../Bars/BarSize';
import Qtd from '../../Bars/Qtd';
import LoadingImage from '../../LoadImage';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { mockCards } from '../../../service/mockCards';
import { EDIT_BAG_ITEM, FINISH_EDIT_BAG_ITEM } from '../../../redux/actions';
import style from './style.module.scss';

function CardEdit() {
  const { itemEditBag } = useAppSelector(({ bag }) => bag);
  const dispatch = useAppDispatch();

  const [colorupdate, setColorUpdate] = useState({
    color: itemEditBag.color,
    colorName: itemEditBag.colorName,
  });
  const [sizeupdate, setSizeUpdate] = useState(itemEditBag.size);
  const [qauntityupdate, setQauntityUpdate] = useState(itemEditBag.quantity);
  const [urlImage, setUrlimg] = useState<ImageProps>();

  useEffect(() => {
    const array = mockCards[itemEditBag.id].options;
    checkSizeAvailable(array, colorupdate.color);

    const { imgs } = array.find((object) => object.color === itemEditBag.color)!;
    setUrlimg(imgs[0].urlImg);
    checkColorAvailable(mockCards[itemEditBag.id].options, sizeupdate);
  }, [colorupdate, sizeupdate]);

  useEffect(() => {
    const {
      id, title, mainImg, color, size, type, quantity,
    } = itemEditBag;

    if (color !== colorupdate.color || sizeupdate !== size || qauntityupdate !== quantity) {
      dispatch(EDIT_BAG_ITEM({
        id,
        title,
        mainImg,
        type,
        ...colorupdate,
        size: sizeupdate,
        quantity: qauntityupdate,
        identifyBag: itemEditBag.identifyBag,
      }));
    }
  }, [colorupdate, qauntityupdate, sizeupdate]);

  useEffect(() => () => {
    dispatch(FINISH_EDIT_BAG_ITEM());
  }, []);

  return (
    <div className={ style.edit }>
      <div className={ style.visualcont }>
        <div className={ style.contimg }>
          <LoadingImage
            alt="title"
            url={
              urlImage?.src === undefined
                ? mockCards[itemEditBag.id].options[0].imgs[0].urlImg
                : urlImage
            }
          />
        </div>
        <div className={ style.colors }>
          <BarColors
            array={ mockCards[itemEditBag.id].options }
            execFunction={ setColorUpdate }
          />
        </div>
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
          <h1>{ itemEditBag.type }</h1>
          <h2>{ itemEditBag.title }</h2>
        </div>
      </div>
    </div>
  );
}

export default CardEdit;
