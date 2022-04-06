import React, {
  useState, useRef, useEffect,
} from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { SmallCard } from '../../Cards';
import Svg from '../../../assets/Svg';
import style from './styles/style.module.scss';

type PropsMNBag = {
  setMenuDropdown: Function;
};

function MenuBag({ setMenuDropdown }: PropsMNBag) {
  const router = useRouter();
  const [enable, setEnable] = useState(false);
  const { bagItems, valueBag } = useAppSelector(({ bag }) => bag);
  const ref = useRef(null);

  // useOutsideClick(ref, () => {
  //   if (enable) {
  //     setEnable(false);
  //     setMenuDropdown(null);
  //   }
  // });

  function clickBag(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    setEnable(!enable);
    setMenuDropdown('bag');
  }

  useEffect(() => {
    // setValueTotalProducts(calcAllValuesArray(bagItems));
  }, [/* bagItems */]);

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
        {/* Link Custon pls */ }
        <Svg icoName="bag" />
      </a>
      <div
        ref={ ref }
        className={ style.dropBag }
      >
        <span className={ style.set } />
        <div className={ style.containBag }>
          <h2 className={ style.titlemenu }>
            {
              // bagItems.length ? 'Sacola' : 'Sacola Vazia'
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
