import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import style from './style.module.scss';
import { SmallCard } from '../../Cards';
import useOutsideClick from '../../../hooks/useOutSide';
import Svg from '../../../assets/Svg';
import { calcAllValuesArray } from '../../../hooks/useCalcs';

type PropsMNBag = {
  setMenuDropdown: Function;
}

type TObjectUserBag = {
  user: {
    bagItems: Array<{
      id: number;
      title: string;
      type: string;
      mainImg: string | any;
      price: number;
      colorName: string;
      color: string;
      size: string;
      quantity: number;
      discount: number
    }>
  }
}

const MenuBag = function MenuBag({ setMenuDropdown }: PropsMNBag) {
  const router = useRouter();
  const { bagItems } = useSelector(({ user }: TObjectUserBag) => user);
  const [enable, setEnable] = useState(false);
  const [valueTotalProducts, setValueTotalProducts] = useState('');
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

  useEffect(() => {
    setValueTotalProducts(calcAllValuesArray(bagItems));
  }, [bagItems]);

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
            { bagItems.map((object) => (
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
              <span>
                { valueTotalProducts }
              </span>
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
