import React, { useState } from 'react';
import Flicking from '@egjs/react-flicking';
import style from './style.module.scss';
import mockApiFilterUsed from '../../service/mockFiltermostUsed';
import {
  FBranch, FColor, FTissue, FSize,
} from './index';
import ContentModal from '../Modal/ContentModal';
import Filter from './Filter';
import Svg from '../../assets/Svg';

function BarFilter() {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div className={ style.filter }>
      <Flicking
        align="prev"
        bound
      >
        <div className="panel">
          <button
            className={ style.filtername }
            type="button"
            onClick={ () => setOpenFilter(true) }
          >
            Filtro
            <Svg icoName="setLeft" />
          </button>
        </div>
        <div className="panel">
          <button
            type="button"
            className={ style.filtername }
          >
            Ordernar Por
            <Svg icoName="setLeft" />
          </button>
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
      <ContentModal isOpen={ openFilter } openModal={ setOpenFilter }>
        <Filter />
      </ContentModal>
    </div>
  );
}

export default BarFilter;
