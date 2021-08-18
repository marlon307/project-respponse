import React from 'react';
import BarColors from '../../components/Bars/BarColors';
import style from './product.module.scss';
import colors from '../../service/colorsMock';

function productId() {
  return (
    <div className={ style.product }>
      <div className={ style.slide }>
        <BarColors arrayColor={ colors } />
      </div>
    </div>
  );
}

export default productId;
