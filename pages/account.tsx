import React from 'react';
import Image from 'next/image';
import style from './styles/styleAccount.module.scss';
import icoUser from '../assets/img/u_user.svg';
import icoMap from '../assets/img/map-marker.svg';
import icoHelp from '../assets/img/u_question-circle.svg';
import icoCard from '../assets/img/card.svg';
import icoOrder from '../assets/img/u_list-ul.svg';

function account() {
  function openMenu(e: { preventDefault: () => void; }) {
    e.preventDefault();
  }

  return (
    <div className={ style.account }>
      <div className={ style.container }>
        <a href="teste" onClick={ openMenu } className={ style.dropOption }>
          <Image src={ icoUser } />
          <span>Configurações do Usuário</span>
        </a>
        <div className={ style.panel }>
          Panel
        </div>
      </div>
      <div className={ style.container }>
        <a href="teste" onClick={ openMenu } className={ style.dropOption }>
          <Image src={ icoOrder } />
          <span>Pedidos</span>
        </a>
        <div className={ style.panel }>
          Panel
        </div>
      </div>
      <div className={ style.container }>
        <a href="teste" onClick={ openMenu } className={ style.dropOption }>
          <input id="userconfig" type="checkbox" />
          <Image src={ icoMap } />
          <span>Endereços</span>
        </a>
        <div className={ style.panel }>
          Panel
        </div>
      </div>
      <div className={ style.container }>
        <a href="teste" onClick={ openMenu } className={ style.dropOption }>
          <input id="userconfig" type="checkbox" />
          <Image src={ icoCard } />
          <span>Cartões</span>
        </a>
        <div className={ style.panel }>
          Panel
        </div>
      </div>
      <div className={ style.container }>
        <a href="teste" onClick={ openMenu } className={ style.dropOption }>
          <input id="userconfig" type="checkbox" />
          <Image src={ icoHelp } />
          <span>Ajuda</span>
        </a>
        <div className={ style.panel }>
          Panel
        </div>
      </div>
    </div>
  );
}

export default account;
