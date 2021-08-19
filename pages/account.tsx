import React, { useState } from 'react';
import cx from 'classnames';
import style from './styles/styleAccount.module.scss';
import Usercfg from './usercfg';
import Order from './orders';
import Cards from './cards';
import Address from './address';
import Help from './help';
import Svg from '../assets/Svg';

function account() {
  const [dropOption, setDropOption] = useState('');

  function openMenu(event: any, menuName: string) {
    event.preventDefault();
    setDropOption(menuName);
  }

  return (
    <div className={ style.account }>
      <div className={ style.container }>
        <a
          href="/usercfg"
          onClick={ (event) => openMenu(event, 'usercfg') }
          className={ cx(style.dropOption, {
            [style.open]: dropOption === 'usercfg',
          }) }
        >
          <Svg icoName="user" />
          <span>Configurações do Usuário</span>
        </a>
        <div className={ style.dropcontainer }>
          <Usercfg />
        </div>
      </div>
      <div className={ style.container }>
        <a
          href="/order"
          onClick={ (event) => openMenu(event, 'order') }
          className={ cx(style.dropOption, {
            [style.open]: dropOption === 'order',
          }) }
        >
          <Svg icoName="list" />
          <span>Pedidos</span>
        </a>
        <div className={ style.dropcontainer }>
          <Order />
        </div>
      </div>
      <div className={ style.container }>
        <a
          href="/address"
          onClick={ (event) => openMenu(event, 'address') }
          className={ cx(style.dropOption, {
            [style.open]: dropOption === 'address',
          }) }
        >
          <Svg icoName="map" />
          <span>Endereços</span>
        </a>
        <div className={ style.dropcontainer }>
          <Address />
        </div>
      </div>
      <div className={ style.container }>
        <a
          href="/cards"
          onClick={ (event) => openMenu(event, 'cards') }
          className={ cx(style.dropOption, {
            [style.open]: dropOption === 'cards',
          }) }
        >
          <Svg icoName="card" />
          <span>Cartões</span>
        </a>
        <div className={ style.dropcontainer }>
          <Cards />
        </div>
      </div>
      <div className={ style.container }>
        <a
          href="/help"
          onClick={ (event) => openMenu(event, 'help') }
          className={ cx(style.dropOption, {
            [style.open]: dropOption === 'help',
          }) }
        >
          <Svg icoName="question" />
          <span>Ajuda</span>
        </a>
        <div className={ style.dropcontainer }>
          <Help />
        </div>
      </div>
    </div>
  );
}

export default account;
