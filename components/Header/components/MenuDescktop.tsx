import React from 'react';
import SearchBar from '../../SearchBar';
import MenuBag from './MenuBag';
import MenuUser from './MenuUser';
import style from './styles/styleMenudescktop.module.scss';

type Props = {
  setSearchopen: Function
  searchopen: boolean
}

function MenuDescktop({ setSearchopen, searchopen }: Props) {
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
