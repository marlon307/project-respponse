import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';
import Menu from '../../../assets/img/Menu.svg';
import icoFav from '../../../assets/img/heart.svg';
import icoAcount from '../../../assets/img/setting.svg';
import icoHelp from '../../../assets/img/u_question-circle.svg';
import iconBag from '../../../assets/img/u_shopping-bag.svg';
import iconClose from '../../../assets/img/close.svg';
import iconLogin from '../../../assets/img/signin.svg';
import style from './styles/styleMenuMobile.module.scss';
import Bar from '../../SearchBar/Bar';

function MenuMobile() {
  const [dropMnMobile, setDropMnMobile] = useState(false);
  return (
    <div className={ style.mobile }>
      <Image
        src={ Menu }
        alt="Menu"
        onClick={ () => setDropMnMobile(true) }
      />
      <div className={ cx(style.dromn, {
        [style.drop]: dropMnMobile,
      }) }
      >
        <div className={ style.dropmobile }>
          <Bar />
          <ul>
            <li>
              <Link href="/help">
                <span>
                  <Image src={ icoHelp } />
                  Ajuda
                </span>
              </Link>
            </li>
            <li>
              <Link href="/account">
                <span>
                  <Image src={ icoAcount } />
                  Conta
                </span>
              </Link>
            </li>
            <li>
              <Link href="/favorite">
                <span>
                  <Image src={ icoFav } />
                  Favoritos
                </span>
              </Link>
            </li>
            <li>
              <Link href="/bag">
                <span>
                  <Image src={ iconBag } />
                  Sacola
                </span>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <span>
                  <Image src={ iconLogin } />
                  Login
                </span>
              </Link>
            </li>
          </ul>
          <div className={ style.close }>
            <Image
              src={ iconClose }
              onClick={ () => setDropMnMobile(false) }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuMobile;
