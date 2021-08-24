import React from 'react';
import SearchBar from '../../SearchBar';
import MenuBag from './MenuBag';
import MenuUser from './MenuUser';
import style from './styles/styleMenudescktop.module.scss';

interface IProps {
  setSearchopen: Function
  searchopen: boolean
}

function MenuDescktop({ setSearchopen, searchopen }: IProps) {
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
