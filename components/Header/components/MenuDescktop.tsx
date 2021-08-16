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
    <div className={ style.menuDescktop }>
      <SearchBar
        searchopen={ searchopen }
        setSearchopen={ setSearchopen }
      />
      <MenuBag />
      <MenuUser />
    </div>
  );
}

export default MenuDescktop;
