import React from 'react';
import Flicking from '@egjs/react-flicking';
import style from './style.module.scss';
import { mockApiFilterUsed } from '../../service/colorsMock';
import {
  FBranch, FColor, FTissue, FSize,
} from './index';

function BarFilter() {
  return (
    <div className={ style.filter }>
      <Flicking
        bound
        align="prev"
      >
        <div className={ style.mainfilter }>
          Filtro
        </div>
        { mockApiFilterUsed.map(({
          color, colorName, size, tecid, branch,
        }) => (
          <div className="panel">
            { color && <FColor color={ color } cName={ colorName } /> }
            { tecid && <FTissue tecid={ tecid } /> }
            { branch && <FBranch branch={ branch } /> }
            { size && <FSize size={ size } /> }
          </div>
        )) }
      </Flicking>
    </div>
  );
}

export default BarFilter;
