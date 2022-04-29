import React, { useRef } from 'react';
import cx from 'classnames';
import Link from 'next/link';
import { useAppSelector } from '../../../redux/hooks';
import { SmallCard } from '../../Cards';
import Svg from '../../../assets/Svg';
import style from './styles/style.module.scss';
import { BtnRedirect } from '../../Buttons';

function MenuBag() {
  const { bagItems, valueBag } = useAppSelector(({ bag }) => bag);
  const ref = useRef(null);

  return (
    <div className={ cx(style.bag, {
      [style.contb]: bagItems.length,
    }) }
    >
      <Link href="/bag">
        <a aria-label="Sacola">
          <Svg icoName="bag" />
        </a>
      </Link>
      <div
        ref={ ref }
        className={ style.dropBag }
      >
        <span className={ style.set } />
        <div className={ style.containBag }>
          <h2 className={ style.titlemenu }>
            {
              bagItems.length ? 'Sacola' : 'Sacola Vazia'
            }
          </h2>
          <ul>
            {
              bagItems.map((object) => (
                <li key={ object.id + object.color + object.size }>
                  <SmallCard
                    objectID={ object }
                    identifyBag={ object.id + object.color + object.size }
                    removable
                  />
                </li>
              ))
            }
          </ul>
          <div className={ style.baginfo }>
            <div>
              <span>Total:</span>
              <span>
                { valueBag.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                }) }
              </span>
            </div>
            <BtnRedirect path="/bag" titleBtn="Checkout" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuBag;
