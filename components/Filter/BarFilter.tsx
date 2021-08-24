import React from 'react';
import Flicking from '@egjs/react-flicking';
import style from './style.module.scss';
import mockApiFilterUsed from '../../service/mockFiltermostUsed';
import {
  FBranch, FColor, FTissue, FSize,
} from './index';

function BarFilter() {
  return (
    <div className={ style.filter }>
      <Flicking
        align="prev"
        bound
      >
        <div className={ style.mainfilter }>
          Filtro
        </div>
        <div className={ style.mainfilter }>
          Ordernar Por
        </div>
        { mockApiFilterUsed.map(({
          id, color, colorName, size, tecid, branch,
        }) => (
          <div className="panel" key={ id }>
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
