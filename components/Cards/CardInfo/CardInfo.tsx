import React, { memo } from 'react';
import style from './style.module.scss';

type TInfoProps = {
  type: string;
  title: string;
  price: number;
  discount: number;
  oldPrice: number;
  colors: Array<Object>;
};

function CardInfo({
  title, type, price, colors, discount, oldPrice,
}: TInfoProps) {
  return (
    <div className={ style.info }>
      <div className={ style.primaryline }>
        <span>{ type }</span>
      </div>
      <div className={ style.secondline }>
        <span>{ title }</span>
      </div>
      <div className={ style.thirdline }>
        <div className={ style.colors }>
          { colors!
            && colors.map((_null, index) => {
              const value = Object.values(colors![index]);
              return (
                <span
                  key={ value[0] }
                  title={ value[0] }
                  style={ { backgroundColor: `${value[1]}` } }
                />
              );
            }) }
        </div>
        <div
          className={ style.price }
          data-oldprice={
            discount > 0 ? oldPrice.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            }) : ''
          }
        >
          <span>
            {
              price.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })
            }
          </span>
        </div>
      </div>
    </div>
  );
}

export default memo(CardInfo);
