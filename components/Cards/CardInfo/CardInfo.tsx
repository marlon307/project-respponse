import React from 'react';
import calcPercentage from '../../../service/calcPercentage';
import style from './style.module.scss';

type TInfoProps = {
  type: string;
  title: string;
  price: number;
  discount: number;
  colors: Array<Object>;
}

function CardInfo({
  title, type, price, colors, discount,
}: TInfoProps) {
  return (
    <div className={ style.info }>
      <div className={ style.primaryline }>
        <span>{ type }</span>
        <div>
          { discount > 0 && (
            <span>
              { (price - Number(calcPercentage(discount, price)))
                .toLocaleString('pt-br',
                  {
                    style: 'currency',
                    currency: 'BRL',
                  }) }
            </span>
          ) }
          <span>
            { price.toLocaleString('pt-br',
              {
                style: 'currency',
                currency: 'BRL',
              }) }
          </span>
        </div>
      </div>
      <div className={ style.secondline }>
        <span>{ title }</span>
      </div>
      <div className={ style.thirdline }>
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
    </div>
  );
}

export default CardInfo;
