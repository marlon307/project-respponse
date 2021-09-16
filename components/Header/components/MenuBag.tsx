import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';
import style from './styles/styleMenuBag.module.scss';
import { SmallCard } from '../../Cards';
import useOutsideClick from '../../../hooks/useOutSide';
import Svg from '../../../assets/Svg';

function MenuBag() {
  const router = useRouter();
  const [enable, setEnable] = useState(false);
  const ref = useRef(null);

  useOutsideClick(ref, () => enable && setEnable(false));

  function clickBag(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    setEnable(!enable);
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
}

export default MenuBag;
