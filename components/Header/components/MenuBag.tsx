import React, {
  useState, useRef, useEffect,
} from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import useOutsideClick from 'hooks/useOutSide';
import Svg from 'assets/Svg';
import calcAllValuesArray from 'hooks/useCalcs';
import type { ReduxUser } from 'types/typesUserRedux';
import { SmallCard } from '../../Cards';
import style from './style.module.scss';

type PropsMNBag = {
  setMenuDropdown: Function;
};

function MenuBag({ setMenuDropdown }: PropsMNBag) {
  const router = useRouter();
  const { bagItems } = useSelector(({ user }: ReduxUser) => user);
  const [enable, setEnable] = useState(false);
  const [valueTotalProducts, setValueTotalProducts] = useState(0);
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
    <div className={ cx(style.bag, {
      [style.contb]: bagItems.length,
    }) }
    >
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
          <h2 className={ style.titlemenu }>
            {
              bagItems.length ? 'Sacola' : 'Sacola Vazia'
            }
          </h2>
          <ul>
            { bagItems.map((object) => (
              <li key={ object.id + object.color + object.size }>
                <SmallCard
                  objectID={ object }
                  identifyBag={ object.id + object.color + object.size }
                  removable
                />
              </li>
            )) }
          </ul>
          <div className={ style.baginfo }>
            <div>
              <span>Total:</span>
              <span>
                { valueTotalProducts.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                }) }
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
}

export default MenuBag;
