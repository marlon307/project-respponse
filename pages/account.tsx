import React, { useState } from 'react';
import Image from 'next/image';
import cx from 'classnames';
import style from './styles/styleAccount.module.scss';
import icoUser from '../assets/img/u_user.svg';
import icoMap from '../assets/img/map-marker.svg';
import icoHelp from '../assets/img/u_question-circle.svg';
import icoCard from '../assets/img/card.svg';
import icoOrder from '../assets/img/u_list-ul.svg';
import Usercfg from './usercfg';
import Order from './orders';
import Cards from './cards';
import Address from './address';
import Help from './help';

interface IProps {
  preventDefault?: any;
  target?: any;
}

function account() {
  const [dropOption, setDropOption] = useState('');

  function openMenu(event: IProps) {
    event.preventDefault();

    const { target: { id } } = event;
    setDropOption(id);
  }

  return (
    <div className={ style.account }>
      <div className={ style.container }>
        <a
          href="/usercfg"
          id="usercfg"
          onClick={ openMenu }
          className={ style.dropOption }
        >
          <Image src={ icoUser } />
          <span>Configurações do Usuário</span>
        </a>
        <div className={ cx(style.dropcontainer, {
          [style.open]: dropOption === 'usercfg',
        }) }
        >
          <Usercfg />
        </div>
      </div>
      <div className={ style.container }>
        <a
          href="/order"
          id="order"
          onClick={ openMenu }
          className={ style.dropOption }
        >
          <Image src={ icoOrder } />
          <span>Pedidos</span>
        </a>
        <div className={ cx(style.dropcontainer, {
          [style.open]: dropOption === 'order',
        }) }
        >
          <Order />
        </div>
      </div>
      <div className={ style.container }>
        <a
          href="/address"
          id="address"
          onClick={ openMenu }
          className={ style.dropOption }
        >
          <Image src={ icoMap } />
          <span>Endereços</span>
        </a>
        <div className={ cx(style.dropcontainer, {
          [style.open]: dropOption === 'address',
        }) }
        >
          <Address />
        </div>
      </div>
      <div className={ style.container }>
        <a
          href="/cards"
          id="cards"
          onClick={ openMenu }
          className={ style.dropOption }
        >
          <Image src={ icoCard } />
          <span>Cartões</span>
        </a>
        <div className={ cx(style.dropcontainer, {
          [style.open]: dropOption === 'cards',
        }) }
        >
          <Cards />
        </div>
      </div>
      <div className={ style.container }>
        <a
          href="/help"
          id="help"
          onClick={ openMenu }
          className={ style.dropOption }
        >
          <Image src={ icoHelp } />
          <span>Ajuda</span>
        </a>
        <div className={ cx(style.dropcontainer, {
          [style.open]: dropOption === 'help',
        }) }
        >
          <Help />
        </div>
      </div>
    </div>
  );
}

export default account;
