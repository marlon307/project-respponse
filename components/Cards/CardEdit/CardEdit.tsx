import React from 'react';
import BarColors from '../../Bars/BarColors';
import Qtd from '../../Bars/Qtd';
import style from './style.module.scss';
import BarSize from '../../Bars/BarSize';
import mockColors from '../../../service/colorsMock';
import LoadingImage from '../../LoadImage/LoadingImage';
import img from '../../../assets/img/brian-lawson-e9o9sAy5PL4-unsplash_1-removebg-preview.png';

function CardEdit() {
  return (
    <div className={ style.edit }>
      <div className={ style.visualcont }>
        <div className={ style.contimg }>
          <LoadingImage url={ img } />
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
