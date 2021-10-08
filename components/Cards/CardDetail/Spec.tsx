import React from 'react';
import Svg from '../../../assets/Svg';
import style from './style.module.scss';

function Spec({ specification }: any) {
  return (
    <div className={ style.detail }>
      <h3>
        <Svg icoName="spec" />
        Especificações
      </h3>
      { specification !== undefined && (
        <>
          <span>
            SKU:
            { ' ' }
            { specification.sku }
          </span>
          <span>
            Modelo:
            { ' ' }
            { specification.model }
          </span>
          <span>
            Ocasião:
            { ' ' }
            { specification.occasion }
          </span>
          <span>
            Tipo de frete:
            { ' ' }
            { specification.typeshipping }
          </span>
        </>
      ) }
    </div>
  );
}

export default Spec;
