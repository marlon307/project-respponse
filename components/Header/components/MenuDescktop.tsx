import React from 'react';
import SearchBar from '../../SearchBar';
import MenuBag from './MenuBag';
// import MenuBag from './MenuBag';
import MenuUser from './MenuUser';
// import SearchBar from '../../SearchBar';
// import MenuBag from './MenuBag';
// import MenuUser from './MenuUser';
import style from './style.module.scss';

type MnDescktop = {
  setSearchopen: Function;
  searchopen: boolean
};

function MenuDescktop({ setSearchopen, searchopen }: MnDescktop) {
  return (
    <nav className={ style.nav }>
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
