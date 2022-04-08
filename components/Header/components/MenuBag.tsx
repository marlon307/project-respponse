import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';
import Link from 'next/link';
import { useAppSelector } from '../../../redux/hooks';
import { SmallCard } from '../../Cards';
import Svg from '../../../assets/Svg';
import style from './styles/style.module.scss';
// sd
function MenuBag() {
  const router = useRouter();
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
