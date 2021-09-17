import React, { useState } from 'react';
import Flicking from '@egjs/react-flicking';
import dynamic from 'next/dynamic';
import style from './style.module.scss';
import mockApiFilterUsed from '../../service/mockFiltermostUsed';
import {
  FBranch, FColor, FTissue, FSize,
} from './index';
import ContentModal from '../Modal/ContentModal';
import Svg from '../../assets/Svg';
import Loading from '../Loading/Loading';

const Filter = dynamic(() => import('./Filter'), {
  loading: () => <Loading />,
});
const OrderFilter = dynamic(() => import('./Order'), {
  loading: () => <Loading />,
});

function BarFilter() {
  const [openFilter, setOpenFilter] = useState('');

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
            onClick={ () => setOpenFilter('filter') }
          >
            Filtro
            <Svg icoName="setLeft" />
          </button>
        </div>
        <div className="panel">
          <button
            type="button"
            className={ style.filtername }
            onClick={ () => setOpenFilter('ofilter') }
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
      <ContentModal
        isOpen={
          openFilter === 'ofilter' || openFilter === 'filter'
        }
        openModal={ () => setOpenFilter('') }
      >
        { openFilter === 'filter' && <Filter /> }
        { openFilter === 'ofilter' && <OrderFilter /> }
      </ContentModal>
    </div>
  );
}

export default BarFilter;
