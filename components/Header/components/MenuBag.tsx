import React from 'react';
import Image from 'next/image';
import iconBag from '../../../img/u_shopping-bag.svg';
import style from './styles/styleMenuBag.module.scss';
import { SmallCard } from '../../Cards';

function MenuBag() {
  return (
    <div className={ style.bag }>
      <Image src={ iconBag } />
      <span className={ style.set } />
      <div className={ style.dropBag }>
        <h2 className={ style.titlemenu }>Sacola</h2>
        <ul>
          <li>
            <SmallCard />
          </li>
          <li>
            <SmallCard />
          </li>
          <li>
            <SmallCard />
          </li>
        </ul>
        <div className={ style.baginfo }>
          <div>
            <span>Total:</span>
            <span>R$ 554,00</span>
          </div>
          <button type="button" className={ style.buyButton }>
            Ir para checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuBag;
