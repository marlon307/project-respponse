import React, { useEffect, useState } from 'react';
import type { ImageProps } from 'next/image';
import { checkColorAvailable, checkSizeAvailable } from '../../../hooks/useCheckAvailable';
import BarColors from '../../Bars/BarColors';
import BarSize from '../../Bars/BarSize';
import Qtd from '../../Bars/Qtd';
import LoadingImage from '../../LoadImage';
import { mockCards } from '../../../service/mockCards';
import { StateBagType } from '../../../types/bag';
import style from './style.module.scss';

type TCardEdit = {
  itemEdit: StateBagType['itemEditBag']
};

function CardEdit({ itemEdit }: TCardEdit) {
  const [colorupdate, setColorUpdate] = useState({
    color: itemEdit.color,
    colorName: itemEdit.colorName,
  });
  const [sizeupdate, setSizeUpdate] = useState(itemEdit.size);
  const [qauntityupdate, setQauntityUpdate] = useState(itemEdit.quantity);
  const [urlImage, setUrlimg] = useState<ImageProps['src']>();

  useEffect(() => {
    const array = mockCards[itemEdit.id].options;
    checkSizeAvailable(array, colorupdate.color);

    const { imgs } = array.find((object) => object.color === itemEdit.color)!;

    setUrlimg(imgs[0].urlImg);
    checkColorAvailable(mockCards[itemEdit.id].options, sizeupdate);
  }, [colorupdate, sizeupdate]);

  useEffect(() => {
    // const {
    //   id, title, mainImg, color, size, type, quantity,
    // } = itemEdit;

    // if (color !== colorupdate.color || sizeupdate !== size || qauntityupdate !== quantity) {
    //   dispatch(EDIT_BAG_ITEM({
    //     id,
    //     title,
    //     mainImg,
    //     type,
    //     ...colorupdate,
    //     size: sizeupdate,
    //     quantity: qauntityupdate,
    //     identifyBag: itemEdit.identifyBag,
    //   }));
    // }
  }, [colorupdate, qauntityupdate, sizeupdate]);

  useEffect(() => () => {
    // dispatch(FINISH_EDIT_BAG_ITEM());
  }, []);

  return (
    <div className={ style.edit }>
      <div className={ style.visualcont }>
        <div className={ style.contimg }>
          <LoadingImage
            alt="title"
            width={ 200 }
            height={ 300 }
            src={ !urlImage
              ? mockCards[itemEdit.id].options[0].imgs[0].urlImg
              : urlImage }
            priority
            loading="eager"
          />
        </div>
        <div className={ style.colors }>
          <BarColors
            array={ mockCards[itemEdit.id].options }
            execFunction={ setColorUpdate }
          />
        </div>
      </div>
      <BarSize
        array={ mockCards[itemEdit.id].options }
        color={ itemEdit.color }
        execFunction={ setSizeUpdate }
      />
      <div className={ style.secondline }>
        <Qtd
          quantityProduct={ qauntityupdate }
          execFunction={ setQauntityUpdate }
        />
        <div className={ style.titles }>
          <h1>{ itemEdit.type }</h1>
          <h2>{ itemEdit.title }</h2>
        </div>
      </div>
    </div>
  );
}

export default CardEdit;
