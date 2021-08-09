import React from 'react';
import Image from 'next/image';
import iconBag from '../../../img/u_shopping-bag.svg';
import style from './styles/styleMenuBag.module.scss';
import { SmallCard } from '../../Cards';

function MenuBag() {
  return (
    <div className={ style.bag }>
      <Image src={ iconBag } />
      <span />

      <div className={ style.dropBag }>
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
      </div>
    </div>
  );
}

export default MenuBag;
