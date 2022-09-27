import React, { useRef } from 'react';
import Link from 'next/link';
import { SmallCard } from '../../Cards';
import { BtnRedirect } from '../../Buttons';
import useBag from '../../../hooks/useBag';
import { TypeAddBagInfos } from '../../../@types/bag';
import calcAllValuesArray from '../../../hooks/useCalcs';
import style from './styles/style.module.scss';

function MenuBag() {
  const ref = useRef(null);
  const { props } = useBag(true);

  return (
    <div className={ style.bag } data-bag={ Boolean(props.listBag?.length) }>
      <Link href="/bag">
        <a aria-label="Sacola">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M19 7h-3V6a4 4 0 1 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1Zm-9-1a2 2 0 1 1 4 0v1h-4V6Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 1 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10Z" fill="#333" />
          </svg>
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
              props.listBag?.length ? 'Sacola' : 'Sacola Vazia'
            }
          </h2>
          <ul>
            {
              props.listBag?.map((object: TypeAddBagInfos) => (
                <li key={ object.id + object.color + object.size }>
                  <SmallCard
                    objectID={ object }
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
                { calcAllValuesArray(props.listBag)?.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                }) }
              </span>
            </div>
            <BtnRedirect path="/bag" titleBtn="Finalizar compra" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuBag;
