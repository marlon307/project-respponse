import React from 'react';
import SearchBar from '../../SearchBar';
import MenuBag from './MenuBag';
import MenuUser from './MenuUser';
import style from './style.module.scss';

type PMnDescktop = {
  setSearchopen: Function
  setMenuDropdown: Function;
  searchopen: boolean
};

function MenuDescktop(
  { setSearchopen, searchopen, setMenuDropdown }: PMnDescktop,
) {
  return (
    <nav className={ style.menuDescktop }>
      <SearchBar
        searchopen={ searchopen }
        setSearchopen={ setSearchopen }
      />
      <MenuBag setMenuDropdown={ setMenuDropdown } />
      <MenuUser setMenuDropdown={ setMenuDropdown } />
    </nav>
  );
}

export default MenuDescktop;
