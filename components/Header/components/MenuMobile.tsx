import React from 'react';
import Image from 'next/image';
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
  return (
    <div className={ style.mobile }>
      <Image src={ Menu } alt="Menu" />
      <div className={ style.dropmobile }>
        <Bar />
        <ul>
          <li>
            <Image src={ icoHelp } />
            Ajuda
          </li>
          <li>
            <Image src={ icoAcount } />
            Conta
          </li>
          <li>
            <Image src={ icoFav } />
            Favoritos
          </li>
          <li>
            <Image src={ iconBag } />
            Sacola
          </li>
          <li>
            <Image src={ iconLogin } />
            Login
          </li>
        </ul>
        <div className={ style.close }>
          <Image src={ iconClose } />
        </div>
      </div>
    </div>
  );
}

export default MenuMobile;
