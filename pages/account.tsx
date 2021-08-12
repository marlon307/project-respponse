import React, { useState } from 'react';
import Image from 'next/image';
import style from './styles/styleAccount.module.scss';
import icoUser from '../assets/img/u_user.svg';
import icoMap from '../assets/img/map-marker.svg';
import icoHelp from '../assets/img/u_question-circle.svg';
import icoCard from '../assets/img/card.svg';
import icoOrder from '../assets/img/u_list-ul.svg';
import Usercfg from './usercfg';
import Order from './orders';

function account() {
  const [dropOption, setDropOption] = useState('');

  function openMenu(event: { preventDefault: () => void; }, menu: string) {
    event.preventDefault();
    setDropOption(menu);
  }

  return (
    <div className={ style.account }>
      <div className={ style.container }>
        <a
          href="/usercfg"
          onClick={ (event) => openMenu(event, 'usercfg') }
          className={ style.dropOption }
        >
          <Image src={ icoUser } />
          <span>Configurações do Usuário</span>
        </a>
        { dropOption === 'usercfg' && <Usercfg /> }
      </div>
      <div className={ style.container }>
        <a
          href="/order"
          onClick={ (event) => openMenu(event, 'order') }
          className={ style.dropOption }
        >
          <Image src={ icoOrder } />
          <span>Pedidos</span>
        </a>
        { dropOption === 'order' && <Order /> }
      </div>
      <div className={ style.container }>
        <a
          href="/address"
          onClick={ (event) => openMenu(event, 'address') }
          className={ style.dropOption }
        >
          <Image src={ icoMap } />
          <span>Endereços</span>
        </a>
      </div>
      <div className={ style.container }>
        <a
          href="/cards"
          onClick={ (event) => openMenu(event, 'cards') }
          className={ style.dropOption }
        >
          <Image src={ icoCard } />
          <span>Cartões</span>
        </a>
      </div>
      <div className={ style.container }>
        <a
          href="/help"
          onClick={ (event) => openMenu(event, 'help') }
          className={ style.dropOption }
        >
          <Image src={ icoHelp } />
          <span>Ajuda</span>
        </a>
      </div>
    </div>
  );
}

export default account;
