import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';
import style from './style.module.scss';
import { SmallCard } from '../../Cards';
import useOutsideClick from '../../../hooks/useOutSide';
import Svg from '../../../assets/Svg';
import mockBag from '../../../service/mockBag';

type PropsMNBag = {
  setMenuDropdown: Function;
}

const MenuBag = function MenuBag({ setMenuDropdown }: PropsMNBag) {
  const router = useRouter();
  const [enable, setEnable] = useState(false);
  const ref = useRef(null);

  useOutsideClick(ref, () => {
    if (enable) {
      setEnable(false);
      setMenuDropdown(null);
    }
  });

  function clickBag(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    setEnable(!enable);
    setMenuDropdown('bag');
  }

  return (
    <div className={ style.bag }>
      <a
        href="/bag"
        onClick={ (event) => clickBag(event) }
        aria-label="Sacola"
      >
        <Svg icoName="bag" />
      </a>
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
            { mockBag.map((object) => (
              <li key={ object.id }>
                <SmallCard
                  objectID={ object }
                  removable
                />
              </li>
            )) }
          </ul>
          <div className={ style.baginfo }>
            <div>
              <span>Total:</span>
              <span>R$ 554,00</span>
            </div>
            <button
              type="button"
              className={ cx('button1', style.buyButton) }
              onClick={ () => router.push('/bag') }
            >
              Ir para checkout
              <Svg icoName="indication" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBag;
