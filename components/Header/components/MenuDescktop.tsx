import React from 'react';
import SearchBar from '../../SearchBar';
import MenuBag from './MenuBag';
import MenuUser from './MenuUser';
import style from './styles/styleMenudescktop.module.scss';

function MenuDescktop() {
  return (
    <div className={ style.menuDescktop }>
      <SearchBar />
      <MenuBag />
      <MenuUser />
    </div>
  );
}

export default MenuDescktop;
