import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import style from './style.module.scss';
import Usercfg from './usercfg';
import Order from './orders';
import Cards from './cards';
import Address from './address';
import Help from './help';
import Svg from '../assets/Svg';

interface IUser {
  user: {
    logged: boolean;
  }
}

function account() {
  const { logged } = useSelector(({ user }: IUser) => user);
  const router = useRouter();

  useEffect(() => {
    if (!logged) {
      router.push('/');
    }
  }, [logged]);

  const [dropOption, setDropOption] = useState('');

  return (
    <div className={ style.account }>
      <div className={ style.container } id="user">
        <a
          href="#user"
          onClick={ () => setDropOption('usercfg') }
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
      <div className={ style.container } id="orders">
        <a
          href="#orders"
          onClick={ () => setDropOption('order') }
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
      <div className={ style.container } id="address">
        <a
          href="#address"
          onClick={ () => setDropOption('address') }
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
      <div className={ style.container } id="cards">
        <a
          href="#cards"
          onClick={ () => setDropOption('cards') }
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
      <div className={ style.container } id="help">
        <a
          href="#help"
          onClick={ () => setDropOption('help') }
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
