import React, { useEffect, useState } from 'react';
import type { ImageProps } from 'next/image';
import { checkColorAvailable, checkSizeAvailable } from '../../../hooks/useCheckAvailable';
import BarColors from '../../Bars/BarColors';
import BarSize from '../../Bars/BarSize';
import Qtd from '../../Bars/Qtd';
import LoadingImage from '../../LoadImage';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { mockCards } from '../../../service/mockCards';
import style from './style.module.scss';
import { EDIT_BAG_ITEM } from '../../../redux/actions';

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
  }, [colorupdate, sizeupdate, itemEditBag.color, itemEditBag.id]);

  useEffect(() => {
    if (!itemEditBag.color) {
      dispatch(EDIT_BAG_ITEM({
        ...itemEditBag,
        ...colorupdate,
        size: sizeupdate,
        quantity: qauntityupdate,
      }));
    }
  }, [colorupdate, dispatch, itemEditBag, qauntityupdate, sizeupdate]);

  // useEffect(() => {
  //   if (!inEdition) {
  //     dispatch(EDIT_BAG_ITEM({
  //       id: 0,
  //       title: '',
  //       type: '',
  //       color: '',
  //       mainImg: {
  //         src: '',
  //       },
  //       colorName: '',
  //       size: '',
  //       quantity: 0,
  //       identifyBag: '',
  //     }));
  //   }
  // }, [dispatch, inEdition]);

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
