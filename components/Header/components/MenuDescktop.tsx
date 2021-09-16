import React from 'react';
import SearchBar from '../../SearchBar';
import MenuBag from './MenuBag';
import MenuUser from './MenuUser';
import style from './styles/styleMenudescktop.module.scss';

type PMnDescktop = {
  setSearchopen: Function
  searchopen: boolean
}

function MenuDescktop({ setSearchopen, searchopen }: PMnDescktop) {
  return (
    <nav className={ style.menuDescktop }>
      <SearchBar
        searchopen={ searchopen }
        setSearchopen={ setSearchopen }
      />
      <MenuBag />
      <MenuUser />
    </nav>
  );
}

export default MenuDescktop;
