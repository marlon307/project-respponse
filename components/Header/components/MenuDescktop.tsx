import React from 'react';
import SearchBar from '../../SearchBar';
import MenuBag from './MenuBag';
import MenuUser from './MenuUser';
import { useAppSelector } from '../../../redux/hooks';
import style from './styles/style.module.scss';
import MenuMobile from './MenuMobile';

type MnDescktop = {
  setSearchopen: Function;
  searchopen: boolean
};

function MenuDescktop({ setSearchopen, searchopen }: MnDescktop) {
  const { logged } = useAppSelector(({ user }) => user);

  return (
    <nav className={ style.nav }>
      <SearchBar
        searchopen={ searchopen }
        setSearchopen={ setSearchopen }
      />
      { logged && <MenuBag /> }
      <MenuUser />
      <MenuMobile />
    </nav>
  );
}

export default MenuDescktop;
