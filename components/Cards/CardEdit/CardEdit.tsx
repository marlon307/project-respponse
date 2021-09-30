import React from 'react';
import Image from 'next/image';
import BarColors from '../../Bars/BarColors';
import Qtd from '../../Bars/Qtd';
import style from './style.module.scss';
import img from '../../../assets/img/brian-lawson-a-mtphgCGo8-unsplash_1-removebg-preview.png';
import BarSize from '../../Bars/BarSize';
import mockColors from '../../../service/mockColor';
import size from '../../../service/colorsMock';

function CardEdit() {
  return (
    <div className={ style.edit }>
      <div className={ style.contimg }>
        <Image
          quality={ 90 }
          placeholder="blur"
          src={ img }
          alt="Title"
          layout="responsive"
          objectPosition="relative"
        />
      </div>
      <BarSize array={ size } colorName="Laranja" />
      <BarColors array={ mockColors } />
      <Qtd />
    </div>
  );
}

export default CardEdit;
