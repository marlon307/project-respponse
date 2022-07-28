import React, { useRef } from 'react';
import Link from 'next/link';
import { SmallCard } from '../../Cards';
import style from './styles/style.module.scss';
import { BtnRedirect } from '../../Buttons';

const mockItem = [{
  id: 0,
  title: 'Algodão Pima',
  type: 'Jérsei',
  mainImg: 'https://i.imgur.com/dDldc4q.png',
  price: 71.25,
  oldPrice: 75.00,
  colorName: 'Azul',
  color: '#74bcf7',
  size: 'M',
  quantity: 2,
  discount: 5,
  identifyBag: '0#74bcf7M',
  code: '3SFA469',
}];

function MenuBag() {
  const ref = useRef(null);

  return (
    <div className={ style.bag } data-bag={ Boolean(mockItem.length) }>
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
              mockItem.length ? 'Sacola' : 'Sacola Vazia'
            }
          </h2>
          <ul>
            {
              mockItem.map((object) => (
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
                { Number(126).toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                }) }
              </span>
            </div>
            <BtnRedirect path="/bag" titleBtn="Checkout" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuBag;
