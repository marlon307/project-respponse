import React from 'react';
import Image from 'next/image';
import BarColors from '../../Bars/BarColors';
import Qtd from '../../Bars/Qtd';
import style from './style.module.scss';
import img from '../../../assets/img/brian-lawson-a-mtphgCGo8-unsplash_1-removebg-preview.png';
import BarSize from '../../Bars/BarSize';
import mockColors from '../../../service/colorsMock';

function CardEdit() {
  return (
    <div className={ style.edit }>
      <div className={ style.visualcont }>
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
        <BarColors array={ mockColors } />
      </div>
      <BarSize array={ mockColors } colorName="Laranja" />
      <div className={ style.secondline }>
        <Qtd />
        <div className={ style.titles }>
          <h1>Berrylush</h1>
          <h2>Top Forever 21 Canelado Preto</h2>
        </div>
      </div>
    </div>
  );
}

export default CardEdit;
