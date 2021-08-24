import React from 'react';
import style from './style.module.scss';
import { mockApiFilterUsed } from '../../service/colorsMock';
import {
  FBranch, FColor, FTissue, FSize,
} from './index';

interface PropsmapFilter {
  branch?: string;
  color?: string;
  colorName?: string;
  size?: string;
  tecid?: string;
}

function BarFilter() {
  return (
    <div className={ style.filter }>
      <div className={ style.mainfilter }>
        Filtro
      </div>
      { mockApiFilterUsed.map(({
        color, colorName, size, tecid, branch,
      }: PropsmapFilter) => {
        if (color) return <FColor color={ color } cName={ colorName } />;
        if (size) return <FSize size={ size } />;
        if (tecid) return <FTissue tecid={ tecid } />;
        if (branch) return <FBranch branch={ branch } />;
      }) }
    </div>
  );
}

export default BarFilter;
