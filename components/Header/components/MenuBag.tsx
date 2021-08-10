import React, { useState, useRef } from 'react';
import Image from 'next/image';
import cx from 'classnames';
import iconBag from '../../../img/u_shopping-bag.svg';
import style from './styles/styleMenuBag.module.scss';
import indication from '../../../img/u_arrow-right.svg';
import { SmallCard } from '../../Cards';
import useOutsideClick from '../../../hooks/useOutSide';

function MenuBag() {
  const [enable, setEnable] = useState(false);
  const ref = useRef(null);

  useOutsideClick(ref, () => enable && setEnable(false));

  return (
    <div className={ style.bag }>
      <Image src={ iconBag } onClick={ () => setEnable(!enable) } />

      <div
        ref={ ref }
        className={ cx(style.dropBag, {
          [style.drop]: enable,
        }) }
      >
        <span className={ style.set } />
        <div className={ style.containBag }>
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
              <span>
                <Image src={ indication } />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuBag;
